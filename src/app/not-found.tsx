import Link from "next/link";
import SitefolkNav from "@/components/SitefolkNav";
import SitefolkFooter from "@/components/SitefolkFooter";

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-[100px] md:pt-[116px] flex flex-col">
      <SitefolkNav />
      <div className="flex-1 flex items-center justify-center py-20 px-6 min-h-[60vh]">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-[120px] md:text-[180px] leading-none font-outfit font-bold text-ink mb-4 opacity-10">
            404
          </h1>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-ink mb-6 tracking-tight">
            Page not found
          </h2>
          <p className="text-[17px] text-ink-light mb-10 max-w-md mx-auto leading-relaxed">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-ink text-white font-medium hover:bg-ink/90 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
      <SitefolkFooter />
    </main>
  );
}
