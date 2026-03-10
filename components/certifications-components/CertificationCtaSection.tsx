import { URLS } from "@/constants";
import Link from "next/link";

export default function CertificationCtaSection() {
  return (
    <section
      className="py-16 bg-primary px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-white mb-4">Questions About Our Credentials?</h2>
        <p className="text-white/60 text-sm font-body mb-8">We welcome compliance inquiries. Contact our trade team for documentation verification.</p>
        <Link data-testid="about-rfq-cta" className="inline-flex items-center gap-2 bg-[#D4AF37] text-primary px-8 py-4 font-semibold font-accent tracking-wide hover:bg-[#E5C55D] transition-colors" href={URLS.CONTACT} data-discover="true">
            Contact Our Trade Team
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </Link>
      </div>
    </section>
  );
}
