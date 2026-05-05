"use client";

import { useEffect, useRef } from "react";
import { adsConfig, isAdSenseReady, shouldShowPlaceholders } from "@/lib/ads";
import AdPlaceholder from "./AdPlaceholder";

export default function AdSenseUnit({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  label = "AdSense Display Ad",
}) {
  const insRef = useRef(null);
  const pushed = useRef(false);
  const ready = isAdSenseReady() && Boolean(slot);

  useEffect(() => {
    if (!ready || pushed.current || !insRef.current) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (err) {
      console.warn("AdSense push failed:", err);
    }
  }, [ready]);

  if (!ready) {
    if (shouldShowPlaceholders()) {
      return <AdPlaceholder label={label} network="AdSense" />;
    }
    return null;
  }

  return (
    <div className={`my-8 ${className}`}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsConfig.adsense.publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
