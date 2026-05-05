"use client";

import { useEffect } from "react";
import { adsConfig, isAdsterraReady } from "@/lib/ads";

export default function AdsterraSocialBar() {
  const ready = isAdsterraReady() && Boolean(adsConfig.adsterra.socialBarKey);

  useEffect(() => {
    if (!ready) return;
    const existing = document.getElementById("adsterra-social-bar");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "adsterra-social-bar";
    script.src = `//pl${adsConfig.adsterra.socialBarKey}.profitableratecpm.com/${adsConfig.adsterra.socialBarKey}/invoke.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const el = document.getElementById("adsterra-social-bar");
      if (el) el.remove();
    };
  }, [ready]);

  return null;
}
