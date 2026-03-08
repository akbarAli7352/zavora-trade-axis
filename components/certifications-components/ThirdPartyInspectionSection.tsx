const agencies = [
  {
    name: "SGS Group",
    desc: "Global inspection, verification, testing, and certification services",
  },
  {
    name: "Bureau Veritas",
    desc: "Testing, inspection, and certification services",
  },
  {
    name: "Intertek",
    desc: "Quality assurance and risk management services",
  },
  {
    name: "EIC (Export Inspection Council)",
    desc: "Government-mandated inspection for food exports from India",
  },
];

export default function ThirdPartyInspectionSection() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-accent text-xs font-semibold tracking-[0.16em] uppercase text-secondary">
            Independent Verification
          </p>
          <h2 className="mt-2 font-heading text-5xl font-bold text-primary">
            Third-Party Inspection
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            For all significant orders, we coordinate independent pre-shipment
            inspections with internationally recognized agencies - at the
            buyer&apos;s request or as standard practice.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {agencies.map((agency) => (
            <article key={agency.name} className="border border-slate-300 bg-white p-5 hover:border-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 text-secondary"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="m8.5 13.5-1.5 7 5-2.2 5 2.2-1.5-7" />
              </svg>

              <h3 className="mt-3 font-heading text-2xl font-bold text-primary">
                {agency.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {agency.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 border-l-4 border-primary bg-white px-5 py-4 text-sm leading-relaxed text-slate-600">
          <span className="font-semibold text-primary">Note:</span> Buyers are
          encouraged to nominate their preferred inspection agency. We will
          coordinate access, product presentation, and inspection logistics at
          no additional fee for standard orders.
        </div>
      </div>
    </section>
  );
}
