"use client";

import Image from "next/image";

export default function SitefolkHero() {
  return (
    <section className="pt-32 pb-20 md:pt-20 md:pb-32 px-6 md:px-10 max-w-[1280px] mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* Text Content */}
        <div className="max-w-4xl mx-auto animate-fade-in-up stagger-1 mb-16">
          <h1 className="text-[55px] md:text-[80px] lg:text-[96px] leading-[1.05] tracking-tight mb-8">
            Websites &amp; Ads<br />
            for UK Trades.
          </h1>
          <p className="text-[19px] md:text-[22px] text-ink-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Bespoke web design and Google Ads campaigns that generate real enquiries for your business. Built, hosted, and managed for one simple monthly price.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-ink text-white font-medium hover:bg-ink/90 transition-colors md:text-[16px] text-[15px] w-full sm:w-auto"
            >
              View Packages &rarr;
            </a>
            <a
              href="/#process"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-border text-ink font-medium hover:bg-white transition-colors md:text-[16px] text-[15px] w-full sm:w-auto"
            >
              Our Approach
            </a>
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="w-full max-w-5xl relative animate-fade-in-up stagger-2">
          {/* Subtle decoration */}
          <div className="absolute -inset-4 md:-inset-6 bg-cream-dark/50 rounded-2xl md:rounded-[32px] -z-10"></div>

          {/* Browser frame */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
            <div className="bg-cream-dark px-4 py-3 flex items-center gap-2 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
                <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
                <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
              </div>
              <div className="mx-auto bg-white rounded-md px-4 py-1 flex-1 max-w-sm text-center text-[12px] text-ink-light font-medium">
                northfieldadvisory.co.uk
              </div>
            </div>

            {/* Image container */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-cream">
              <Image
                src="/north_demo.jpg"
                alt="demo website built by Sitefolk"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
