import { URLS } from "@/constants";
import Link from "next/link";

export default function ExportCtaSection() {
  return (
    <section
      className="py-16 bg-[#1B2D6B] px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Begin?</h2>
        <p className="text-white/60 text-sm font-body mb-8">Submit your requirements and we will initiate the process within 24 hours.</p>
        <Link data-testid="about-rfq-cta" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1B2D6B] px-8 py-4 font-semibold font-accent tracking-wide hover:bg-[#E5C55D] transition-colors" href={URLS.CONTACT} data-discover="true">
            Submit RFQ 
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </Link>
      </div>
    </section>
  );
}
