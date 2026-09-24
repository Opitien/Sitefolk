import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
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
    default: "Sitefolk | Websites & Ads for UK Trades",
    template: "%s | Sitefolk",
  },
  description:
    "Sitefolk is the platform that builds and manages your website and Google Ads — done for you, for one flat monthly fee. From £119/month. No agency. No hassle.",
  keywords: [
    "managed website for tradesmen UK",
    "online presence for UK trades",
    "website subscription for tradespeople",
    "plumber website UK",
    "electrician website UK",
    "builder website UK",
    "website for plumbers UK",
    "website for electricians UK",
    "website for builders UK",
    "Sitefolk for plumbers",
    "Sitefolk for electricians",
    "Sitefolk for builders",
    "website maintenance for trades",
    "affordable managed website UK",
    "trade business website subscription",
    "website for tradesmen UK",
    "Sitefolk",
    "managed web presence London",
    "no agency website for trades",
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
    title: "Sitefolk | Websites & Ads for UK Trades",
    description:
      "Sitefolk is the platform that builds and manages your website and Google Ads — done for you, for one flat monthly fee. From £119/month. No agency. No hassle.",
    url: BASE_URL,
    siteName: "Sitefolk",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sitefolk - Websites & Ads for UK Trades",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitefolk | Websites & Ads for UK Trades",
    description:
      "Sitefolk is the platform that builds and manages your website and Google Ads — done for you, for one flat monthly fee. From £119/month. No agency. No hassle.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sitefolk",
  url: BASE_URL,
  logo: `${BASE_URL}/thumbnail.png`,
  description:
    "Sitefolk is a managed online presence subscription for UK tradespeople. Website, hosting, maintenance and updates — all handled for one flat monthly fee.",
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
    "Managed Website Subscription",
    "Online Presence Management",
    "Website Maintenance",
    "Google Ads Management",
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5RYXZKYC80" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5RYXZKYC80');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N8PS36DC');
          `}
        </Script>
        <Script id="apollo-tracking" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"6aa67bdce8689d00102aeeb1"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8PS36DC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
