const paymentSteps = [
  {
    id: "1",
    title: "LC Opening",
    description:
      "Buyer's bank opens the Letter of Credit in favor of Zavora TradeAxis.",
  },
  {
    id: "2",
    title: "Production",
    description: "Goods manufactured against confirmed LC terms.",
  },
  {
    id: "3",
    title: "Pre-Shipment Inspection",
    description: "Third-party inspection and buyer approval before dispatch.",
  },
  {
    id: "4",
    title: "Shipment",
    description: "Goods shipped and Bill of Lading issued.",
  },
  {
    id: "5",
    title: "Document Negotiation",
    description: "LC documents submitted to bank for negotiation and payment.",
  },
];

export default function LCPaymentFlowSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-accent font-semibold text-xs tracking-widest uppercase text-secondary">
            Payment Security
          </p>
          <h2 className="font-heading text-4xl font-bold text-primary-txt mt-2">
            LC Payment Flow
          </h2>
          <p className="text-slate-500 text-sm mt-4 font-body max-w-lg mx-auto">
            We follow the globally accepted Letter of Credit mechanism - the
            most secure form of international trade payment.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {paymentSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-primary text-xs font-semibold text-white shadow-sm">
                {step.id}
              </div>

              {index < paymentSteps.length - 1 ? (
                <span
                  className="absolute right-[-20px] top-6 hidden h-px w-10 bg-secondary/70 lg:block"
                  aria-hidden="true"
                />
              ) : null}

              <h3 className="mt-3 font-heading text-base font-semibold text-primary-txt">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 font-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
