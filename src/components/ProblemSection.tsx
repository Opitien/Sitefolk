"use client";

import { useEffect, useRef, useState } from "react";

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const badItems = [
    "Hosting",
    "Updates",
    "Broken forms",
    "Security",
    "Content changes",
    "Technical problems",
  ];

  return (
    <section className="py-24 bg-white border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-[40px] md:text-[56px] leading-[1.1] tracking-tight mb-6">
            Your website shouldn&apos;t become another job.
          </h2>
          <p className="text-[19px] text-ink-light leading-relaxed">
            Most small businesses don&apos;t need another platform to manage. They need a website that works &mdash; and someone to deal with the technical stuff.
          </p>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-2 gap-px bg-border">
          {/* Without Sitefolk */}
          <div className="bg-white p-10 md:p-16 flex flex-col justify-between h-full">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.1em] text-ink-light uppercase mb-10">
                Without Sitefolk
              </p>
              <ul className="space-y-4 text-[24px] flex flex-col">
                {badItems.map((item, i) => (
                  <li key={item} className="w-fit">
                    <span 
                      className={`relative transition-colors duration-500 ease-in-out ${
                        isVisible ? "text-ink/40" : "text-ink"
                      }`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      {item}
                      {/* Animated strikethrough line */}
                      <span 
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-ink/30 transition-all duration-500 ease-in-out"
                        style={{ 
                          width: isVisible ? '100%' : '0%',
                          transitionDelay: `${i * 150}ms` 
                        }}
                      ></span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* With Sitefolk */}
          <div className="bg-cream-dark p-10 md:p-16 flex flex-col justify-between h-full">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.1em] text-accent uppercase mb-10">
                With Sitefolk
              </p>
              <ul className="space-y-4 text-[24px] text-ink font-medium">
                <li>Website</li>
                <li>Hosting</li>
                <li>Maintenance</li>
                <li>Updates</li>
                <li>Support</li>
              </ul>
            </div>
            
            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-[40px] font-outfit tracking-tight text-ink">Handled.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
