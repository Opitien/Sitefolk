"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: "01",
    title: "TELL US",
    description: "We understand your business, customers and goals.",
  },
  {
    id: "02",
    title: "WE BUILD IT",
    description: "We design and build the website around your business.",
  },
  {
    id: "03",
    title: "WE LAUNCH IT",
    description: "Hosting, SSL, analytics and SEO foundations included.",
  },
  {
    id: "04",
    title: "WE LOOK AFTER IT",
    description: "After launch, Sitefolk continues looking after your website.",
  },
];

export default function ProcessSection() {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate the line and steps sequentially
          let start: number | null = null;
          const duration = 1600; // ms for line to fully draw

          const tick = (ts: number) => {
            if (!start) start = ts;
            const elapsed = ts - start;
            const pct = Math.min(elapsed / duration, 1);
            setProgress(pct);

            // Activate steps at 0%, 33%, 66%, 99%
            const stepIndex = Math.floor(pct * steps.length);
            setActiveStep(Math.min(stepIndex, steps.length - 1));

            if (pct < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-32 bg-cream-dark border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-[48px] md:text-[64px] leading-[1.05] tracking-tight text-ink">
            From idea to live website.
          </h2>
        </div>

        <div ref={sectionRef} className="relative">

          {/* Timeline track (background) */}
          <div className="hidden md:block absolute top-8 left-8 right-8 h-px bg-ink/10" />

          {/* Timeline fill (animates left to right) */}
          <div
            className="hidden md:block absolute top-8 left-8 h-px bg-ink transition-none"
            style={{
              right: `${(1 - progress) * 100}%`,
            }}
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const isActive = index <= activeStep;
              const stepThreshold = index / steps.length;
              const isVisible = progress >= stepThreshold;

              return (
                <div
                  key={step.id}
                  className="relative z-10 flex flex-col"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(16px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transitionDelay: `${index * 0.15}s`,
                  }}
                >
                  {/* Step circle */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-[18px] font-outfit font-semibold mb-8 md:mb-10 transition-all duration-500 border"
                    style={{
                      background: isActive ? "#171717" : "#fff",
                      color: isActive ? "#fff" : "#171717",
                      borderColor: isActive ? "#171717" : "var(--border)",
                      transitionDelay: `${index * 0.15}s`,
                    }}
                  >
                    {step.id}
                  </div>

                  <h3 className="text-[17px] font-semibold tracking-wide uppercase mb-3 text-ink pr-4">
                    {step.title}
                  </h3>

                  <p className="text-[16px] text-ink-light leading-relaxed pr-4">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-border text-center">
          <p className="text-[32px] md:text-[40px] font-outfit text-ink tracking-tight">
            You don&apos;t have to become your website manager.
          </p>
        </div>

      </div>
    </section>
  );
}
