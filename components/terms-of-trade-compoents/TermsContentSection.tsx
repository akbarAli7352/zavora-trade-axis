import { URLS } from "@/constants";
import Link from "next/link";

const paymentOptions = [
  {
    title: "Letter of Credit (LC)",
    description:
      "An irrevocable Letter of Credit issued by the Buyer’s bank in favour of Zavora TradeAxis. LC must be confirmed by an acceptable bank. Payment is triggered upon presentation of compliant shipping documents.",
    accent: "border-l-[#D4AF37]",
  },
  {
    title: "Advance Payment",
    description:
      "30–50% advance before production commencement. Remaining balance to be transferred prior to shipment. Wire transfer (TT) via SWIFT banking network only.",
    accent: "border-l-[#1B2D6B]",
  },
];

const documentationItems = [
  "Commercial Invoice (notarized where required)",
  "Packing List",
  "Certificate of Origin",
  "Bill of Lading / Airway Bill",
  "Inspection Certificate (where applicable)",
  "Phytosanitary / Health Certificate (food products)",
];

export default function TermsContentSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 sm:px-10 lg:px-16 lg:py-12">
        <div className="space-y-8">
          <article className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
              1. General Terms
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              These Terms of Trade govern all commercial transactions between
              Zavora TradeAxis (the &quot;Exporter&quot;) and the Buyer. By
              submitting a Request for Quotation (RFQ) or entering into a
              purchase agreement, the Buyer agrees to these terms.
            </p>
          </article>

          <article className="space-y-4">
            <div className="space-y-2">
              <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
                2. Payment Terms
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Zavora TradeAxis operates exclusively on the following payment
                mechanisms:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {paymentOptions.map((option) => (
                <div
                  key={option.title}
                  className={`border border-slate-200 bg-slate-50/70 p-4 sm:p-5 ${option.accent} border-l-4`}
                >
                  <h3 className="font-heading text-base font-semibold text-primary sm:text-lg">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs italic text-slate-500 sm:text-sm">
              Note: No credit terms, deferred payments, or post-delivery payment
              arrangements are available under any circumstances.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
              3. Pricing &amp; Quotations
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              All prices are quoted in USD (US Dollars) on FOB (Free On Board) or
              CIF (Cost, Insurance, Freight) basis as agreed per order. Prices
              are valid for 30 days from the date of quotation. Price revisions
              may occur due to raw material fluctuations, currency movements, or
              freight rate changes.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
              4. Quality &amp; Inspection
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              All goods are inspected against agreed specifications prior to
              shipment. Buyers may nominate a third-party inspection agency
              (SGS, Bureau Veritas, Intertek, or equivalent). Inspection costs
              borne by buyer. Quality acceptance is based on inspection report
              at the time of dispatch.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
              5. Delivery &amp; Shipment
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Lead times are indicated in product specifications and are
              estimates from order confirmation. Delivery terms follow Incoterms
              2020 standards as agreed per contract. Zavora TradeAxis is not
              liable for delays caused by force majeure, port congestion, or
              customs procedures outside our control.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
              6. Documentation
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Standard export documents provided with all shipments:
            </p>
            <ul className="space-y-2">
              {documentationItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <span
                    className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
              7. Disputes &amp; Governing Law
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Any disputes arising from trade transactions shall be subject to
              arbitration under the rules of the Indian Council of Arbitration
              (ICA). Governing law: The laws of the Republic of India.
              Jurisdiction: New Delhi, India.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
              8. Anti-Corruption
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Both parties agree to comply with applicable anti-bribery and
              anti-corruption laws, including the Prevention of Corruption Act
              (India), the UK Bribery Act, and the US Foreign Corrupt Practices
              Act (FCPA) where applicable. No facilitation payments shall be
              made or solicited.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
              9. Contact for Trade Queries
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              For any queries related to these terms: trade@zavora-tradeaxis.com
            </p>
          </article>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5">
          <Link
            href={URLS.CONTACT}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m19 12-14 0" />
              <path d="m5 12 6-6" />
              <path d="m5 12 6 6" />
            </svg>
            Back to Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
