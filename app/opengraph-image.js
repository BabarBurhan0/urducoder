import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "UrduCoder — Roman Urdu Coding & AI Tutorials";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "100px",
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.2)",
              fontSize: "48px",
              fontWeight: 800,
              color: "white",
              fontFamily: "monospace",
            }}
          >
            &lt;/&gt;
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.03em",
            }}
          >
            UrduCoder
          </div>
        </div>

        <div
          style={{
            fontSize: "44px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {siteConfig.shortDescription}
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "60px",
            left: "80px",
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          🇵🇰 Pakistan&apos;s #1 Coding Blog
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          urducoder.com
        </div>
      </div>
    ),
    { ...size }
  );
}
