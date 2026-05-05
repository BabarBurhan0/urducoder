"use client";

import { useEffect } from "react";
import { adsConfig, isAdsterraReady } from "@/lib/ads";

export default function AdsterraPopunder() {
  const ready = isAdsterraReady() && Boolean(adsConfig.adsterra.popunderKey);

  useEffect(() => {
    if (!ready) return;
    if (document.getElementById("adsterra-popunder")) return;

    const script = document.createElement("script");
    script.id = "adsterra-popunder";
    script.type = "text/javascript";
    script.src = `//pl${adsConfig.adsterra.popunderKey}.profitableratecpm.com/${adsConfig.adsterra.popunderKey}/invoke.js`;
    script.async = true;
    document.body.appendChild(script);
  }, [ready]);

  return null;
}
