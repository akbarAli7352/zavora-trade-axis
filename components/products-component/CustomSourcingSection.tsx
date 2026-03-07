import Link from "next/link";

const sourcingItems = [
  "Agri-commodities and processed foods",
  "Textile and garment sourcing",
  "Engineering goods and components",
  "Pharmaceutical raw materials",
  "Any India-origin product",
];

const steps = [
  "Share detailed product specifications",
  "Receive preliminary supplier assessment (3-5 days)",
  "Approve shortlisted suppliers",
  "Proceed with sampling & QC",
  "Confirm order and export",
];

export default function CustomSourcingSection() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-16">
        <div>
          <div className="mb-5 inline-flex h-9 w-9 items-center justify-center text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package text-[#D4AF37] mb-6" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
          </div>

          <p className="font-accent text-xs font-semibold tracking-[0.18em] uppercase text-secondary">
            Beyond Core Products
          </p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-white">
            Custom Sourcing
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Have a product requirement that falls outside our core categories?
            Submit your detailed specifications and we will identify and vet
            suitable suppliers from India&apos;s vast manufacturing ecosystem.
          </p>

          <ul className="mt-6 space-y-2 text-base text-white/85">
            {sourcingItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span className="flex items-center gap-3 text-sm text-white/70 font-body">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-secondary px-6 py-4 text-sm font-semibold text-primary transition-colors hover:bg-secondary-hover"
          >
            Submit Custom Requirements
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>

        <div className="h-fit self-start border border-white/20 bg-white/10 p-5 sm:p-6">
          <h3 className="font-heading text-3xl font-bold text-white">
            Custom Sourcing Process
          </h3>
          <ol className="mt-5 space-y-3">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-3 md:mb-6">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center bg-secondary text-xs font-bold text-primary">
                  {index + 1}
                </span>
                <span className="text-white/75 text-sm font-body pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
