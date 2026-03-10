import { URLS } from "@/constants";
import Link from "next/link";

const policySections = [
  {
    id: "1.",
    title: "Introduction",
    body:
      "Zavora TradeAxis (\"we,\" \"our,\" or \"us\") is committed to protecting the privacy of our website visitors and trade inquiry respondents. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit a trade inquiry.",
  },
  {
    id: "2.",
    title: "Information We Collect",
    body: "We collect information you provide directly to us, including:",
    bullets: [
      "Company name and country of operation",
      "Business email address and WhatsApp contact number",
      "Product requirements, specifications, and quantity details",
      "Preferred payment mode",
    ],
  },
  {
    id: "3.",
    title: "How We Use Your Information",
    body: "We use the information we collect to:",
    bullets: [
      "Process and respond to your trade inquiries and RFQ submissions",
      "Communicate with you regarding potential trade partnerships",
      "Comply with legal and regulatory obligations",
      "Improve our services and website experience",
    ],
  },
  {
    id: "4.",
    title: "Information Sharing",
    body:
      "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your trade inquiry information may be shared with verified suppliers solely for the purpose of processing your specific request, and only with your explicit consent.",
  },
  {
    id: "5.",
    title: "Data Security",
    body:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is stored on secure servers and access is restricted to authorized personnel only.",
  },
  {
    id: "6.",
    title: "Data Retention",
    body:
      "We retain your inquiry data for a period of 3 years from the date of submission, unless a longer retention period is required by applicable law. After this period, your data is securely deleted.",
  },
  {
    id: "7.",
    title: "Your Rights",
    body:
      "You have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us at trade@zavora-tradeaxis.com.",
  },
  {
    id: "8.",
    title: "Contact Us",
    body:
      "If you have questions about this Privacy Policy, please contact: trade@zavora-tradeaxis.com",
  },
];

export default function PolicyContentSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-16 lg:py-12">
        <div className="space-y-8">
          {policySections.map((section) => (
            <article key={section.id} className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-primary sm:text-xl">
                <span className="mr-2 text-primary">{section.id}</span>
                {section.title}
              </h2>
              <p className="max-w-4xl text-sm leading-relaxed text-slate-600">
                {section.body}
              </p>
              {section.bullets ? (
                <ul className="space-y-2">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span
                        className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-secondary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
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
