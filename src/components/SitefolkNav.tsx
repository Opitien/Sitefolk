"use client";

import { useState, useEffect } from "react";
import SitefolkLogo from "@/components/SitefolkLogo";

const navLinks = [
  { label: "How it works", href: "#process" },
  { label: "What's included", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function SitefolkNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-outfit text-[17px] font-semibold tracking-[0.08em] text-ink z-50 group"
          >
            {/* TEMP: Added SitefolkLogo SVG here */}
            <SitefolkLogo className="w-6 h-6 text-ink group-hover:scale-105 transition-transform duration-300" />
            SITEFOLK
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[17px] text-ink font-medium relative group py-1"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-ink/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://calendly.com/opitiene/site-folk-quote-cal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-ink border border-transparent px-2 py-2 hover:text-ink/70 transition-all duration-200"
            >
              Schedule a call
            </a>
            <a
              href="#pricing"
              className="text-[15px] font-medium text-ink border border-ink px-5 py-2 hover:bg-ink hover:text-white transition-all duration-200"
            >
              Get a free quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-ink p-1 z-50"
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col md:hidden animate-fade-in-up" style={{ animationDuration: "0.3s" }}>
          {/* Mobile Menu Header */}
          <div className="px-6 h-16 flex items-center justify-between border-b border-border/30">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 font-outfit text-[17px] font-semibold tracking-[0.08em] text-ink"
            >
              {/* TEMP: Added SitefolkLogo SVG here */}
              <SitefolkLogo className="w-6 h-6 text-ink" />
              SITEFOLK
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-ink p-1"
              aria-label="Close menu"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 6L18 18M6 18L18 6" />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[24px] font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="px-6 py-8 flex flex-col gap-4 border-t border-border/30">
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-4 bg-ink text-white font-medium text-[17px] rounded-md"
            >
              Get a free quote
            </a>
            <a
              href="https://calendly.com/opitiene/site-folk-quote-cal"
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 bg-white border border-border text-ink font-medium text-[17px] rounded-md"
            >
              Schedule a call
            </a>
          </div>
        </div>
      )}
    </>
  );
}
