import SitefolkLogo from "@/components/SitefolkLogo";

export default function SitefolkFooter() {
  return (
    <footer className="bg-cream-dark border-t border-border pt-24 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pb-12 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">

          {/* Brand Col */}
          <div className="max-w-xs">
            <h3 className="flex items-center gap-2 font-outfit text-[24px] font-semibold tracking-[0.08em] text-ink mb-6">
              <SitefolkLogo className="w-8 h-8 text-ink" />
              SITEFOLK
            </h3>
            <p className="text-[17px] text-ink-light leading-relaxed">
              Professional websites for small businesses, built, hosted and managed.
            </p>
          </div>

          {/* Links: two tight columns side by side */}
          <div className="flex gap-12 md:gap-20 md:pt-2">
            {/* Site links */}
            <div className="flex flex-col gap-3">
              {[
                { href: "#process", label: "How it works" },
                { href: "#services", label: "What's included" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-[16px] text-ink font-medium relative group py-0.5 w-fit whitespace-nowrap">
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-ink/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                </a>
              ))}
            </div>
            {/* Legal links */}
            <div className="flex flex-col gap-3">
              {[
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms" },
                { href: "https://calendly.com/opitiene/site-folk-quote-cal", label: "Contact Us", external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-[16px] text-ink font-medium relative group py-0.5 w-fit whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-ink/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Small bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[14px] text-ink-light pt-8 border-t border-ink/10">
          <p>&copy; {new Date().getFullYear()} Sitefolk. All rights reserved.</p>
          <p>We work remotely.</p>
        </div>
      </div>

      {/* Massive Typography Anchor */}
      <div className="w-full flex justify-center overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <h2 className="font-outfit font-bold text-[22vw] leading-[0.75] tracking-tighter text-ink -mb-[4vw]">
          SITEFOLK
        </h2>
      </div>
    </footer>
  );
}
