import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/posts";

export const metadata = {
  title: "About - Hamare Baare Mein",
  description:
    "UrduCoder ki kahani jaano - kyun shuru kiya, kya hamara mission hai, aur Pakistani developer community ke liye kya plan hai.",
};

export default function AboutPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  const stats = [
    { label: "Blog Posts", value: posts.length, suffix: "+" },
    { label: "Categories", value: categories.length, suffix: "" },
    { label: "Languages", value: 2, suffix: "" },
    { label: "Cost", value: "Free", suffix: "" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/30 dark:via-gray-950 dark:to-gray-950">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
            About Us
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Coding Ko{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Apni Zubaan
            </span>{" "}
            Mein Sikhana
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            UrduCoder ek mission hai - Pakistan ke harek student aur developer ko quality
            tech education provide karna, wo bhi unki apni zubaan mein.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-indigo-600 sm:text-5xl dark:text-indigo-400">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              🎯 Hamara Mission
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
              Pakistan mein hazaaron students aur young professionals coding seekhna chahte hain,
              lekin <strong className="text-gray-900 dark:text-white">English mein technical content</strong> samajhna
              mushkil hota hai. UrduCoder is gap ko bharta hai —{" "}
              <strong className="text-gray-900 dark:text-white">
                Roman Urdu mein modern tech tutorials
              </strong>{" "}
              jo bilkul beginner se le kar advanced level tak ka safar asaan banate hain.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              📖 Hamari Kahani
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
              UrduCoder 2026 mein shuru hua jab humne dekha ki YouTube pe Hindi/Urdu coding
              tutorials to hain, lekin search-friendly written content (jo Google pe milay aur
              copy-paste ho sake) bohat kam hai. Humne decide kiya — ek aisi jagah banayenge
              jahan har Pakistani student ko zaroori coding knowledge mil sake, bilkul free.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              🚀 Hum Kya Cover Karte Hain
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  emoji: "🤖",
                  title: "AI Tools & ChatGPT",
                  desc: "Latest AI tools ka istemal aur integration",
                },
                {
                  emoji: "⚛️",
                  title: "Modern Web Development",
                  desc: "React, Next.js, Tailwind CSS, full-stack tutorials",
                },
                {
                  emoji: "📜",
                  title: "JavaScript Mastery",
                  desc: "Vanilla JS se le kar advanced patterns tak",
                },
                {
                  emoji: "💼",
                  title: "Career & Freelancing",
                  desc: "Pakistani developers ke liye job + freelance tips",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="text-3xl">{item.emoji}</div>
                  <h3 className="mt-2 font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              💡 Hamare Values
            </h2>
            <ul className="mt-4 space-y-3 text-lg leading-8 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-indigo-500">✓</span>
                <span>
                  <strong className="text-gray-900 dark:text-white">Quality First:</strong>{" "}
                  Har post research-based aur practically tested.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-500">✓</span>
                <span>
                  <strong className="text-gray-900 dark:text-white">Free Always:</strong>{" "}
                  Saari content hamesha free rahegi.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-500">✓</span>
                <span>
                  <strong className="text-gray-900 dark:text-white">Beginner-Friendly:</strong>{" "}
                  Jargon-free, asaan zubaan, har step samjha kar.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-500">✓</span>
                <span>
                  <strong className="text-gray-900 dark:text-white">Community-Driven:</strong>{" "}
                  Aapke sawaal aur feedback hi hamari direction.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Hamare Saath Judo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
            Roz naye tutorials publish hote hain. Aaj se hi seekhna shuru karein.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Blog Padho
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Karein
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
