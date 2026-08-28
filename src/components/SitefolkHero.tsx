"use client";

import Image from "next/image";

export default function SitefolkHero() {
  return (
    <section className="pt-32 pb-20 md:pt-30 md:pb-32 px-6 md:px-10 max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl animate-fade-in-up stagger-1">
          {/* <p className="text-[13px] font-semibold tracking-[0.1em] text-ink-light uppercase mb-6">
            Managed Websites for Small Businesses
          </p> */}
          <h1 className="text-[56px] md:text-[80px] leading-[1.05] tracking-tight mb-8">
            Your website.<br />
            Taken care of.
          </h1>
          <p className="text-[19px] md:text-[21px] text-ink-light leading-relaxed mb-10 max-w-lg">
            Professional websites for small businesses, built, hosted and managed for one simple monthly price.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-ink text-white font-medium hover:bg-ink/90 transition-colors text-[16px]"
            >
              See plans &rarr;
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-border text-ink font-medium hover:bg-white transition-colors text-[16px]"
            >
              How it works
            </a>
          </div>

          {/* <div className="flex items-center gap-3 text-[14px] text-ink-light">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span>Built once. Looked after continuously.</span>
          </div> */}
        </div>

        {/* Visual Mockup */}
        <div className="flex-1 w-full relative animate-fade-in-up stagger-2">
          {/* Subtle decoration */}
          <div className="absolute -inset-4 bg-cream-dark/50 rounded-2xl -z-10"></div>

          {/* Browser frame */}
          <div className="bg-white rounded-xl shadow-2xl border border-border/50 overflow-hidden">
            <div className="bg-cream-dark px-4 py-3 flex items-center gap-2 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
                <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
                <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
              </div>
              <div className="mx-auto bg-white rounded-md px-4 py-1 flex-1 max-w-sm text-center text-[12px] text-ink-light font-medium">
                apexplumbing.co.uk
              </div>
            </div>

            {/* Image container */}
            <div className="relative w-full aspect-[4/3] bg-cream">
              <Image
                src="/plumber_website_mockup_1787613364654.jpg"
                alt="Realistic plumbing business website built by Sitefolk"
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
