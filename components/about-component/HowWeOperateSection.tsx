const principleCards = [
  {
    title: "Compliance First",
    description:
      "Every transaction is conducted with full regulatory compliance - IEC, GST, APEDA, FSSAI, and international trade standards.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-[#1B2D6B] mb-5" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>,
  },
  {
    title: "Process-Driven",
    description:
      "We believe in documented, repeatable processes over ad-hoc arrangements. Every engagement follows a structured workflow.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#1B2D6B] mb-5" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>,
  },
  {
    title: "Ethical Sourcing",
    description:
      "We partner only with verified, compliant suppliers. No child labor, no unethical practices - ever.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth text-[#1B2D6B] mb-5" aria-hidden="true"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>,
  },
  {
    title: "Buyer-Centric",
    description:
      "Your interests are our priority. We address buyer fears proactively: fraud prevention, quality assurance, and shipment reliability.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-[#1B2D6B] mb-5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>,
  },
];

const ethicalPoints = [
  "No child or forced labor - zero tolerance",
  "Fair wage verification for all supplier partners",
  "Environmental compliance and sustainable practices",
  "Regular supplier audits and documentation",
];

const compliancePoints = [
  "IEC registration under DGFT, India",
  "GST-compliant invoicing and documentation",
  "APEDA authorization for agricultural exports",
  "FSSAI licensing for food-grade products",
  "ISO quality management standards alignment",
];

function Bullet({ text, secondary = false }: { text: string; secondary?: boolean }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
      <span
        className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
          secondary ? "border-secondary text-secondary" : "border-primary text-primary"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          className="h-2.5 w-2.5"
          aria-hidden="true"
        >
          <path d="m5 12 5 5L20 7" />
        </svg>
      </span>
      <span>{text}</span>
    </li>
  );
}

export default function HowWeOperateSection() {
  return (
    <section className="w-full">
      <div className="bg-[#f3f4f6]">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          <div className="text-center">
            <p className="font-accent text-xs font-semibold tracking-widest text-secondary uppercase">
              Our Principles
            </p>
            <h2 className="mb-4 font-heading text-4xl font-bold text-primary mt-2">
              How We Operate
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principleCards.map((card) => (
              <article
                key={card.title}
                className="border border-slate-300 bg-white px-6 py-7 hover:border-secondary"
              >
                <div className="text-primary">{card.icon}</div>
                <h3 className="font-heading font-bold text-base text-[#0F172A] mb-3 mt-4">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 font-body leading-relaxed">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:px-16 lg:py-16">
          <article className="border-l-4 border-secondary pl-6">
            <h3 className="font-heading text-4xl font-bold text-primary">
              Ethical Sourcing Commitment
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600">
              We partner exclusively with suppliers who meet our rigorous ethical
              standards. All supplier relationships are verified, documented, and
              periodically audited.
            </p>
            <ul className="mt-5 space-y-2.5">
              {ethicalPoints.map((point) => (
                <Bullet key={point} text={point} secondary />
              ))}
            </ul>
          </article>

          <article className="border-l-4 border-primary pl-6">
            <h3 className="font-heading text-4xl font-bold text-primary">
              Compliance Framework
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600">
              Our operations are built on a foundation of regulatory compliance.
              Every transaction is conducted within established legal and trade
              frameworks.
            </p>
            <ul className="mt-5 space-y-2.5">
              {compliancePoints.map((point) => (
                <Bullet key={point} text={point} />
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
