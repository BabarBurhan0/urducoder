import Link from "next/link";
import { getFeaturedPosts, getSectionsWithPosts } from "@/lib/posts";
import { categories } from "@/lib/categories";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);
  const sectionsWithPosts = getSectionsWithPosts();
  const sectionMap = new Map(sectionsWithPosts.map((s) => [s.slug, s]));

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/30 dark:via-gray-950 dark:to-gray-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
              🇵🇰 Pakistan ka #1 Coding Blog
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              Coding Seekho{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Apni Zubaan
              </span>{" "}
              Mein
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
              AI tools, Web Development, Freelancing aur Career tutorials —
              sab kuch <strong className="text-gray-900 dark:text-white">Roman Urdu</strong> mein.
              Bilkul beginner se le kar advanced level tak.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Blog Padho
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                Hamare Baare Mein
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Showcase */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            5 Sections — Har Topic Ke Liye
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Modern tech ki har field — apni interest ka section choose karo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((section) => {
            const data = sectionMap.get(section.slug);
            const count = data ? data.posts.length : 0;
            return (
              <Link
                key={section.slug}
                href={`/blog/category/${section.slug}`}
                className={`group relative overflow-hidden rounded-xl border ${section.border} ${section.bg} p-6 shadow-sm hover:shadow-lg transition-all`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${section.gradient} text-2xl shadow-md`}
                  >
                    {section.icon}
                  </div>
                  <span className={`rounded-full ${section.accent} ${section.text} px-3 py-1 text-xs font-semibold`}>
                    {count} {count === 1 ? "Post" : "Posts"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {section.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>
                <p className={`mt-3 text-sm font-semibold ${section.text} group-hover:underline`}>
                  Explore &rarr;
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="bg-gray-50 py-16 dark:bg-gray-900/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  ⭐ Featured Posts
                </h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                  Hamare best aur latest tutorials — zaroor padho!
                </p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Sare Posts Dekhein &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Apna Coding Safar Aaj Shuru Karein
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
            Hamare blog par 50+ tutorials available hain — bilkul free, hamesha ke liye.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-lg hover:bg-gray-50 transition-colors"
          >
            Sare Posts Dekhein
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
