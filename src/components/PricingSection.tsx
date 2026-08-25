export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-[48px] md:text-[64px] leading-[1.05] tracking-tight mb-6">
            Simple pricing.<br />
            Someone looking after your website.
          </h2>
          <p className="text-[19px] md:text-[21px] text-ink-light leading-relaxed">
            No surprise agency invoices.<br />
            No technical maintenance for you to figure out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Essential Plan */}
          <div className="border border-border p-10 md:p-14 flex flex-col justify-between bg-cream">
            <div>
              <h3 className="text-[24px] font-outfit font-medium mb-2 text-ink">ESSENTIAL</h3>
              <p className="text-[15px] text-ink-light mb-12">£249 setup</p>
              
              <div className="mb-12">
                <span className="text-[64px] font-outfit font-medium tracking-tight text-ink">£69</span>
                <span className="text-[19px] text-ink-light">/month</span>
              </div>
              
              <p className="text-[17px] text-ink mb-10 pb-10 border-b border-border leading-relaxed">
                For small businesses that need a professional website without the technical hassle.
              </p>
              
              <ul className="space-y-5 text-[17px] text-ink mb-12">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> 5 pages
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Hosting & SSL
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Maintenance
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> 1 hour content updates/month
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Basic SEO
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Analytics
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Lead/contact forms
                </li>
              </ul>
            </div>
            
            <a href="#" className="block w-full text-center py-4 border border-ink text-ink font-medium hover:bg-ink hover:text-white transition-colors text-[17px]">
              Choose Essential &rarr;
            </a>
          </div>

          {/* Pro Plan */}
          <div className="border border-ink p-10 md:p-14 flex flex-col justify-between bg-ink relative shadow-2xl">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent text-white px-4 py-1.5 text-[12px] font-semibold tracking-wider uppercase rounded-full">
              Recommended
            </div>
            
            <div>
              <h3 className="text-[24px] font-outfit font-medium mb-2 text-white">PRO</h3>
              <p className="text-[15px] text-ink-light mb-12">£499 setup</p>
              
              <div className="mb-12">
                <span className="text-[64px] font-outfit font-medium tracking-tight text-white">£129</span>
                <span className="text-[19px] text-ink-light">/month</span>
              </div>
              
              <p className="text-[17px] text-white mb-10 pb-10 border-b border-ink-light/30 leading-relaxed">
                For businesses that need more room to grow.
              </p>
              
              <ul className="space-y-5 text-[17px] text-white mb-12">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> 10 pages
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Hosting & SSL
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Maintenance
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> 3 hours content updates/month
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Basic SEO
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Analytics
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Lead/contact forms
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Blog/CMS
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Priority support
                </li>
              </ul>
            </div>
            
            <a href="#" className="block w-full text-center py-4 bg-white text-ink font-medium hover:bg-cream-dark transition-colors text-[17px]">
              Choose Pro &rarr;
            </a>
          </div>
          
        </div>

      </div>
    </section>
  );
}
