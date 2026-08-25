"use client";

import { useEffect, useRef, useState } from "react";

const columns = [
  {
    key: "diy",
    label: "DIY",
    labelColor: "text-ink-light",
    bg: "bg-white",
    items: [
      "You build it",
      "You maintain it",
      "You fix it",
      "You manage it",
    ],
    icon: "×",
    iconColor: "text-ink/30",
    textColor: "text-ink-light",
    fontWeight: "",
  },
  {
    key: "agency",
    label: "TRADITIONAL AGENCY",
    labelColor: "text-ink-light",
    bg: "bg-white",
    items: [
      "Large upfront cost",
      "Longer projects",
      "Account managers",
      "Separate maintenance",
      "Separate hosting",
    ],
    icon: "×",
    iconColor: "text-ink/30",
    textColor: "text-ink-light",
    fontWeight: "",
  },
  {
    key: "sitefolk",
    label: "SITEFOLK",
    labelColor: "text-accent",
    bg: "bg-cream-dark",
    items: [
      "Professional website",
      "Hosting included",
      "Maintenance included",
      "Updates included",
      "Direct support",
    ],
    icon: "✓",
    iconColor: "text-accent",
    textColor: "text-ink",
    fontWeight: "font-medium",
  },
];

export default function ComparisonSection() {
  const [phase, setPhase] = useState(0);
  // phase 0 = nothing
  // phase 1 = DIY column visible
  // phase 2 = first divider drawn + Agency visible
  // phase 3 = second divider drawn + Sitefolk visible
  // Each item within a column also staggers in

  const [itemVisibility, setItemVisibility] = useState<boolean[][]>([[], [], []]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const revealItems = (colIndex: number, items: string[], baseDelay: number) => {
    items.forEach((_, i) => {
      setTimeout(() => {
        setItemVisibility((prev) => {
          const next = prev.map((col) => [...col]);
          next[colIndex][i] = true;
          return next;
        });
      }, baseDelay + i * 100);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          // Phase 1: DIY header + items
          setTimeout(() => setPhase(1), 0);
          revealItems(0, columns[0].items, 200);

          // Phase 2: First divider line, then Agency
          setTimeout(() => setPhase(2), 800);
          revealItems(1, columns[1].items, 1100);

          // Phase 3: Second divider line, then Sitefolk
          setTimeout(() => setPhase(3), 1800);
          revealItems(2, columns[2].items, 2000);

          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-cream border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-[48px] md:text-[64px] leading-[1.05] tracking-tight mb-6">
            Somewhere between DIY and an agency.
          </h2>
        </div>

        {/* Table */}
        <div ref={sectionRef} className="relative grid md:grid-cols-3">

          {columns.map((col, colIndex) => {
            const colVisible = (colIndex === 0 && phase >= 1) || (colIndex === 1 && phase >= 2) || (colIndex === 2 && phase >= 3);

            return (
              <div key={col.key} className="relative flex">

                {/* Left divider line (between columns) — draws top to bottom */}
                {colIndex > 0 && (
                  <div className="hidden md:block relative w-px flex-shrink-0 bg-border/20 overflow-hidden self-stretch">
                    <div
                      className="absolute top-0 left-0 w-full bg-ink/20 transition-none"
                      style={{
                        height: (colIndex === 1 && phase >= 2) || (colIndex === 2 && phase >= 3) ? "100%" : "0%",
                        transition: "height 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </div>
                )}

                {/* Column content */}
                <div
                  className={`${col.bg} p-10 md:p-14 flex-1`}
                  style={{
                    opacity: colVisible ? 1 : 0,
                    transform: colVisible ? "translateY(0)" : "translateY(16px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                  }}
                >
                  <h3 className={`text-[14px] font-semibold tracking-[0.1em] ${col.labelColor} uppercase mb-8`}>
                    {col.label}
                  </h3>
                  <ul className="space-y-4 text-[19px]">
                    {col.items.map((item, i) => {
                      const itemVisible = itemVisibility[colIndex]?.[i];
                      return (
                        <li
                          key={item}
                          className={`flex gap-3 ${col.textColor} ${col.fontWeight}`}
                          style={{
                            opacity: itemVisible ? 1 : 0,
                            transform: itemVisible ? "translateX(0)" : "translateX(-10px)",
                            transition: "opacity 0.4s ease, transform 0.4s ease",
                          }}
                        >
                          <span className={col.iconColor}>{col.icon}</span>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[24px] font-outfit text-ink">Right-sized for small businesses.</p>
        </div>

      </div>
    </section>
  );
}
