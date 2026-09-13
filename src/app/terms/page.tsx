import type { Metadata } from "next";
import SitefolkNav from "@/components/SitefolkNav";
import SitefolkFooter from "@/components/SitefolkFooter";

export const metadata: Metadata = {
  title: "Terms of Service | Sitefolk",
  description: "Terms of Service for Sitefolk website design and Google Ads services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-[100px] md:pt-[116px]">
      <SitefolkNav />

      <div className="max-w-[800px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[13px] font-semibold tracking-[0.1em] text-ink-light uppercase mb-4">
            Legal
          </p>
          <h1 className="text-[48px] md:text-[56px] leading-[1.05] tracking-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-[17px] text-ink-light">
            Last updated: September 2026
          </p>
        </div>

        <div>
          <p className="text-[17px] text-ink-light leading-relaxed mb-10">
            These Terms of Service (&quot;Terms&quot;) govern the relationship between Sitefolk Ltd (&quot;Sitefolk&quot;, &quot;we&quot;, &quot;us&quot;) and you (&quot;Client&quot;, &quot;you&quot;) when you engage us for website design, build or Google Ads management services. By proceeding with our services, you agree to these Terms.
          </p>

          {/* 1. Services */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">1. Services</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              Sitefolk provides the following services to UK trade businesses:
            </p>
            <div className="space-y-4">
              <div className="border border-border p-5 rounded-sm">
                <h3 className="font-semibold mb-1">Website Setup</h3>
                <p className="text-[16px] text-ink-light">A one-off fee of <strong className="text-ink">£600</strong> covers the design, build and launch of your business website, including hosting setup and initial content.</p>
              </div>
              <div className="border border-border p-5 rounded-sm">
                <h3 className="font-semibold mb-1">Ongoing Management</h3>
                <p className="text-[16px] text-ink-light"><strong className="text-ink">£200 per month</strong> covers ongoing website management, maintenance, updates and Google Ads campaign management.</p>
              </div>
            </div>
            <p className="text-[17px] text-ink-light leading-relaxed mt-6">
              The exact scope of each engagement will be confirmed in writing before work commences. Any work outside the agreed scope will be quoted separately and requires written approval before proceeding.
            </p>
          </section>

          <hr className="border-border my-10" />

          {/* 2. Payment */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">2. Payment Terms</h2>
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <span className="text-ink font-semibold shrink-0">Deposit</span>
                <p className="text-[17px] text-ink-light">A non-refundable deposit of <strong className="text-ink">50% of the setup fee</strong> is required before any design or build work begins.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-ink font-semibold shrink-0">Final Payment</span>
                <p className="text-[17px] text-ink-light">The remaining <strong className="text-ink">50%</strong> is due before the website goes live. We will not launch until payment is received in full.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-ink font-semibold shrink-0">Monthly</span>
                <p className="text-[17px] text-ink-light">Monthly management fees are invoiced on the <strong className="text-ink">1st of each month</strong> and are due within <strong className="text-ink">14 days</strong>.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-ink font-semibold shrink-0">Late Fees</span>
                <p className="text-[17px] text-ink-light">Invoices not paid within 14 days will incur a <strong className="text-ink">3% monthly late payment fee</strong> on the outstanding balance, compounded monthly.</p>
              </div>
            </div>
            <p className="text-[17px] text-ink-light leading-relaxed">
              All prices are in GBP and exclude VAT unless otherwise stated. If Sitefolk becomes VAT registered, VAT will be added at the applicable rate.
            </p>
          </section>

          <hr className="border-border my-10" />

          {/* 3. Client Responsibilities */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">3. Client Responsibilities</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              To enable us to deliver your project on time, you agree to provide the following within <strong className="text-ink">7 days of paying your deposit</strong>:
            </p>
            <ul className="space-y-3 text-[17px] text-ink-light">
              <li className="flex gap-3"><span className="text-ink">—</span> Your business logo (in SVG, PNG or PDF format)</li>
              <li className="flex gap-3"><span className="text-ink">—</span> Photos of your work, team or premises (where applicable)</li>
              <li className="flex gap-3"><span className="text-ink">—</span> Any written content, descriptions or copy you wish to use</li>
              <li className="flex gap-3"><span className="text-ink">—</span> Access to your domain registrar (so we can point the domain to your new site)</li>
              <li className="flex gap-3"><span className="text-ink">—</span> Any other information required to complete your site</li>
            </ul>
            <p className="text-[17px] text-ink-light leading-relaxed mt-6">
              Delays caused by late provision of materials are not the responsibility of Sitefolk and may affect the agreed delivery timeline. We reserve the right to charge for additional time spent waiting.
            </p>
          </section>

          <hr className="border-border my-10" />

          {/* 4. Results Disclaimer */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">4. Results Disclaimer</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              We build your website within <strong className="text-ink">7 working days</strong> of receiving all required materials and launch your Google Ads campaign promptly thereafter.
            </p>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              However, <strong className="text-ink">we do not guarantee any specific number of leads, enquiries, phone calls, or sales</strong>. Digital advertising results depend on many factors outside our control, including your market, location, competition, budget and the quality of your service.
            </p>
            <p className="text-[17px] text-ink-light leading-relaxed">
              We will work diligently to give your campaign the best possible start, but results may vary and are never guaranteed.
            </p>
          </section>

          <hr className="border-border my-10" />

          {/* 5. Cancellation */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">5. Cancellation Policy</h2>
            <div className="space-y-4">
              <div className="border border-border p-5 rounded-sm">
                <h3 className="font-semibold mb-1">Setup Fee</h3>
                <p className="text-[16px] text-ink-light">The 50% deposit is <strong className="text-ink">non-refundable</strong> once work has commenced, as it covers the time and resources allocated to your project.</p>
              </div>
              <div className="border border-border p-5 rounded-sm">
                <h3 className="font-semibold mb-1">Monthly Services</h3>
                <p className="text-[16px] text-ink-light">You may cancel your monthly management subscription at any time with <strong className="text-ink">30 days&apos; written notice</strong>. You will be invoiced for any services rendered during the notice period.</p>
              </div>
              <div className="border border-border p-5 rounded-sm">
                <h3 className="font-semibold mb-1">Sitefolk-Initiated Cancellation</h3>
                <p className="text-[16px] text-ink-light">We reserve the right to terminate the engagement with 30 days&apos; notice if invoices remain unpaid, if the client is abusive, or if the project scope changes materially beyond the agreed terms.</p>
              </div>
            </div>
          </section>

          <hr className="border-border my-10" />

          {/* 6. Ownership */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">6. Website Ownership</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              Upon receipt of full and final payment of the website setup fee, you own the website we have built for you. You are free to host it wherever you wish.
            </p>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              Sitefolk retains the right to display your website as part of our portfolio and to reference your business as a client in our marketing materials, unless you request otherwise in writing.
            </p>
            <p className="text-[17px] text-ink-light leading-relaxed">
              Any third-party software, fonts, images or tools used in your website are subject to their own licences.
            </p>
          </section>

          <hr className="border-border my-10" />

          {/* 7. Liability */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              To the fullest extent permitted by law, Sitefolk&apos;s total liability to you in connection with any services shall not exceed <strong className="text-ink">the total amount paid by you to Sitefolk in the three months preceding the claim</strong>.
            </p>
            <p className="text-[17px] text-ink-light leading-relaxed mb-4">
              We are not liable for any indirect, consequential or special loss, including but not limited to loss of revenue, loss of profit, loss of leads, or reputational damage.
            </p>
            <p className="text-[17px] text-ink-light leading-relaxed">
              Nothing in these Terms excludes liability for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation.
            </p>
          </section>

          <hr className="border-border my-10" />

          {/* 8. Governing Law */}
          <section className="mb-12">
            <h2 className="text-[28px] font-semibold mb-4">8. Governing Law</h2>
            <p className="text-[17px] text-ink-light leading-relaxed">
              These Terms are governed by the laws of <strong className="text-ink">England and Wales</strong>. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <hr className="border-border my-10" />

          <p className="text-[15px] text-ink-light">
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:hello@sitefolk.uk" className="text-ink underline underline-offset-2">
              hello@sitefolk.uk
            </a>
            .
          </p>
        </div>
      </div>

      <SitefolkFooter />
    </main>
  );
}
