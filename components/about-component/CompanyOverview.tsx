import SectionTitle from "../SectionTitle";

const stats = [
  {
    value: "5",
    label: "Core Product Categories",
    highlighted: true,
  },
  {
    value: "6+",
    label: "Trade Certifications & Registrations",
    highlighted: false,
  },
  {
    value: "4",
    label: "Active Target Market Regions",
    highlighted: false,
  },
  {
    value: "100%",
    label: "Compliance Track Record",
    highlighted: true,
  },
];

export default function CompanyOverview() {
  return (
    <section className="w-full border-t border-primary bg-[#f3f4f6]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:px-16 lg:py-20">
        <div>
          <p className="font-accent  text-center md:text-justify font-semibold text-xs tracking-widest uppercase text-secondary mb-4">
            Company Overview
          </p>
          <SectionTitle title="Who We Are" className="text-center md:text-justify mb-8 font-[auto]" />
          <p className="text-slate-600 font-body leading-relaxed mb-5 mt-4 text-base">
            Zavora TradeAxis is a registered merchant exporter based in India,
            specializing in structured export sourcing for serious international
            buyers. We operate across five core product categories: leather
            goods, handicrafts, carpets, honey, and coffee.
          </p>

          <p className="text-slate-600 font-body leading-relaxed mb-5 text-base">
            Unlike generic brokers, we function as a full-service trade partner
            - handling supplier vetting, quality inspection, export
            documentation, compliance management, and logistics coordination
            under one structured framework.
          </p>

          <p className="text-slate-500 font-body leading-relaxed text-sm italic border-l-4 border-secondary pl-5 bg-slate-100 py-4 pr-4">
            &quot;While our core strength lies in structured export sourcing from
            India, Zavora TradeAxis also supports strategic import facilitation
            based on evolving market requirements.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={`flex min-h-36 flex-col justify-center border px-7 py-6 sm:min-h-44 ${stat.highlighted
                  ? "border-primary bg-primary text-white"
                  : "border-slate-300 bg-transparent text-primary"
                }`}
            >
              <p
                className={`font-heading font-bold text-4xl ${stat.highlighted ? "text-secondary" : ""
                  }`}
              >
                {stat.value}
              </p>
              <p
                className={`text-sm font-body ${stat.highlighted ? "text-white/85" : "text-slate-600"
                  }`}
              >
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
