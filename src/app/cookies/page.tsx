import type { Metadata } from "next";
import SitefolkNav from "@/components/SitefolkNav";
import SitefolkFooter from "@/components/SitefolkFooter";

export const metadata: Metadata = {
  title: "Cookie Policy | Sitefolk",
  description: "How Sitefolk uses cookies on sitefolk.uk, including Google Analytics and Google Ads.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-16 md:pt-20">
      <SitefolkNav />

      <div className="max-w-[800px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[13px] font-semibold tracking-[0.1em] text-ink-light uppercase mb-4">
            Legal
          </p>
          <h1 className="text-[48px] md:text-[56px] leading-[1.05] tracking-tight mb-6">
            Cookie Policy
          </h1>
          <p className="text-[17px] text-ink-light">
            Last updated: September 2026
          </p>
        </div>

        <div>
          {/* 1. What Are Cookies */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">1. What Are Cookies?</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work properly, remember your preferences, and provide information to website owners.
            </p>
            <p className="text-[17px] text-ink-light leading-relaxed">
              Cookies are not harmful and do not give us access to your device. You can control which cookies are set via your browser settings or through our consent banner.
            </p>
          </section>

          <hr className="border-border my-10" />

          {/* 2. Types of Cookies */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">2. Types of Cookies We Use</h2>

            <div className="space-y-6">
              <div className="border border-border p-6 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[18px] font-semibold">Essential Cookies</h3>
                  <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-ink-light bg-cream-dark px-3 py-1 rounded-full">Always Active</span>
                </div>
                <p className="text-[16px] text-ink-light leading-relaxed mb-3">
                  These cookies are necessary for sitefolk.uk to function correctly. They cannot be disabled.
                </p>
                <table className="w-full text-[15px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold">Cookie</th>
                      <th className="text-left py-2 font-semibold">Purpose</th>
                      <th className="text-left py-2 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-light">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">sitefolk_cookie_consent</td>
                      <td className="py-2 pr-4">Stores your cookie consent preference</td>
                      <td className="py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-border p-6 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[18px] font-semibold">Analytics Cookies</h3>
                  <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-ink-light bg-cream-dark px-3 py-1 rounded-full">Requires Consent</span>
                </div>
                <p className="text-[16px] text-ink-light leading-relaxed mb-3">
                  We use Google Analytics 4 to understand how visitors use our website. This data is anonymised and helps us improve sitefolk.uk. These cookies are only set after you click &ldquo;Accept&rdquo;.
                </p>
                <table className="w-full text-[15px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold">Cookie</th>
                      <th className="text-left py-2 font-semibold">Purpose</th>
                      <th className="text-left py-2 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-light">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">_ga</td>
                      <td className="py-2 pr-4">Distinguishes users for Google Analytics</td>
                      <td className="py-2">2 years</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">_ga_*</td>
                      <td className="py-2 pr-4">Persists session state for GA4</td>
                      <td className="py-2">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-border p-6 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[18px] font-semibold">Marketing Cookies</h3>
                  <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-ink-light bg-cream-dark px-3 py-1 rounded-full">Requires Consent</span>
                </div>
                <p className="text-[16px] text-ink-light leading-relaxed mb-3">
                  We use Google Ads conversion tracking to measure the effectiveness of our advertising campaigns. These cookies help us understand which ads lead to enquiries. These are only set after you click &ldquo;Accept&rdquo;.
                </p>
                <table className="w-full text-[15px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-semibold">Cookie</th>
                      <th className="text-left py-2 font-semibold">Purpose</th>
                      <th className="text-left py-2 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-light">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4">_gcl_au</td>
                      <td className="py-2 pr-4">Google Ads conversion tracking</td>
                      <td className="py-2">3 months</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">_gads</td>
                      <td className="py-2 pr-4">Google Ads remarketing and frequency</td>
                      <td className="py-2">13 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* 3. Managing Cookies */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">3. How to Manage Cookies</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Cookie Banner</h3>
                <p className="text-[17px] text-ink-light leading-relaxed">
                  When you first visit sitefolk.uk, a cookie banner will appear at the bottom of the screen. You can click <strong className="text-ink">Accept All</strong> to allow analytics and marketing cookies, or <strong className="text-ink">Decline</strong> to block them. Only essential cookies will be set if you decline.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Browser Settings</h3>
                <p className="text-[17px] text-ink-light leading-relaxed mb-4">
                  You can also control or delete cookies directly through your browser settings. Here&apos;s how for the most common browsers:
                </p>
                <ul className="space-y-2 text-[17px] text-ink-light">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-2">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-2">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-2">Apple Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-2">Microsoft Edge</a></li>
                </ul>
                <p className="text-[17px] text-ink-light leading-relaxed mt-4">
                  Please note that disabling certain cookies may affect the functionality of some websites.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* 4. Consent */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">4. Our Approach to Consent</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              We use a cookie consent banner that appears when you first visit sitefolk.uk. <strong className="text-ink">No analytics or marketing cookies are set until you explicitly click &ldquo;Accept&rdquo;</strong>.
            </p>
            <p className="text-[17px] text-ink-light leading-relaxed">
              Your preference is saved for 12 months. You can withdraw consent at any time by clearing your browser cookies, which will cause the banner to reappear on your next visit.
            </p>
          </section>

          <hr className="border-border my-10" />

          <p className="text-[15px] text-ink-light">
            If you have any questions about our use of cookies, please email us at{" "}
            <a href="mailto:you@sitefolk.uk" className="text-ink underline underline-offset-2">
              you@sitefolk.uk
            </a>
            .
          </p>
        </div>
      </div>

      <SitefolkFooter />
    </main>
  );
}
