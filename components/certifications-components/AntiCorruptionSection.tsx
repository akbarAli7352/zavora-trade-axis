const commitments = [
  {
    title: "Zero Tolerance Policy",
    desc: "We maintain a zero-tolerance policy towards bribery, corruption, and facilitation payments across all our operations and supply chain relationships.",
  },
  {
    title: "Transparent Transactions",
    desc: "All financial transactions are conducted through banking channels only. No cash transactions, no informal payments. Full audit trail maintained.",
  },
  {
    title: "Compliance Training",
    desc: "Our team is trained on anti-corruption frameworks including FCPA and UK Bribery Act standards, ensuring alignment with international buyer requirements.",
  },
];

export default function AntiCorruptionSection() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-accent text-xs font-semibold tracking-[0.16em] uppercase text-secondary">
            Ethics Statement
          </p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-primary-txt">
            Anti-Corruption Commitment
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {commitments.map((item) => (
            <article key={item.title} className="border border-slate-300 bg-white p-5 sm:p-6 hover:border-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-secondary mb-4" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              <h3 className="mt-3 font-heading text-2xl font-bold text-primary-txt">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
