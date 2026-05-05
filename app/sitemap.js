import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/blog", priority: 0.9, changeFrequency: "daily" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.4, changeFrequency: "yearly" },
  ].map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
