import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://sitefolk.opitien.xyz"),
  title: "Sitefolk — Managed Websites for Small Businesses",
  description:
    "Professional websites for small businesses, built, hosted and managed for one simple monthly price.",
  keywords: [
    "managed websites",
    "small business websites",
    "website as a service",
    "UK web design",
    "website maintenance",
    "local business web design",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sitefolk — Managed Websites for Small Businesses",
    description:
      "Professional websites for small businesses, built, hosted and managed for one simple monthly price.",
    url: "https://sitefolk.opitien.xyz",
    siteName: "Sitefolk",
    images: [
      {
        url: "/plumber_website_mockup_1787613364654.jpg",
        width: 1200,
        height: 630,
        alt: "Sitefolk - Managed Websites for Small Businesses",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitefolk — Managed Websites for Small Businesses",
    description: "Professional websites for small businesses, built, hosted and managed for one simple monthly price.",
    images: ["/plumber_website_mockup_1787613364654.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
