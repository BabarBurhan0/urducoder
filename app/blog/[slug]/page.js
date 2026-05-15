import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/posts";
import { siteConfig, absoluteUrl } from "@/lib/site";
import MDXContent from "@/components/MDXContent";
import PostCard from "@/components/PostCard";
import ReadingProgress from "@/components/ReadingProgress";
import ShareButtons from "@/components/ShareButtons";
import JsonLd from "@/components/JsonLd";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import AdsterraNative from "@/components/ads/AdsterraNative";
import { adsConfig } from "@/lib/ads";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const { title, description, date, author, tags } = post.frontmatter;
  const canonical = absoluteUrl(`/blog/${slug}`);

  return {
    title,
    description,
    keywords: tags,
    authors: [{ name: author }],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      publishedTime: date,
      authors: [author],
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(siteConfig.author.twitter && { creator: siteConfig.author.twitter }),
    },
  };
}

const categoryGradients = {
  "AI Tools": "from-purple-500 to-pink-500",
  "Web Development": "from-blue-500 to-cyan-500",
  JavaScript: "from-yellow-500 to-orange-500",
  "Career Tips": "from-green-500 to-emerald-500",
  Tutorials: "from-red-500 to-rose-500",
};

const categoryEmojis = {
  "AI Tools": "🤖",
  "Web Development": "⚛️",
  JavaScript: "📜",
  "Career Tips": "🚀",
  Tutorials: "💻",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;
  const relatedPosts = getRelatedPosts(slug, 3);
  const gradient = categoryGradients[frontmatter.category] || "from-indigo-500 to-purple-500";
  const emoji = categoryEmojis[frontmatter.category] || "📝";
  const canonical = absoluteUrl(`/blog/${slug}`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: [`${canonical}/opengraph-image`],
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      "@type": "Person",
      name: frontmatter.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/opengraph-image` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    keywords: frontmatter.tags?.join(", "),
    articleSection: frontmatter.category,
    inLanguage: "en-PK",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: frontmatter.title, item: canonical },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ReadingProgress />

      <article>
        {/* Hero Section */}
        <header className={`bg-gradient-to-br ${gradient} text-white`}>
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-4 flex items-center gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <span className="text-white/40">|</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                {emoji} {frontmatter.category}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {frontmatter.title}
            </h1>

            {frontmatter.description && (
              <p className="mt-6 text-lg text-white/90 sm:text-xl">
                {frontmatter.description}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold backdrop-blur-sm">
                  {frontmatter.author.charAt(0)}
                </div>
                <span className="font-medium">{frontmatter.author}</span>
              </div>
              <span className="text-white/40">•</span>
              <time dateTime={frontmatter.date} className="text-white/90">
                {formatDate(frontmatter.date)}
              </time>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5 text-white/90">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image (auto-generated OG image as cover) */}
        <div className="mx-auto -mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/blog/${slug}/opengraph-image`}
            alt={frontmatter.title}
            width={1200}
            height={630}
            className="aspect-[1200/630] w-full rounded-2xl border border-gray-200 object-cover shadow-2xl dark:border-gray-800"
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {/* Ad: Top of article */}
          <AdSenseUnit
            slot={adsConfig.adsense.slots.articleTop}
            label="Article Top"
          />

          <div className="mdx-content">
            <MDXContent source={content} />
          </div>

          {/* Ad: Middle/Bottom of article (Adsterra Native) */}
          <AdsterraNative label="In-Article Native Ad" />

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-gray-200 pt-8 dark:border-gray-800">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Tags:
              </span>
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share Buttons */}
          <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
            <ShareButtons title={frontmatter.title} slug={slug} />
          </div>

          {/* Ad: Bottom of article */}
          <AdSenseUnit
            slot={adsConfig.adsense.slots.articleBottom}
            label="Article Bottom"
          />

          {/* Author Card */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-start gap-4">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-xl font-bold text-white shadow-md`}>
                {frontmatter.author.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Written by {frontmatter.author}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Pakistan ka #1 Roman Urdu coding blog. Hum AI, Web Dev, aur tech
                  tutorials publish karte hain har hafte.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900/50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <PostCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
