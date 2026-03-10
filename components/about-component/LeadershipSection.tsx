const leadershipMembers = [
  {
    role: "CEO",
    name: "Abdul Noor",
    initials: "AN",
    responsibilities: [
      "Runs the company",
      "Reports to the members",
      "Single point of accountability",
    ],
  },
  {
    role: "Non Executive Director",
    name: "Mohd. Shahnawaz",
    initials: "MS",
    responsibilities: ["Strategy", "Agreements", "Policies", "Sales"],
  },
  {
    role: "COO / HR",
    name: "Md. Minhaj",
    initials: "MM",
    responsibilities: [
      "Logistics",
      "Shipping",
      "Custom clearance",
      "Warehousing",
      "Hiring",
    ],
  },
  {
    role: "CFO",
    name: "",
    initials: "CF",
    responsibilities: ["Accounting", "GST", "Payment", "Banking and LCs"],
  },
  {
    role: "CBO / Sales and Purchase",
    name: "Furqan",
    initials: "FU",
    responsibilities: ["Clients", "Pricing", "Market expansion"],
  },
];

export default function LeadershipSection() {
  return (
    <section className="w-full bg-[#f3f4f6]">
      <div className="mx-auto w-full max-w-400 px-6 py-14 sm:px-10 lg:px-8 lg:py-20">
        <div className="text-center">
          <p className="font-accent font-semibold text-xs tracking-widest uppercase text-secondary">
            Our Team
          </p>
          <h2 className="font-heading text-4xl font-bold text-primary mt-2">
            The People Behind Zavora
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {leadershipMembers.map((member) => (
            <article
              key={`${member.role}-${member.name}`}
              className="w-full max-w-sm border border-slate-300 bg-white px-6 py-6 lg:max-w-none hover:border-secondary"
            >
              <div className="font-[auto] w-14 h-14 bg-primary text-secondary flex items-center justify-center mb-4">
                {member.initials}
              </div>

              <h3 className="font-heading font-bold text-base text-primary mb-1">
                {member.name || member.role}
              </h3>
              <p className="text-xs font-accent font-semibold tracking-wide text-secondary uppercase mb-3">
                {member.name ? member.role : "Chief Financial Officer"}
              </p>

              <ul className="mt-4 space-y-2">
                {member.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-body text-sm leading-relaxed text-slate-500"
                  >
                    <span className="mt-1.75 inline-block h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
