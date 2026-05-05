const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://urducoder.vercel.app").replace(/\/$/, "");

export const siteConfig = {
  name: "UrduCoder",
  url: SITE_URL,
  shortDescription: "Pakistan ka #1 Roman Urdu coding blog",
  description:
    "AI tools, Web Development, JavaScript aur tech tutorials Roman Urdu mein. UrduCoder par modern coding asaan zubaan mein seekhein.",
  locale: "en_PK",
  author: {
    name: "UrduCoder",
    email: "urducoder.blog@gmail.com",
    twitter: "",
  },
  social: {},
};

export function absoluteUrl(path = "") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
