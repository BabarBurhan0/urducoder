import Script from "next/script";
import { adsConfig, isAdSenseReady } from "@/lib/ads";

export default function AdSenseScript() {
  if (!isAdSenseReady()) return null;

  const { publisherId } = adsConfig.adsense;

  return (
    <Script
      id="adsense-init"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
    />
  );
}
