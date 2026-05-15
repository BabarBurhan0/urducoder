import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsBySection } from "@/lib/posts";
import { categories, getCategoryBySlug, getAllCategorySlugs } from "@/lib/categories";
import PostCard from "@/components/PostCard";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { adsConfig } from "@/lib/ads";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const section = getCategoryBySlug(params.slug);
  if (!section) return {};

  const title = `${section.name} — UrduCoder`;
  const description = section.description;
  const url = absoluteUrl(`/blog/category/${section.slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function CategoryPage({ params }) {
  const section = getCategoryBySlug(params.slug);
  if (!section) notFound();

  const posts = getPostsBySection(section.slug);
  const otherSections = categories.filter((c) => c.slug !== section.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-900 dark:text-white">{section.name}</span>
      </nav>

      {/* Section Hero */}
      <div
        className={`mb-12 overflow-hidden rounded-2xl border ${section.border} ${section.bg} p-8 sm:p-12`}
      >
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div
            className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${section.gradient} text-5xl shadow-lg`}
          >
            {section.icon}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {section.name}
            </h1>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              {section.description}
            </p>
            <p className={`mt-2 text-sm font-semibold ${section.text}`}>
              {section.tagline}
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full ${section.accent} ${section.text} px-4 py-2 text-sm font-semibold`}
          >
            {posts.length} {posts.length === 1 ? "Post" : "Posts"}
          </span>
        </div>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-gray-300 p-16 text-center dark:border-gray-700">
          <div className="text-6xl">📭</div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Is Section Mein Abhi Koi Post Nahi
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Jaldi naye {section.name.toLowerCase()} posts publish honge — wapas check karein!
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            All Sections Dekhein
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Ad after posts */}
          <div className="mt-12">
            <AdSenseUnit
              slot={adsConfig.adsense.slots.blogList}
              label="Category Page Bottom"
            />
          </div>
        </>
      )}

      {/* Other Sections */}
      <section className="mt-20">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Aur Sections Explore Karein
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherSections.map((s) => (
            <Link
              key={s.slug}
              href={`/blog/category/${s.slug}`}
              className={`group rounded-xl border ${s.border} ${s.bg} p-5 transition-all hover:shadow-md`}
            >
              <div
                className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${s.gradient} text-xl shadow-sm`}
              >
                {s.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{s.name}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
