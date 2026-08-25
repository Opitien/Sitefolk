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

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
        <div>
          <span className="block text-[14px] font-semibold text-ink-light mb-2">
            {showcase.id} — {showcase.category}
          </span>
          <h3 className="text-[24px] text-ink">{showcase.title}</h3>
        </div>
        <div className="text-left md:text-right">
          <span className="block text-[13px] font-semibold text-ink-light uppercase mb-1">
            Goal
          </span>
          <p className="text-[17px] text-ink">{showcase.goal}</p>
        </div>
      </div>

      {/* Browser mockup wrapper */}
      <div 
        ref={itemRef}
        className={`bg-cream-dark rounded-xl shadow-xl border border-border/50 overflow-hidden ${
          isVisible ? "animate-elegant-reveal" : "opacity-0"
        }`}
      >
        <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
            <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
            <div className="w-3 h-3 rounded-full bg-[#E2E2DC]"></div>
          </div>
          <div className="mx-auto bg-cream rounded-md px-4 py-1 flex-1 max-w-md text-center text-[12px] text-ink-light font-medium">
            {showcase.domain}
          </div>
        </div>
        
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-cream">
          <Image 
            src={showcase.image} 
            alt={`Example website for ${showcase.title}`}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export default function WebsiteShowcase() {
  const showcases = [
    {
      id: "01",
      category: "LOCAL SERVICES",
      title: "Trades / plumbing / construction business.",
      goal: "Generate quote requests.",
      image: "/plumber_website_mockup_1787613364654.jpg",
      domain: "apexplumbing.co.uk",
    },
    {
      id: "02",
      category: "PROFESSIONAL SERVICES",
      title: "Accountant / consultant / local professional.",
      goal: "Generate enquiries.",
      image: "/accountant_website_mockup_1787613517206.jpg",
      domain: "oakwoodandco.co.uk",
    },
    {
      id: "03",
      category: "HOSPITALITY / LOCAL",
      title: "Salon / café / restaurant.",
      goal: "Bookings or enquiries.",
      image: "/cafe_website_mockup_1787613526694.jpg",
      domain: "oakandgrain.co.uk",
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
            <ShowcaseItem key={showcase.id} showcase={showcase} />
          ))}
        </div>

      </div>
    </section>
  );
}
