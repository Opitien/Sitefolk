import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const BASE_URL = "https://www.sitefolk.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sitefolk | Websites & Google Ads for UK Trades",
    template: "%s | Sitefolk",
  },
  description:
    "Bespoke web design and Google Ads campaigns that generate real enquiries for your trade business. Built, hosted, and managed for one simple monthly price.",
  keywords: [
    "UK trades web design",
    "Google Ads for tradesmen",
    "plumber website design UK",
    "electrician websites UK",
    "builder websites UK",
    "trade business marketing",
    "website for tradesmen",
    "Google Ads for plumbers",
    "Google Ads for electricians",
    "lead generation for trades",
    "Sitefolk",
    "trade website agency London",
    "affordable website for tradesman",
  ],
  authors: [{ name: "Sitefolk", url: BASE_URL }],
  creator: "Sitefolk",
  publisher: "Sitefolk",
  category: "Web Design & Digital Marketing",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Sitefolk | Websites & Google Ads for UK Trades",
    description:
      "Bespoke web design and Google Ads campaigns that generate real enquiries for your trade business. Built, hosted, and managed for one simple monthly price.",
    url: BASE_URL,
    siteName: "Sitefolk",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sitefolk - Websites & Google Ads for UK Trades",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitefolk | Websites & Google Ads for UK Trades",
    description:
      "Bespoke web design and Google Ads campaigns that generate real enquiries for your trade business. Built, hosted, and managed for one simple monthly price.",
    images: ["/thumbnail.png"],
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
  verification: {
    // Add your Google Search Console verification token here once available
    // google: "your-verification-token",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sitefolk",
  url: BASE_URL,
  logo: `${BASE_URL}/thumbnail.png`,
  description:
    "Bespoke web design and Google Ads campaigns that generate real enquiries for your trade business. Built, hosted, and managed for one simple monthly price.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "71–75 Shelton Street",
    addressLocality: "London",
    postalCode: "WC2H 9JQ",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: [
    "Web Design",
    "Google Ads Management",
    "Digital Marketing",
    "Website Development",
  ],
  priceRange: "££",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sitefolk",
  url: BASE_URL,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
