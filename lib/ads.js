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
    bannerKey: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_KEY || "",
    socialBarKey: process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_KEY || "",
    nativeKey: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_KEY || "",
    popunderKey: process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_KEY || "",
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
