import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import AdSenseScript from "@/components/ads/AdSenseScript";
import AdSenseAuto from "@/components/ads/AdSenseAuto";
import AdsterraSocialBar from "@/components/ads/AdsterraSocialBar";
import AdsterraPopunder from "@/components/ads/AdsterraPopunder";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Roman Urdu Coding & AI Tutorials`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "urdu coding",
    "roman urdu tutorials",
    "AI tools urdu",
    "web development pakistan",
    "javascript urdu",
    "nextjs tutorial",
    "coding in urdu",
    "chatgpt urdu",
    "react urdu",
  ],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Roman Urdu Coding & AI Tutorials`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Roman Urdu Coding & AI Tutorials`,
    description: siteConfig.description,
    creator: siteConfig.author.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/opengraph-image`,
  description: siteConfig.description,
  sameAs: [
    siteConfig.social.twitter,
    siteConfig.social.youtube,
    siteConfig.social.github,
    siteConfig.social.facebook,
    siteConfig.social.linkedin,
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en-PK",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <AdSenseScript />
        <AdSenseAuto />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AdsterraSocialBar />
        <AdsterraPopunder />
      </body>
    </html>
  );
}
