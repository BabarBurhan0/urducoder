export const categories = [
  {
    slug: "ai-tools",
    name: "AI Tools",
    icon: "🤖",
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-900",
    text: "text-purple-700 dark:text-purple-300",
    accent: "bg-purple-100 dark:bg-purple-900/40",
    description: "ChatGPT, Claude, Cursor aur 50+ AI tools — sab Roman Urdu mein.",
    tagline: "Latest AI tools ke complete guides",
    matches: ["AI Tools", "AI", "ai-tools"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    icon: "💻",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-900",
    text: "text-blue-700 dark:text-blue-300",
    accent: "bg-blue-100 dark:bg-blue-900/40",
    description: "Next.js, React, JavaScript, TypeScript aur Tailwind tutorials.",
    tagline: "Modern web stack ka complete journey",
    matches: ["Web Development", "JavaScript", "web-development", "Web Dev"],
  },
  {
    slug: "freelancing",
    name: "Freelancing & Earning",
    icon: "💰",
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200 dark:border-green-900",
    text: "text-green-700 dark:text-green-300",
    accent: "bg-green-100 dark:bg-green-900/40",
    description: "Fiverr, Upwork, Wise, Payoneer — Pakistan se online earning.",
    tagline: "Online earning ke real-world guides",
    matches: ["Freelancing", "Freelancing & Earning", "Earning"],
  },
  {
    slug: "comparisons",
    name: "Tool Comparisons",
    icon: "⚡",
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-900",
    text: "text-orange-700 dark:text-orange-300",
    accent: "bg-orange-100 dark:bg-orange-900/40",
    description: "Frameworks, tools, hosting aur services ka honest comparison.",
    tagline: "Decide kar lo — konsa tool tumhare liye best hai",
    matches: ["Comparisons", "Tool Comparisons", "Comparison"],
  },
  {
    slug: "career",
    name: "Career & Growth",
    icon: "🚀",
    gradient: "from-indigo-500 to-purple-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    border: "border-indigo-200 dark:border-indigo-900",
    text: "text-indigo-700 dark:text-indigo-300",
    accent: "bg-indigo-100 dark:bg-indigo-900/40",
    description: "Jobs, interview prep, portfolio aur authority building tips.",
    tagline: "CS graduate se senior developer ka safar",
    matches: ["Career", "Career & Growth", "Jobs"],
  },
];

const DEFAULT_CATEGORY = {
  slug: "general",
  name: "General",
  icon: "📝",
  gradient: "from-gray-500 to-slate-500",
  bg: "bg-gray-50 dark:bg-gray-900/30",
  border: "border-gray-200 dark:border-gray-800",
  text: "text-gray-700 dark:text-gray-300",
  accent: "bg-gray-100 dark:bg-gray-800",
  description: "Miscellaneous posts.",
  tagline: "Other tutorials and guides",
  matches: ["General"],
};

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) || null;
}

export function getCategoryByName(name) {
  if (!name) return DEFAULT_CATEGORY;
  const normalized = String(name).toLowerCase().trim();
  return (
    categories.find((c) =>
      c.matches.some((m) => m.toLowerCase() === normalized)
    ) || DEFAULT_CATEGORY
  );
}

export function getAllCategorySlugs() {
  return categories.map((c) => c.slug);
}
