interface PaymentOption {
  badge: string;
  title: string;
  description: string;
  points: string[];
}

const paymentOptions: PaymentOption[] = [
  {
    badge: 'Preferred Mode',
    title: 'Letter of Credit (LC)',
    description:
      'An international bank guarantee mechanism that protects both buyer and seller. Payment is triggered only upon presentation of compliant shipping documents.',
    points: [
      'Bank-backed guarantee',
      'Document-verified release',
      'International standard',
      'SWIFT-compatible',
    ],
  },
  {
    badge: 'For Established Buyers',
    title: 'Advance Payment',
    description:
      '30-50% advance payment before production, with the remaining balance confirmed prior to shipment. Full security for both parties.',
    points: [
      'Upfront commitment',
      'Production assurance',
      'Balance before shipment',
      'Clear milestone payments',
    ],
  },
];

export default function PaymentTermsSection() {
  return (
    <section className="w-full bg-[#F6F7F8] py-14 md:py-20 md:px-56">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-2 font-accent font-semibold text-xs tracking-widest uppercase text-secondary">
            Payment Security
          </p>
          <h2 className="text-primary font-heading text-3xl md:text-4xl font-bold leading-tight">
            Transparent Payment Terms
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-lg mx-auto font-body">
            We operate exclusively on secure, bank-backed payment mechanisms.
            No credit terms. No ambiguity.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {paymentOptions.map((option) => (
            <article
              key={option.title}
              className="border border-slate-300 bg-[#F6F7F8] p-6 md:p-8 hover:border-secondary"
            >
              <span className="inline-block bg-primary text-white text-xs font-accent font-semibold tracking-widest uppercase px-3 py-1 mb-4">
                {option.badge}
              </span>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                {option.title}
              </h3>
              <p className="text-sm text-slate-500 font-body leading-relaxed mb-5">
                {option.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {option.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big text-secondary shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span className="ml-2.5">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 font-body mt-8 max-w-xl mx-auto">Note: We do not offer open credit terms or deferred payment arrangements. All transactions are conducted through banking channels only.</p>
      </div>
    </section>
  );
}
