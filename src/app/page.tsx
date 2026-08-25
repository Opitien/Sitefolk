import SitefolkNav from "@/components/SitefolkNav";
import SitefolkHero from "@/components/SitefolkHero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import WebsiteShowcase from "@/components/WebsiteShowcase";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import PhilosophySection from "@/components/PhilosophySection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import SitefolkFooter from "@/components/SitefolkFooter";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-16 md:pt-20">
      <SitefolkNav />
      <SitefolkHero />
      <ProblemSection />
      <ServicesSection />
      <WebsiteShowcase />
      <ProcessSection />
      <PricingSection />
      <ComparisonSection />
      <PhilosophySection />
      <FAQSection />
      <FinalCTA />
      <SitefolkFooter />
    </main>
  );
}
