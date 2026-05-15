import Link from "next/link";
import { getAllPosts, getSectionsWithPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { adsConfig } from "@/lib/ads";

export const metadata = {
  title: "Blog — Sare Posts",
  description:
    "AI tools, Web Development, Freelancing aur Career tutorials Roman Urdu mein. UrduCoder ke saare blog posts ek jagah, sections ke saath.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const sections = getSectionsWithPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Roman Urdu mein latest tutorials, tips aur tech guides — har section mein
          curated content.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          📝 {posts.length} {posts.length === 1 ? "Post" : "Posts"}
        </span>
        <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
          📂 {sections.length} {sections.length === 1 ? "Section" : "Sections"}
        </span>
      </div>

      {/* Empty State */}
      {posts.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-gray-300 p-16 text-center dark:border-gray-700">
          <div className="text-6xl">📭</div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Abhi Koi Post Nahi
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Jaldi naye posts publish honge — wapas check karein!
          </p>
        </div>
      ) : (
        <>
          {/* Section Navigation */}
          <nav className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`#${section.slug}`}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${section.border} ${section.accent} ${section.text} hover:opacity-80`}
              >
                <span>{section.icon}</span>
                <span>{section.name}</span>
                <span className="rounded-full bg-white/60 px-2 py-0.5 text-xs dark:bg-black/30">
                  {section.posts.length}
                </span>
              </Link>
            ))}
          </nav>

          {/* Sections */}
          <div className="space-y-20">
            {sections.map((section, idx) => (
              <section
                key={section.slug}
                id={section.slug}
                className="scroll-mt-20"
              >
                {/* Section Header */}
                <div
                  className={`mb-8 rounded-2xl border ${section.border} ${section.bg} p-6 sm:p-8`}
                >
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${section.gradient} text-3xl shadow-md`}
                      >
                        {section.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                          {section.name}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                          {section.description}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/category/${section.slug}`}
                      className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold ${section.text} hover:underline`}
                    >
                      View all ({section.posts.length}) &rarr;
                    </Link>
                  </div>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>

                {/* Mid-page ad between sections (except after last) */}
                {idx === Math.floor(sections.length / 2) && (
                  <div className="mt-12">
                    <AdSenseUnit
                      slot={adsConfig.adsense.slots.blogList}
                      label="Blog Sections Middle"
                    />
                  </div>
                )}
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
