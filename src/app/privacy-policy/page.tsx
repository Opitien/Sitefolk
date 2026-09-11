import type { Metadata } from "next";
import SitefolkNav from "@/components/SitefolkNav";
import SitefolkFooter from "@/components/SitefolkFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Sitefolk",
  description: "How Sitefolk collects, uses and protects your personal data under UK GDPR.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-[17px] text-ink-light">
            Last updated: September 2026
          </p>
        </div>

        <div className="prose-sitefolk">

          {/* 1. Who We Are */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">1. Who We Are</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              Sitefolk Ltd (&quot;Sitefolk&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a website design and Google Ads agency based in London, UK. We build and manage websites and run paid advertising campaigns for UK trade businesses.
            </p>
            <p className="text-[17px] text-ink-light leading-relaxed">
              <strong className="text-ink">Website:</strong> sitefolk.uk<br />
              <strong className="text-ink">Email:</strong> you@sitefolk.uk<br />
              <strong className="text-ink">Phone:</strong> 020 XXXX XXXX<br />
              <strong className="text-ink">Address:</strong> 71–75 Shelton Street, Covent Garden, London WC2H 9JQ, UK
            </p>
          </section>

          <hr className="border-border my-10" />

          {/* 2. What Data We Collect */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">2. What Data We Collect</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-6">
              We may collect the following types of personal data:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Contact Information</h3>
                <p className="text-[17px] text-ink-light leading-relaxed">Your name, email address, phone number, and business name — provided when you fill in a contact form, send us an email, or book a call.</p>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Business Information</h3>
                <p className="text-[17px] text-ink-light leading-relaxed">Details about your trade or business, including your existing website URL and the services you require — provided during the onboarding process.</p>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Website Analytics</h3>
                <p className="text-[17px] text-ink-light leading-relaxed">Anonymised data about how visitors use sitefolk.uk, collected via Google Analytics 4. This includes pages visited, time on site, and referral source. This data does not identify you personally.</p>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Cookies</h3>
                <p className="text-[17px] text-ink-light leading-relaxed">We use cookies to remember your preferences and improve your experience. See our <a href="/cookies" className="text-ink underline underline-offset-2">Cookie Policy</a> for full details.</p>
              </div>
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* 3. How We Use Your Data */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">3. How We Use Your Data</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">We use your data to:</p>
            <ul className="space-y-3 text-[17px] text-ink-light">
              <li className="flex gap-3"><span className="text-ink">—</span> Respond to your enquiries and provide website design and Google Ads services</li>
              <li className="flex gap-3"><span className="text-ink">—</span> Set up and manage your website and advertising campaigns</li>
              <li className="flex gap-3"><span className="text-ink">—</span> Send invoices and manage ongoing billing</li>
              <li className="flex gap-3"><span className="text-ink">—</span> Improve sitefolk.uk using anonymised analytics data</li>
              <li className="flex gap-3"><span className="text-ink">—</span> Contact you about your project or relevant updates (we will not spam you)</li>
            </ul>
          </section>

          <hr className="border-border my-10" />

          {/* 4. Legal Basis */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">4. Legal Basis for Processing (UK GDPR)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Contract</h3>
                <p className="text-[17px] text-ink-light leading-relaxed">Where you have engaged us to provide services, processing your data is necessary to fulfil our contract with you (Article 6(1)(b) UK GDPR).</p>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Legitimate Interests</h3>
                <p className="text-[17px] text-ink-light leading-relaxed">We may process data based on our legitimate business interests — such as following up on enquiries, improving our services, and running analytics — where those interests are not overridden by your rights (Article 6(1)(f) UK GDPR).</p>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">Consent</h3>
                <p className="text-[17px] text-ink-light leading-relaxed">Where we use non-essential cookies or run Google Analytics, we will ask for your consent via our cookie banner before any tracking begins.</p>
              </div>
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* 5. Third Parties */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">5. Third Parties We Share Data With</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-6">We only share your data where necessary to deliver our services. The third-party platforms we use are:</p>
            <div className="space-y-4">
              {[
                { name: "Vercel", purpose: "Website hosting and deployment. Your website is served via Vercel's infrastructure." },
                { name: "Google", purpose: "Google Analytics (website analytics) and Google Ads (paid advertising campaigns). Google may process data in the US under Standard Contractual Clauses." },
                { name: "Zoho", purpose: "CRM and email — used to manage client records and send project communications." },
                { name: "Sanity", purpose: "Content management system (CMS) used for certain client websites." },
              ].map((tp) => (
                <div key={tp.name} className="border border-border p-5 rounded-sm">
                  <h3 className="font-semibold mb-1">{tp.name}</h3>
                  <p className="text-[16px] text-ink-light">{tp.purpose}</p>
                </div>
              ))}
            </div>
            <p className="text-[17px] text-ink-light leading-relaxed mt-6">We do not sell your personal data to any third party.</p>
          </section>

          <hr className="border-border my-10" />

          {/* 6. Data Retention */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">6. How Long We Keep Your Data</h2>
            <div className="space-y-4">
              <div className="border border-border p-5 rounded-sm">
                <h3 className="font-semibold mb-1">Active Clients</h3>
                <p className="text-[16px] text-ink-light">We retain client records, invoices, and project data for <strong>6 years</strong> from the end of the engagement, as required by UK HMRC and financial record-keeping obligations.</p>
              </div>
              <div className="border border-border p-5 rounded-sm">
                <h3 className="font-semibold mb-1">Leads &amp; Enquiries</h3>
                <p className="text-[16px] text-ink-light">If you contact us but do not become a client, we will retain your details for up to <strong>12 months</strong>, after which they will be securely deleted.</p>
              </div>
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* 7. Your Rights */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">7. Your Rights Under UK GDPR</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-6">You have the following rights regarding your personal data:</p>
            <ul className="space-y-3 text-[17px] text-ink-light">
              <li className="flex gap-3"><span className="text-ink font-semibold">Access</span> — Request a copy of the personal data we hold about you.</li>
              <li className="flex gap-3"><span className="text-ink font-semibold">Correction</span> — Ask us to correct any inaccurate or incomplete data.</li>
              <li className="flex gap-3"><span className="text-ink font-semibold">Erasure</span> — Request that we delete your data, subject to any legal retention obligations.</li>
              <li className="flex gap-3"><span className="text-ink font-semibold">Restriction</span> — Ask us to limit how we use your data in certain circumstances.</li>
              <li className="flex gap-3"><span className="text-ink font-semibold">Objection</span> — Object to processing based on legitimate interests.</li>
              <li className="flex gap-3"><span className="text-ink font-semibold">Portability</span> — Request your data in a structured, machine-readable format.</li>
            </ul>
            <p className="text-[17px] text-ink-light leading-relaxed mt-6">To exercise any of these rights, please email us at <a href="mailto:you@sitefolk.uk" className="text-ink underline underline-offset-2">you@sitefolk.uk</a>. We will respond within 30 days.</p>
          </section>

          <hr className="border-border my-10" />

          {/* 8. Cookies & Analytics */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">8. Cookies &amp; Google Analytics</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">We use a cookie consent banner on sitefolk.uk. No analytics or marketing cookies are set until you click &quot;Accept&quot;.</p>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">When you accept, Google Analytics 4 collects anonymised usage data to help us understand how visitors use our site. You can withdraw consent at any time by clearing your browser cookies or adjusting your browser settings.</p>
            <p className="text-[17px] text-ink-light leading-relaxed">For full details of the cookies we use, please see our <a href="/cookies" className="text-ink underline underline-offset-2">Cookie Policy</a>.</p>
          </section>

          <hr className="border-border my-10" />

          {/* 9. ICO Complaints */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">9. How to Make a Complaint</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">If you are unhappy with how we have handled your personal data, please contact us first at <a href="mailto:you@sitefolk.uk" className="text-ink underline underline-offset-2">you@sitefolk.uk</a> and we will do our best to resolve your concern.</p>
            <p className="text-[17px] text-ink-light leading-relaxed">If you remain unsatisfied, you have the right to lodge a complaint with the <strong className="text-ink">Information Commissioner&apos;s Office (ICO)</strong>, the UK&apos;s data protection regulator:</p>
            <div className="mt-4 border border-border p-5 rounded-sm">
              <p className="text-[16px] text-ink-light">ICO website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-2">ico.org.uk</a><br />ICO helpline: 0303 123 1113</p>
            </div>
          </section>

          <hr className="border-border my-10" />

          <p className="text-[15px] text-ink-light">
            This policy may be updated from time to time. Any significant changes will be noted on this page with a revised date.
          </p>

        </div>
      </div>

      <SitefolkFooter />
    </main>
  );
}
