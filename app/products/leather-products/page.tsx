import { URLS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const quickFacts = [
  {
    label: "MOQ",
    value: "500 units (garments / accessories)",
  },
  {
    label: "Lead Time",
    value: "45-60 days from order confirmation",
  },
  {
    label: "Certifications",
    value: "IEC",
  },
];

const specifications = [
  {
    label: "Material Type",
    value: "Full grain, Top grain, Genuine leather, Split leather",
  },
  {
    label: "Grades Available",
    value: "A Grade, B Grade, Export Quality",
  },
  {
    label: "Finish Options",
    value: "Smooth, Embossed, Nubuck, Patent",
  },
  {
    label: "Colors",
    value: "Custom color matching available",
  },
  {
    label: "Certifications",
    value: "LWG (Leather Working Group) aligned",
  },
];

const tradeDetails = [
  {
    label: "Minimum Order Quantity",
    value: "500 units (garments / accessories) | 500 sq. ft. (raw leather)",
  },
  {
    label: "Packaging",
    value: "Export-grade corrugated boxes with moisture protection",
  },
  {
    label: "Lead Time",
    value: "45-60 days from order confirmation",
  },
  {
    label: "Certifications",
    value: "IEC, GST, LWG-aligned suppliers",
  },
];

export default function LeatherProductsPage() {
  return (
    <section className="space-y-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
          <Image
            src="/assets/leather.jpg"
            alt="Leather export products"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-start">
          <p className="font-accent text-xs font-semibold tracking-[0.18em] uppercase text-secondary">
            Tannery-Sourced - Export Grade
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold text-primary">
            Leather Products
          </h1>
          <div className="mt-3 h-0.5 w-10 bg-secondary" />

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            Premium genuine leather goods sourced from India&apos;s established
            tannery hubs. We supply raw hides, semi-processed leather, finished
            leather goods, and branded fashion accessories.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="border border-slate-200 p-4">
                <p className="font-accent text-[11px] font-semibold tracking-[0.16em] uppercase text-secondary">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm leading-snug text-slate-600">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2">
          <h2 className="font-heading text-3xl font-bold text-primary">
            Product Specifications
          </h2>
          <div className="mt-3 h-px w-full bg-slate-200" />

          <div className="mt-4 space-y-2">
            {specifications.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-1 gap-2 bg-slate-100 px-4 py-3 sm:grid-cols-[170px_1fr] sm:gap-4"
              >
                <p className="text-sm font-semibold text-primary">{spec.label}</p>
                <p className="text-sm text-slate-600">{spec.value}</p>
              </div>
            ))}
          </div>

          <Link
            href={URLS.CONTACT}
            className="mt-7 inline-flex items-center gap-2 bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Request Quote for Leather Products
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-bold text-primary">
            Trade Details
          </h2>
          <div className="mt-3 h-px w-full bg-slate-200" />

          <div className="mt-4 space-y-4">
            {tradeDetails.map((detail) => (
              <div key={detail.label} className="border-l border-secondary pl-3">
                <p className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-secondary">
                  {detail.label}
                </p>
                <p className="mt-1 text-sm text-slate-600">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
