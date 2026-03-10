import { URLS } from '@/constants';
import Link from 'next/link';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Inquiry Submission',
    description:
      'Submit your RFQ with product specifications, quantity, and requirements.',
  },
  {
    number: '02',
    title: 'Sourcing & Vetting',
    description:
      'We identify and verify compliant suppliers against your specifications.',
  },
  {
    number: '03',
    title: 'Quality Inspection',
    description: 'Third-party pre-shipment inspection and documentation.',
  },
  {
    number: '04',
    title: 'Documentation',
    description: 'All export documents prepared: commercial invoice, packing list, COO, BL.',
  },
  {
    number: '05',
    title: 'Shipment & Support',
    description: 'Logistics coordination and post-sale follow-up until delivery.',
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-secondary font-accent text-xs tracking-widest uppercase mb-2">
          Our Process
        </p>
        <h2 className="text-primary-txt font-bold text-2xl md:text-3xl leading-tight mb-4">
          From Inquiry to Delivery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A structured, transparent process with clear milestones and documentation at every stage.
        </p>
      </div>

      {/* steps grid with aligned numbers for md+ */}
      <div className="grid gap-8 md:grid-cols-5 mb-12 relative pt-8 md:pt-12">
        {/* horizontal line behind numbers */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-secondary" />

        {steps.map((step) => (
          <div key={step.number} className="relative flex flex-col items-center text-center pt-8 md:pt-0">
            {/* number badge for md+ */}
            <div className="hidden md:flex absolute -top-12">
              <div className="h-12 w-12 bg-primary flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
            </div>

            {/* number shown on mobile */}
            <div className="md:hidden mb-2">
              <div className="h-10 w-10 bg-primary flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
            </div>

            <h3 className="font-semibold mb-1 text-lg text-primary-txt mt-4 md:mt-8">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href={URLS.EXPORT_PROCESS}
          className="inline-flex items-center text-primary-txt font-semibold text-sm hover:text-secondary transition-colors"
        >
          View Detailed Export Process
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right ml-1"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
