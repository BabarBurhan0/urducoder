"use client";

import { useEffect, useRef } from "react";
import { adsConfig, isAdsterraReady, shouldShowPlaceholders } from "@/lib/ads";
import AdPlaceholder from "./AdPlaceholder";

export default function AdsterraNative({ label = "Adsterra Native Banner" }) {
  const containerRef = useRef(null);
  const initialized = useRef(false);
  const ready = isAdsterraReady() && Boolean(adsConfig.adsterra.nativeKey);

  useEffect(() => {
    if (!ready || initialized.current || !containerRef.current) return;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = `//pl${adsConfig.adsterra.nativeKey}.profitableratecpm.com/${adsConfig.adsterra.nativeKey}/invoke.js`;

    const target = document.createElement("div");
    target.id = `container-${adsConfig.adsterra.nativeKey}`;

    containerRef.current.appendChild(script);
    containerRef.current.appendChild(target);
    initialized.current = true;
  }, [ready]);

  if (!ready) {
    if (shouldShowPlaceholders()) {
      return <AdPlaceholder label={label} size="h-[200px]" network="Adsterra Native" />;
    }
    return null;
  }

  return (
    <div ref={containerRef} className="my-8 w-full" aria-label={label} />
  );
}
