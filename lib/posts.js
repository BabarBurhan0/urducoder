import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function getAllPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.(mdx|md)$/, ""));
}

export function getPostBySlug(slug) {
  const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: {
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      author: data.author || "UrduCoder",
      category: data.category || "General",
      tags: data.tags || [],
      cover: data.cover || null,
      featured: Boolean(data.featured),
    },
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllPosts() {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export function getFeaturedPosts(limit = 3) {
  return getAllPosts()
    .filter((post) => post.frontmatter.featured)
    .slice(0, limit);
}

export function getPostsByCategory(category) {
  return getAllPosts().filter(
    (post) => post.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories() {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.frontmatter.category));
  return Array.from(categories);
}

export function getRelatedPosts(currentSlug, limit = 3) {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  const allPosts = getAllPosts().filter((post) => post.slug !== currentSlug);
  const currentTags = new Set(current.frontmatter.tags || []);

  const scored = allPosts.map((post) => {
    let score = 0;
    if (post.frontmatter.category === current.frontmatter.category) score += 5;
    const sharedTags = (post.frontmatter.tags || []).filter((t) => currentTags.has(t));
    score += sharedTags.length * 2;
    return { post, score };
  });

  return scored
    .sort((a, b) => b.score - a.score || new Date(b.post.frontmatter.date) - new Date(a.post.frontmatter.date))
    .slice(0, limit)
    .map((item) => item.post);
}
