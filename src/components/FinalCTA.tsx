export default function FinalCTA() {
  return (
    <section className="py-32 md:py-40 bg-white border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">

        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-[56px] md:text-[80px] leading-[1.05] tracking-tight mb-6">
            Your business is busy enough.
          </h2>
          <p className="text-[24px] md:text-[32px] font-outfit text-ink-light mb-10">
            Choose a plan, tell us about your business, <br /> and we'll take it from there.
          </p>
          {/* <p className="text-[19px] text-ink-light leading-relaxed max-w-xl mx-auto">
            Let someone else take care of the website.
          </p> */}
        </div>

        <a
          href="#pricing"
          className="inline-flex items-center justify-center px-10 py-5 bg-ink text-white font-medium hover:bg-ink/90 transition-colors text-[17px]"
        >
          Get a free quote &rarr;
        </a>

      </div>
    </section>
  );
}
