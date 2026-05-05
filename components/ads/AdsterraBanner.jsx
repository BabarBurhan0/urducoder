"use client";

import { useEffect, useRef } from "react";
import { adsConfig, isAdsterraReady, shouldShowPlaceholders } from "@/lib/ads";
import AdPlaceholder from "./AdPlaceholder";

export default function AdsterraBanner({
  width = 728,
  height = 90,
  label = "Adsterra Banner",
}) {
  const containerRef = useRef(null);
  const initialized = useRef(false);
  const ready = isAdsterraReady() && Boolean(adsConfig.adsterra.bannerKey);

  useEffect(() => {
    if (!ready || initialized.current || !containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = "";

    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        'key' : '${adsConfig.adsterra.bannerKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;

    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = `//www.highperformanceformat.com/${adsConfig.adsterra.bannerKey}/invoke.js`;
    adScript.async = true;

    container.appendChild(configScript);
    container.appendChild(adScript);
    initialized.current = true;
  }, [ready, width, height]);

  if (!ready) {
    if (shouldShowPlaceholders()) {
      return (
        <AdPlaceholder
          label={`${label} (${width}x${height})`}
          size={`h-[${height}px]`}
          network="Adsterra"
        />
      );
    }
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="my-8 flex w-full justify-center"
      style={{ minHeight: `${height}px` }}
      aria-label={label}
    />
  );
}
