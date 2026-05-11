# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js Version

**This is Next.js 16.2.4 with Turbopack and React 19** — APIs, file conventions, and behavior may differ from older Next.js knowledge. Before writing or modifying any Next.js feature (routing, metadata, MDX, fonts, image, caching, server components), consult `node_modules/next/dist/docs/` for the actual behavior in this version. Heed deprecation notices in build output.

## Commands

```bash
npm run dev      # Dev server (Turbopack) at http://localhost:3000
npm run build    # Production build — also validates type generation, generates static pages, sitemap, OG images
npm run start    # Run production build locally (must run `build` first)
npm run lint     # ESLint with eslint-config-next
```

There is no test suite configured. Production-build verification is the de-facto integration test (`npm run build`); it will surface MDX parsing errors, frontmatter issues, generateStaticParams failures, and metadata problems that don't appear in dev mode.

## Architecture

### Content pipeline

Blog posts live as MDX files in `content/posts/*.mdx`. The pipeline is:

1. `lib/posts.js` reads files from disk with `node:fs`, parses YAML frontmatter via `gray-matter`, and exposes typed accessors: `getAllPosts`, `getAllPostSlugs`, `getPostBySlug`, `getFeaturedPosts`, `getPostsByCategory`, `getAllCategories`, `getRelatedPosts`. Reading time is computed from word count (200 wpm). All accessors are server-only (filesystem).

2. `app/blog/[slug]/page.js` uses `generateStaticParams` + `dynamicParams = false` to prerender every post at build time. The MDX body is rendered by `components/MDXContent.jsx` using `next-mdx-remote/rsc` with custom typography components and a fixed plugin chain: `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`, `rehype-pretty-code` (Shiki, github-light/dark).

3. `getRelatedPosts` ranks candidates by a simple score: same category = +5, each shared tag = +2, then date desc.

To add a post, create `content/posts/<slug>.mdx` with frontmatter (`title`, `description`, `date`, `author`, `category`, `tags`, `featured`). Sitemap, OG image, related posts, and routing all auto-update at next build.

### Site config (single source of truth)

`lib/site.js` is the canonical source for site URL, brand name, description, locale, author, and social links. Everything that needs to render an absolute URL or organizational metadata reads from this module — including `app/layout.js` (metadataBase, JSON-LD), `app/sitemap.js`, and `app/blog/[slug]/page.js` (canonical, Article JSON-LD).

`SITE_URL` resolves from `process.env.NEXT_PUBLIC_SITE_URL` with a hardcoded fallback (`https://urducoder.vercel.app`). The fallback is intentional — it matches the production Vercel URL so the site builds correctly even without env vars set. **When changing the brand or domain, update `lib/site.js`, not individual pages.**

`absoluteUrl(path)` is the helper to build absolute URLs (used for canonical, OG, JSON-LD).

### Ad architecture

All ad logic is gated through `lib/ads.js`. Three runtime modes:

- **Dev (`NODE_ENV !== "production"`)**: Components render `<AdPlaceholder>` (grey dashed box) instead of real ad markup, regardless of env vars.
- **Production with `NEXT_PUBLIC_ENABLE_ADS !== "true"` or missing IDs**: Components render `null` (no broken layouts).
- **Production with `NEXT_PUBLIC_ENABLE_ADS=true` + IDs set**: Real ads render.

`isAdSenseReady()` and `isAdsterraReady()` encapsulate this gating. Ad components in `components/ads/`:

- **AdSense**: `AdSenseScript` (head script via `next/script` afterInteractive), `AdSenseAuto` (auto ads), `AdSenseUnit` (manual slot — uses `useEffect` to push `adsbygoogle`).
- **Adsterra**: `AdsterraBanner` (highperformanceformat.com), `AdsterraSocialBar` / `AdsterraNative` / `AdsterraPopunder` (profitableratecpm.com). Each component injects its script tag into the DOM on mount and uses an `initialized` ref to prevent double-init under React strict mode.

`AdSenseScript`, `AdSenseAuto`, `AdsterraSocialBar`, `AdsterraPopunder` are mounted globally in `app/layout.js`. In-content slots (`AdSenseUnit`, `AdsterraNative`) are placed inline in `app/blog/[slug]/page.js` and `app/blog/page.js`.

Slot/key IDs are pulled from `NEXT_PUBLIC_ADSENSE_*` and `NEXT_PUBLIC_ADSTERRA_*_KEY` env vars — never hardcode them.

`public/ads.txt` is a placeholder that must be updated with the real Publisher ID after AdSense approval.

### SEO conventions (file-based, Next.js 16)

These files use Next.js 16 file conventions — they are not regular routes:

- `app/sitemap.js` → `/sitemap.xml` (combines static routes + every post from `getAllPosts()`)
- `app/robots.js` → `/robots.txt` (blocks GPTBot and CCBot from training scrapes; allows everything else)
- `app/opengraph-image.js` → default site OG image (1200×630 PNG via `next/og` `ImageResponse`)
- `app/blog/[slug]/opengraph-image.js` → per-post OG image with category-specific gradient. Uses `generateStaticParams` for prerendering. **Do not add `generateImageMetadata` here** — it changes the URL to `/opengraph-image/main` which broke previously; remove it if reintroduced.

JSON-LD is injected via `components/JsonLd.jsx` (a `<script type="application/ld+json">` wrapper). Layout adds Organization + WebSite schemas; post pages add BlogPosting + BreadcrumbList. Empty social URLs in `siteConfig.social` are filtered out before being added to `sameAs`.

### MDX configuration

`next.config.mjs` wraps the Next.js config with `withMDX` from `@next/mdx` and adds `pageExtensions: ["js", "jsx", "md", "mdx"]`. `mdx-components.js` at the project root is required by App Router for MDX to work, even though we don't render MDX through file-based routing — we render via `next-mdx-remote/rsc` from `components/MDXContent.jsx`. Don't delete `mdx-components.js`.

### Contact form

`components/ContactForm.jsx` is a client component that POSTs JSON to `https://api.web3forms.com/submit`. The access key comes from `NEXT_PUBLIC_WEB3FORMS_KEY`. There is a hidden `botcheck` honeypot — its value is sent as empty string when unchecked (real users can't see it; bots auto-fill it and get rejected). Use `.checked` not `.value` when reading the checkbox state — `.value` defaults to `"on"` regardless of checked state and will get every submission rejected.

## Environment variables

All client-exposed vars are `NEXT_PUBLIC_*`. See `.env.example` for the full list. Important ones:

- `NEXT_PUBLIC_SITE_URL` — used for canonical URLs, sitemap, JSON-LD. Falls back to the hardcoded URL in `lib/site.js` if missing.
- `NEXT_PUBLIC_ENABLE_ADS` — master switch. Must be the literal string `"true"` to enable ads.
- `NEXT_PUBLIC_WEB3FORMS_KEY` — required for the contact form to work.
- `NEXT_PUBLIC_ADSENSE_*` / `NEXT_PUBLIC_ADSTERRA_*_KEY` — populated after each network approves the site.

After changing env vars in Vercel, **trigger a redeploy** — env changes do not apply to existing deployments.

## Deployment

- Hosted on Vercel, branch `main` → Production at `urducoder.vercel.app`.
- Production build is statically generated end-to-end (the build log shows `(Static)` and `(SSG)` for every route). Anything that changes per-request (request-time APIs, dynamic data sources) will move routes off the static path — verify the build output if you add such code.
