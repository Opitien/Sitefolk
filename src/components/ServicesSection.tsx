"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "HOSTING",
    description: "Your website stays online, fast and secure.",
  },
  {
    id: "02",
    title: "MAINTENANCE",
    description: "We handle the technical upkeep.",
  },
  {
    id: "03",
    title: "CONTENT UPDATES",
    description: "Need a change? Send it over.",
  },
  {
    id: "04",
    title: "SUPPORT",
    description: "Talk to a real person, not a ticket queue.",
  },
  {
    id: "05",
    title: "IMPROVEMENTS",
    description: "Your website can evolve as your business does.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [lineDrawn, setLineDrawn] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // First: draw the top border line
          setTimeout(() => setLineDrawn(true), index * 120);
          // Then: fade in the text shortly after
          setTimeout(() => setTextVisible(true), index * 120 + 400);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className="relative pt-6 overflow-hidden">
      {/* Animated top border: draws left to right */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />
      <div
        className="absolute top-0 left-0 h-px bg-ink transition-none"
        style={{
          width: lineDrawn ? "100%" : "0%",
          transition: lineDrawn ? "width 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
        }}
      />

      {/* Content fades in after line */}
      <div
        style={{
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <span className="block text-[14px] font-semibold text-ink-light mb-4">
          {service.id}
        </span>
        <h3 className="text-[20px] font-semibold tracking-wide uppercase mb-4 text-ink">
          {service.title}
        </h3>
        <p className="text-[17px] text-ink-light leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        <div className="mb-24 max-w-2xl">
          <h2 className="text-[48px] md:text-[64px] leading-[1.05] tracking-tight mb-8">
            One website.<br />
            Someone behind it.
          </h2>
          <p className="text-[19px] text-ink-light leading-relaxed">
            Sitefolk combines the website itself with the work that usually gets forgotten after launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
