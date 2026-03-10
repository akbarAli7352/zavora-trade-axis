'use client';

import { JSX } from 'react';
import SectionTitle from '../SectionTitle';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-primary-txt mb-5" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
    ),
    title: 'Anti-Fraud Safeguards',
    description:
      'All transactions through verified banking channels. LC and Advance payment terms only — no credit exposure.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-primary-txt mb-5" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
    ),
    title: 'Quality Assurance',
    description:
      'Pre-shipment third-party inspection, documented quality standards, and compliance certification for every order.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-primary-txt mb-5" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
    ),
    title: 'Structured Compliance',
    description:
      'IEC, APEDA, FSSAI, and GST compliant operations with full audit trail and transparent documentation.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-primary-txt mb-5" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
    ),
    title: 'Reliable Execution',
    description:
      'Process-driven sourcing with documented timelines, regular status updates, and dedicated account management.',
  },
];

export default function SeriousBuyersSection() {
  return (
    <section className="w-full py-12 md:px-8">
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-2 font-accent font-semibold text-xs tracking-widest uppercase text-secondary">
          Why Zavora Tradeaxis
        </p>
        <SectionTitle
          title="Built for Serious Buyers"
          className="text-center md:text-left mb-8 font-[auto]"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col border-l-4 border-secondary bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 text-secondary">{f.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
