"use client";

import { useEffect } from "react";
import { adsConfig, isAdsterraReady } from "@/lib/ads";

export default function AdsterraSocialBar() {
  const url = adsConfig.adsterra.socialBarUrl;
  const ready = isAdsterraReady() && Boolean(url);

  useEffect(() => {
    if (!ready) return;
    if (document.getElementById("adsterra-social-bar")) return;

    const script = document.createElement("script");
    script.id = "adsterra-social-bar";
    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const el = document.getElementById("adsterra-social-bar");
      if (el) el.remove();
    };
  }, [ready, url]);

  return null;
}
