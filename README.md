# UrduCoder

Pakistan's #1 Roman Urdu coding blog. AI tools, Web Development, JavaScript aur tech tutorials asaan zubaan mein.

Built with **Next.js 16** (App Router), **Tailwind CSS 4**, and **MDX** for blog content.

## Features

- ⚡ Next.js 16 with Turbopack
- 🎨 Tailwind CSS 4
- 📝 MDX-powered blog posts with frontmatter
- 🎯 SEO optimized (sitemap, robots.txt, JSON-LD, OG images)
- 💰 Ad-ready (Google AdSense + Adsterra slots)
- 🌙 Dark mode support
- 📱 Fully responsive
- 🚀 Static generation for fastest performance

## Local Development

```bash
# Install dependencies
npm install

# Copy env template and fill values
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── blog/[slug]/        # Dynamic post pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy-policy/     # Privacy Policy (AdSense required)
│   ├── terms/              # Terms of Service
│   ├── disclaimer/         # Disclaimer
│   ├── sitemap.js          # Auto-generated sitemap
│   ├── robots.js           # robots.txt
│   ├── opengraph-image.js  # Default OG image
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage
├── components/             # React components
│   └── ads/                # Ad components (AdSense + Adsterra)
├── content/posts/          # MDX blog posts
├── lib/                    # Utility functions (posts, site config, ads)
└── public/                 # Static assets (ads.txt, etc.)
```

## Adding a New Blog Post

1. Create a new `.mdx` file in `content/posts/`
2. Add frontmatter:

```mdx
---
title: "Your Post Title"
description: "Short description for SEO"
date: "2026-05-02"
author: "UrduCoder"
category: "AI Tools"
tags: ["tag1", "tag2"]
featured: true
---

# Your content here

Write your post in Markdown/MDX...
```

3. Save — sitemap, OG image, and post page auto-update.

## Environment Variables

See `.env.example` for all variables. Key ones:

- `NEXT_PUBLIC_SITE_URL` — Site URL (e.g., `https://urducoder.com`)
- `NEXT_PUBLIC_ENABLE_ADS` — Master ad switch
- `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` — AdSense ID after approval
- `NEXT_PUBLIC_ADSTERRA_*_KEY` — Adsterra ad keys

## Build for Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push code to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy — site live ho jayegi automatically

## License

All rights reserved. © UrduCoder
