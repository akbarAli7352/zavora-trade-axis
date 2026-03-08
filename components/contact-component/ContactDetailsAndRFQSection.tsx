import RFQForm from "@/components/RFQForm";
import Link from "next/link";

const contactItems = [
  {
    label: "Office Address",
    value: "New Delhi, India - 110001",
    subValue: "Registered Merchant Exporter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Trade Email",
    value: "trade@zavora-tradeaxis.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 8 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Business",
    value: "+91 98765 43210",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M22 16.9V20a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3.1a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 1.9Z" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    value: "Monday - Friday",
    subValue: "9:00 AM - 6:00 PM IST",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const confidentialityPoints = [
  "All inquiries are kept strictly confidential",
  "No information shared with third parties",
  "Secure data handling practices",
  "GDPR-aligned data processing",
];

export default function ContactDetailsAndRFQSection() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[360px_1fr] lg:gap-9 lg:px-16 lg:py-14">
        <div>
          <h2 className="font-heading text-4xl font-bold text-primary">
            Contact Information
          </h2>
          <div className="mt-3 h-0.5 w-10 bg-secondary" />

          <div className="mt-6 space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="inline-flex h-8 w-8 items-center justify-center border border-slate-300 text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-secondary">
                    {item.label}
                  </p>
                  <p className="text-base text-slate-600">{item.value}</p>
                  {item.subValue ? (
                    <p className="text-base text-slate-600">{item.subValue}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="https://wa.me/919876543210"
            className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 bg-[#25D366] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1eb859]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M22 16.9V20a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3.1a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 1.9Z" />
            </svg>
            Chat on WhatsApp
          </Link>

          <div className="mt-6 border border-slate-300 bg-white p-5">
            <h3 className="font-heading text-2xl font-bold text-primary">
              Confidentiality Assured
            </h3>
            <ul className="mt-3 space-y-2">
              {confidentialityPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-0.5 text-secondary" aria-hidden="true">
                    ○
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-4xl font-bold text-primary">
            Request for Quotation (RFQ)
          </h2>
           <div className="mt-3 h-0.5 w-10 bg-secondary" />
          <RFQForm className="mt-6" />
        </div>
      </div>
    </section>
  );
}
