import Link from "next/link";

const categoryColors = {
  "AI Tools": "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  "Web Development": "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "JavaScript": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  "Career Tips": "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "Tutorials": "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  "General": "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function PostCard({ post, featured = false }) {
  const { slug, frontmatter, readingTime } = post;
  const categoryClass = categoryColors[frontmatter.category] || categoryColors.General;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-indigo-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <Link href={`/blog/${slug}`} className="flex flex-1 flex-col p-6">
        {/* Cover Image Placeholder */}
        <div
          className={`mb-4 flex aspect-video w-full items-center justify-center rounded-lg bg-gradient-to-br text-5xl ${
            frontmatter.category === "AI Tools"
              ? "from-purple-500 to-pink-500"
              : frontmatter.category === "Web Development"
              ? "from-blue-500 to-cyan-500"
              : frontmatter.category === "JavaScript"
              ? "from-yellow-500 to-orange-500"
              : "from-indigo-500 to-purple-500"
          }`}
        >
          {frontmatter.category === "AI Tools"
            ? "🤖"
            : frontmatter.category === "Web Development"
            ? "⚛️"
            : frontmatter.category === "JavaScript"
            ? "📜"
            : "💻"}
        </div>

        {/* Category Badge */}
        <div className="mb-3 flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${categoryClass}`}
          >
            {frontmatter.category}
          </span>
          {frontmatter.featured && (
            <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
              ⭐ Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
          {frontmatter.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {frontmatter.description}
        </p>

        {/* Meta Info */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <span className="font-medium">{frontmatter.author}</span>
            <span>&middot;</span>
            <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
          </div>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {readingTime} min read
          </span>
        </div>
      </Link>
    </article>
  );
}
