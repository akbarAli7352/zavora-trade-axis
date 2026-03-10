import { URLS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const quickFacts = [
  {
    label: "MOQ",
    value: "500 kg (minimum)",
  },
  {
    label: "Lead Time",
    value: "21-30 days from order confirmation",
  },
  {
    label: "Certifications",
    value: "FSSAI",
  },
];

const specifications = [
  {
    label: "Varieties",
    value: "Mustard, Litchi, Ajwain, Eucalyptus, Multiflora, Sidr",
  },
  {
    label: "Moisture Content",
    value: "< 20% (as per international standards)",
  },
  {
    label: "HMF Level",
    value: "< 40 mg/kg",
  },
  {
    label: "Antibiotic Residue",
    value: "Nil (as per EU/US import standards)",
  },
  {
    label: "Packaging Options",
    value: "Glass jars, PET jars, bulk drums (200 kg)",
  },
];

const tradeDetails = [
  {
    label: "Minimum Order Quantity",
    value: "500 kg (minimum) | Bulk: 1 MT",
  },
  {
    label: "Packaging",
    value: "Food-grade glass/PET jars with tamper-evident seals | Bulk drums",
  },
  {
    label: "Lead Time",
    value: "21-30 days from order confirmation",
  },
  {
    label: "Certifications",
    value: "FSSAI, APEDA, IEC, GST, EIC (Export Inspection Council)",
  },
];

export default function PureHoneyPage() {
  return (
    <section className="space-y-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
          <Image
            src="/assets/honey.jpg"
            alt="Pure honey export products"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-start">
          <p className="font-accent text-xs font-semibold tracking-[0.18em] uppercase text-secondary">
            FSSAI Certified - Natural
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold text-primary-txt">
            Pure Honey
          </h1>
          <div className="mt-3 h-0.5 w-10 bg-secondary" />

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            100% natural, pure honey sourced directly from certified apiaries
            across Rajasthan, Himachal Pradesh, and Maharashtra. All honey
            undergoes rigorous testing for purity, moisture content, HMF levels,
            and antibiotic residues.
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
          <h2 className="font-heading text-3xl font-bold text-primary-txt">
            Product Specifications
          </h2>
          <div className="mt-3 h-px w-full bg-slate-200" />

          <div className="mt-4 space-y-2">
            {specifications.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-1 gap-2 bg-slate-100 px-4 py-3 sm:grid-cols-[170px_1fr] sm:gap-4"
              >
                <p className="text-sm font-semibold text-primary-txt">{spec.label}</p>
                <p className="text-sm text-slate-600">{spec.value}</p>
              </div>
            ))}
          </div>

          <Link
            href={URLS.CONTACT}
            className="mt-7 inline-flex items-center gap-2 bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Request Quote for Pure Honey
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-bold text-primary-txt">
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
