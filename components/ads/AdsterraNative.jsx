"use client";

import { useEffect, useRef } from "react";
import { adsConfig, isAdsterraReady, shouldShowPlaceholders } from "@/lib/ads";
import AdPlaceholder from "./AdPlaceholder";

export default function AdsterraNative({ label = "Adsterra Native Banner" }) {
  const containerRef = useRef(null);
  const initialized = useRef(false);
  const { nativeUrl, nativeContainerId } = adsConfig.adsterra;
  const ready = isAdsterraReady() && Boolean(nativeUrl) && Boolean(nativeContainerId);

  useEffect(() => {
    if (!ready || initialized.current || !containerRef.current) return;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = nativeUrl;

    const target = document.createElement("div");
    target.id = `container-${nativeContainerId}`;

    containerRef.current.appendChild(script);
    containerRef.current.appendChild(target);
    initialized.current = true;
  }, [ready, nativeUrl, nativeContainerId]);

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
