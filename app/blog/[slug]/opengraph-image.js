import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";

export const alt = "UrduCoder Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const categoryGradients = {
  "AI Tools": "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
  "Web Development": "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
  JavaScript: "linear-gradient(135deg, #eab308 0%, #f97316 100%)",
  "Career Tips": "linear-gradient(135deg, #22c55e 0%, #10b981 100%)",
  Tutorials: "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)",
  General: "linear-gradient(135deg, #4f46e5 0%, #a855f7 100%)",
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      <div style={{ display: "flex" }}>Post not found</div>,
      { ...size }
    );
  }

  const { title, category, author } = post.frontmatter;
  const background = categoryGradients[category] || categoryGradients.General;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background,
          padding: "70px 80px",
          position: "relative",
        }}
      >
        {/* Top: Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.25)",
              fontSize: "26px",
              fontWeight: 800,
              color: "white",
              fontFamily: "monospace",
            }}
          >
            &lt;/&gt;
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            UrduCoder
          </div>
        </div>

        {/* Category badge */}
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            padding: "8px 20px",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "999px",
            fontSize: "22px",
            color: "white",
            fontWeight: 600,
            alignSelf: "flex-start",
          }}
        >
          {category}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? "52px" : "64px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginTop: "30px",
            letterSpacing: "-0.03em",
            maxWidth: "1040px",
          }}
        >
          {title}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <div style={{ display: "flex" }}>By {author}</div>
          <div style={{ display: "flex" }}>urducoder.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
