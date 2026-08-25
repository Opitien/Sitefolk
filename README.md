# Sitefolk — Managed Websites for Small Businesses

A premium, editorially designed Next.js landing page for Sitefolk, a website-as-a-service business for UK small businesses.

## Overview
Sitefolk positions itself between the hassle of DIY builders (Wix/Squarespace) and the high cost of traditional web agencies. The core promise is: "Your website. Taken care of."

This project is built using:
- **Next.js 16 (App Router)**
- **React 19**
- **TailwindCSS v4**
- **TypeScript**

## Features & Architecture
- **Editorial Typography:** Uses Google Fonts (`Outfit` for bold, confident headers and `Inter` for highly readable body copy).
- **Restrained Color Palette:** Uses an off-white cream background (`#F7F7F3`), dark ink text (`#171717`), and a subtle green accent (`#6B9B4A`).
- **Custom Components:** 
  - `SitefolkNav` (with animated soft underlines and a full-screen mobile menu)
  - `SitefolkHero` (featuring a realistic generated plumbing website mockup)
  - `ProblemSection` (high-contrast without vs. with Sitefolk breakdown)
  - `WebsiteShowcase` (highlighting local trades, professional services, and hospitality mockups)
  - `PricingSection` (clear, uncluttered comparison of Essential and Pro plans)
  - `FAQSection` (accessible accordion)

## Setup & Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## SEO & Metadata
The site is configured with robust metadata via `layout.tsx`, including Open Graph images, Twitter cards, and a `metadataBase` pointing to the live domain: `https://sitefolk.opitien.xyz`.

## Design Philosophy
This landing page intentionally avoids the generic "SaaS template" aesthetic (no floating 3D objects, heavy gradients, or glassmorphism everywhere). Instead, it leans into a **digital studio / editorial feel** with large, confident typography, solid structural lines, and realistic visual proof of the websites Sitefolk builds.
