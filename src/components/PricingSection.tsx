"use client";

import { useState } from "react";

type Plan = "Essential" | "Pro";

interface FormState {
  businessName: string;
  websiteOrYell: string;
  name: string;
  email: string;
  whatYouDo: string;
  plan: Plan;
}

function QuoteForm({
  plan,
  dark,
  onClose,
}: {
  plan: Plan;
  dark: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormState>({
    businessName: "",
    websiteOrYell: "",
    name: "",
    email: "",
    whatYouDo: "",
    plan,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputBase = `w-full px-4 py-3 text-[15px] border rounded-none outline-none transition-colors duration-200 ${dark
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white/60"
      : "bg-white border-border text-ink placeholder:text-ink/40 focus:border-ink"
    }`;

  const labelBase = `block text-[12px] font-semibold uppercase tracking-wider mb-2 ${dark ? "text-white/60" : "text-ink/60"
    }`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Formspree is the perfect fit for Sitefolk. 
      // Replace "YOUR_FORMSPREE_ID" with the ID from your free formspree.io account.
      const response = await fetch("https://formspree.io/f/xoeaoyqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-16 text-center">
        <div className={`text-[40px] mb-4 ${dark ? "text-white" : "text-ink"}`}>✓</div>
        <h4 className={`text-[22px] font-outfit font-medium mb-3 ${dark ? "text-white" : "text-ink"}`}>
          Got it — thanks!
        </h4>
        <p className={`text-[16px] leading-relaxed max-w-xs ${dark ? "text-white/60" : "text-ink-light"}`}>
          We'll look over your details and be in touch within one working day.
        </p>
        <button
          onClick={onClose}
          className={`mt-8 text-[14px] underline underline-offset-4 ${dark ? "text-white/50 hover:text-white" : "text-ink/50 hover:text-ink"} transition-colors`}
        >
          Back to pricing
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex items-center justify-between mb-2">
        <h4 className={`text-[18px] font-outfit font-medium ${dark ? "text-white" : "text-ink"}`}>
          Get started with {plan}
        </h4>
        <button
          type="button"
          onClick={onClose}
          className={`text-[22px] leading-none ${dark ? "text-white/40 hover:text-white" : "text-ink/40 hover:text-ink"} transition-colors`}
          aria-label="Close form"
        >
          ×
        </button>
      </div>

      <div>
        <label className={labelBase}>Business name</label>
        <input
          required
          className={inputBase}
          placeholder="e.g. Apex Plumbing"
          value={form.businessName}
          onChange={(e) => setForm({ ...form, businessName: e.target.value })}
        />
      </div>

      <div>
        <label className={labelBase}>Website or Yell listing</label>
        <input
          className={inputBase}
          placeholder="e.g. yell.com/... or yourdomain.co.uk"
          value={form.websiteOrYell}
          onChange={(e) => setForm({ ...form, websiteOrYell: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelBase}>Your name</label>
          <input
            required
            className={inputBase}
            placeholder="First name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className={labelBase}>Email</label>
          <input
            required
            type="email"
            className={inputBase}
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className={labelBase}>What does your business do?</label>
        <textarea
          required
          rows={3}
          className={`${inputBase} resize-none`}
          placeholder="A quick description — e.g. local plumber covering South London"
          value={form.whatYouDo}
          onChange={(e) => setForm({ ...form, whatYouDo: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-4 text-[16px] font-medium transition-all duration-200 ${dark
            ? "bg-white text-ink hover:bg-cream-dark disabled:opacity-50"
            : "bg-ink text-white hover:bg-ink/80 disabled:opacity-50"
          }`}
      >
        {loading ? "Sending…" : "Send my details →"}
      </button>

      <p className={`text-[12px] text-center ${dark ? "text-white/30" : "text-ink/30"}`}>
        No commitment. We'll reply within one working day.
      </p>
    </form>
  );
}

export default function PricingSection() {
  const [openForm, setOpenForm] = useState<Plan | null>(null);

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
          <div className="border border-border flex flex-col justify-between bg-cream relative">
            {/* Form overlay */}
            <div
              className={`absolute inset-4 bg-cream z-10 transition-all duration-500 ease-in-out flex flex-col justify-center ${openForm === "Essential"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
              <QuoteForm plan="Essential" dark={false} onClose={() => setOpenForm(null)} />
            </div>

            <div className="p-10 md:p-14">
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
                {["5 pages", "Hosting & SSL", "Maintenance", "1 hour content updates/month", "Basic SEO", "Analytics", "Lead/contact forms"].map((f) => (
                  <li key={f} className="flex gap-3"><span className="text-accent">✓</span>{f}</li>
                ))}
              </ul>
            </div>

            <div className="px-10 pb-10 md:px-14 md:pb-14">
              <button
                onClick={() => setOpenForm("Essential")}
                className="block w-full text-center py-4 border border-ink text-ink font-medium hover:bg-ink hover:text-white transition-colors text-[17px]"
              >
                Get a free quote →
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="border border-ink flex flex-col justify-between bg-ink relative shadow-2xl">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent text-white px-4 py-1.5 text-[12px] font-semibold tracking-wider uppercase rounded-full z-20">
              Recommended
            </div>

            {/* Form overlay */}
            <div
              className={`absolute inset-4 bg-ink z-10 transition-all duration-500 ease-in-out flex flex-col justify-center ${openForm === "Pro"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
              <QuoteForm plan="Pro" dark={true} onClose={() => setOpenForm(null)} />
            </div>

            <div className="p-10 md:p-14">
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
                {["10 pages", "Hosting & SSL", "Maintenance", "3 hours content updates/month", "Basic SEO", "Analytics", "Lead/contact forms", "Blog/CMS", "Priority support"].map((f) => (
                  <li key={f} className="flex gap-3"><span className="text-accent">✓</span>{f}</li>
                ))}
              </ul>
            </div>

            <div className="px-10 pb-10 md:px-14 md:pb-14">
              <button
                onClick={() => setOpenForm("Pro")}
                className="block w-full text-center py-4 bg-white text-ink font-medium hover:bg-cream-dark transition-colors text-[17px]"
              >
                Get a free quote →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
