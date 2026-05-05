import Script from "next/script";
import { adsConfig, isAdSenseReady } from "@/lib/ads";

export default function AdSenseAuto() {
  if (!isAdSenseReady() || !adsConfig.adsense.autoAds) return null;

  const { publisherId } = adsConfig.adsense;

  return (
    <Script id="adsense-auto-ads" strategy="afterInteractive">
      {`
        (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "${publisherId}",
          enable_page_level_ads: true
        });
      `}
    </Script>
  );
}
