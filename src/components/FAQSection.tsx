"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      q: "What happens after I sign up?",
      a: "We'll send you a short questionnaire to learn about your business. Once completed, we'll design and build your website, usually within 2 weeks. You'll review it, and once approved, we'll launch it."
    },
    {
      q: "Who hosts my website?",
      a: "We do. Premium, fast, and secure hosting is included in your monthly plan. You don't need to deal with servers or hosting companies."
    },
    {
      q: "Can I request changes?",
      a: "Yes. Your plan includes monthly time for content updates. Just send us an email with the text or images you want changed, and we'll handle it."
    },
    {
      q: "What counts as a content update?",
      a: "Content updates include changing text, swapping images, adding a new testimonial, or updating your business hours. Major structural changes or new feature developments are quoted separately."
    },
    {
      q: "Can I cancel?",
      a: "Yes, you can cancel your monthly plan at any time with 30 days notice. There are no lock-in contracts after your initial launch."
    },
    {
      q: "Do I own my website?",
      a: "Yes. Once the setup fee is paid and the site is launched, you own the website content and design. If you leave, we can provide a static export of your site."
    },
    {
      q: "Can you work with my existing domain?",
      a: "Absolutely. We'll help you point your existing domain to our servers so you keep your current web address."
    },
    {
      q: "Can I upgrade from Essential to Pro?",
      a: "Yes, you can upgrade at any time if your business needs more pages, more update hours, or a CMS/Blog."
    },
  ];

  return (
    <section id="faq" className="py-32 bg-cream-dark">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-[40px] md:text-[56px] leading-[1.05] tracking-tight mb-6">
              Frequently asked questions.
            </h2>
          </div>
          
          <div className="lg:w-2/3">
            <div className="border-t border-border">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-[20px] font-medium text-ink pr-8">{question}</span>
        <span className="text-ink-light flex-shrink-0 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[17px] text-ink-light leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
}
