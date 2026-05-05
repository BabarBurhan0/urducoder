import Link from "next/link";
import { getFeaturedPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);

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
              AI tools, Web Development, JavaScript, aur modern tech tutorials —
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

      {/* Features / Categories Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Kya Seekhoge Yahan?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Modern tech ki har field — Roman Urdu mein, asaan tarike se.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🤖",
              title: "AI Tools & ChatGPT",
              description: "ChatGPT, Claude, Gemini aur 50+ AI tools ka istemal seekhein.",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: "⚛️",
              title: "Web Development",
              description: "React, Next.js, Tailwind CSS — modern web banana seekhein.",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: "📱",
              title: "JavaScript Mastery",
              description: "Zero se advanced tak — JavaScript ka complete journey.",
              color: "from-yellow-500 to-orange-500",
            },
            {
              icon: "🚀",
              title: "Career Tips",
              description: "Freelancing, jobs, aur Pakistani developer ke liye guidance.",
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: "💻",
              title: "Coding Tutorials",
              description: "Step-by-step projects jo aap ke portfolio mein add ho jayein.",
              color: "from-red-500 to-rose-500",
            },
            {
              icon: "🛠️",
              title: "Dev Tools & Tips",
              description: "VS Code, Git, GitHub, Vercel — productivity tools.",
              color: "from-indigo-500 to-purple-500",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-indigo-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-700 transition-all"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} text-2xl shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
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
            Hamare blog par 100+ tutorials available hain — bilkul free, hamesha ke liye.
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
