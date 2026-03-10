interface Stat {
  value: string;
  label: string;
}

const bulletPoints: string[] = [
  'Abundant raw materials and natural resources',
  'Generational artisan expertise and craftsmanship',
  'Competitive pricing with premium quality',
  'Established export infrastructure and documentation',
  'Strong regulatory framework and compliance culture',
];

const stats: Stat[] = [
  { value: '#3', label: 'Global Leather Exporter' },
  { value: '5,000+', label: 'Verified Suppliers' },
  { value: '100%', label: 'Compliance Track Record' },
  { value: '45+', label: 'Export Destinations' },
];

export default function IndiaAdvantageSection() {
  return (
    <section className="w-full bg-primary text-white py-12 md:px-8">
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-2 font-accent font-semibold text-xs tracking-widest uppercase text-secondary">
          India advantage
        </p>
       <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-6 font-[auto]">Why Source from India?</h2>

        <div className="md:flex md:gap-12">
          <div className="md:flex-1">
            <p className="mb-6 max-w-xl text-gray-300">
              {`India offers an unparalleled combination of raw material abundance,
              skilled artisanship, competitive pricing, and established export
              infrastructure - making it the world's most versatile sourcing
              destination.`}
            </p>
            <ul className="space-y-3">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-secondary mt-0.5 shrink-0" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  <span className="ml-2.5 text-sm text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:flex-1 mt-8 md:mt-0 grid gap-4 sm:grid-cols-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 p-6 flex flex-col justify-center"
              >
                <div className="font-heading font-bold text-4xl text-secondary mb-2">
                  {s.value}
                </div>
                <div className="text-gray-300 mt-1 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
