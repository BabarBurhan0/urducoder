import { getAllPosts, getAllCategories } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { adsConfig } from "@/lib/ads";

export const metadata = {
  title: "Blog — Sare Posts",
  description:
    "AI tools, Web Development, JavaScript aur tech tutorials Roman Urdu mein. UrduCoder ke saare blog posts ek jagah.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Roman Urdu mein latest tutorials, tips, aur tech guides — har hafte naye posts.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          📝 {posts.length} {posts.length === 1 ? "Post" : "Posts"}
        </span>
        <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
          📂 {categories.length} {categories.length === 1 ? "Category" : "Categories"}
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
          {/* Categories Filter (Static for now) */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white dark:bg-white dark:text-gray-900">
              All
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/20 cursor-pointer transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Ad: Bottom of blog list */}
          <AdSenseUnit
            slot={adsConfig.adsense.slots.blogList}
            label="Blog List Bottom"
          />
        </>
      )}
    </div>
  );
}
