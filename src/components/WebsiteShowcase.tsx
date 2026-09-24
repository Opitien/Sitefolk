"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ShowcaseItem({ showcase }: { showcase: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mockupContent = (
    <>
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-border relative z-20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
          <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
          <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
        </div>
        <div className="mx-auto bg-cream rounded-md px-4 py-1 flex-1 max-w-md text-center text-[12px] text-ink-light font-medium">
          {showcase.domain}
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-cream z-10">
        <Image
          src={showcase.image}
          alt={`Example website for ${showcase.title}`}
          fill
          className="object-cover object-top"
        />
        {showcase.demoUrl ? (
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors z-30 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 bg-white text-ink px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Demo</span>
          </div>
        ) : showcase.comingSoon && (
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors z-30 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 bg-white text-ink px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Demo Coming Soon</span>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="border-b border-border pb-6">
        <span className="block text-[13px] font-semibold tracking-[0.08em] uppercase text-accent mb-2">
          {showcase.niche}
        </span>
        <h3 className="text-[24px] text-ink">{showcase.title}</h3>
      </div>

      {/* Browser mockup wrapper */}
      {showcase.demoUrl ? (
        <a
          href={showcase.demoUrl}
          className="block group"
        >
          <div
            ref={itemRef as any}
            className={`bg-cream-dark rounded-xl shadow-xl border border-border/50 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-accent/30 group-hover:-translate-y-1 ${isVisible ? "animate-elegant-reveal" : "opacity-0"
              }`}
          >
            {mockupContent}
          </div>
        </a>
      ) : (
        <div
          ref={itemRef}
          className={`group bg-cream-dark rounded-xl shadow-xl border border-border/50 overflow-hidden ${isVisible ? "animate-elegant-reveal" : "opacity-0"
            }`}
        >
          {mockupContent}
        </div>
      )}
    </div>
  );
}

export default function WebsiteShowcase() {
  const showcases = [
    {
      niche: "Sitefolk for Plumbers",
      title: "Local plumbing businesses that need more calls, not more admin.",
      image: "/apex_demo.jpg",
      domain: "apexplumbing.co.uk",
      demoUrl: "/demos/apex-plumbing",
    },
    {
      niche: "Sitefolk for Electricians",
      title: "Electrical contractors who want to be found first on Google.",
      image: "/spark_demo.jpg",
      domain: "sparkelectrical.co.uk",
      demoUrl: "",
      comingSoon: true,
    },
    {
      niche: "Sitefolk for Builders",
      title: "Building firms and general contractors that want quality leads online.",
      image: "/oakwood_demo.jpg",
      domain: "oakwoodbuilders.co.uk",
      demoUrl: "",
      comingSoon: true,
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-[48px] md:text-[64px] leading-[1.05] tracking-tight mb-6">
            Not a template.<br />
            A website built around your business.
          </h2>
        </div>

        <div className="space-y-32">
          {showcases.map((showcase) => (
            <ShowcaseItem key={showcase.domain} showcase={showcase} />
          ))}
        </div>

      </div>
    </section>
  );
}
