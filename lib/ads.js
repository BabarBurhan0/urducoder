export const adsConfig = {
  enabled: process.env.NEXT_PUBLIC_ENABLE_ADS === "true",
  isProduction: process.env.NODE_ENV === "production",

  adsense: {
    publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "",
    autoAds: process.env.NEXT_PUBLIC_ADSENSE_AUTO_ADS === "true",
    slots: {
      articleTop: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_TOP || "",
      articleMiddle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_MIDDLE || "",
      articleBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM || "",
      blogList: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_LIST || "",
    },
  },

  adsterra: {
    // Banner uses simple highperformanceformat.com URL — needs only the hex key
    bannerKey: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_KEY || "",
    // Popunder, Social Bar, Native: Adsterra's CDN URL format varies per type,
    // so we store the FULL script URL straight from the GET CODE modal
    popunderUrl: process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_URL || "",
    socialBarUrl: process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_URL || "",
    nativeUrl: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_URL || "",
    nativeContainerId: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_CONTAINER || "",
  },
};

export function isAdSenseReady() {
  return adsConfig.enabled && Boolean(adsConfig.adsense.publisherId);
}

export function isAdsterraReady() {
  return adsConfig.enabled;
}

export function shouldShowPlaceholders() {
  return !adsConfig.isProduction;
}
