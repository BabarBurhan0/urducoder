"use client";

import { useEffect } from "react";
import { adsConfig, isAdsterraReady } from "@/lib/ads";

export default function AdsterraPopunder() {
  const url = adsConfig.adsterra.popunderUrl;
  const ready = isAdsterraReady() && Boolean(url);

  useEffect(() => {
    if (!ready) return;
    if (document.getElementById("adsterra-popunder")) return;

    const script = document.createElement("script");
    script.id = "adsterra-popunder";
    script.type = "text/javascript";
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }, [ready, url]);

  return null;
}
