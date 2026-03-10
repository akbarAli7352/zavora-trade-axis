'use client';

import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import { PRODUCT_CATEGORIES, URLS } from '@/constants';

interface ExportItem {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  linkText?: string;
  linkHref?: string;
  featured?: boolean;
}

const items: ExportItem[] = [
  {
    title: 'Leather Products',
    subtitle: 'Export Grade',
    description: 'Premium genuine leather goods from India’s established tannery hub.',
    image: '/assets/leather.jpg',
    linkText: 'View Specifications',
    linkHref: PRODUCT_CATEGORIES[0].href,
  },
  {
    title: 'Handicrafts',
    subtitle: 'Artisan Made',
    description: 'Authentic handcrafted items from master artisans across India.',
    image: '/assets/handicrafts.jpg',
    linkText: 'View Specifications',
    linkHref: PRODUCT_CATEGORIES[1].href,
  },
  {
    title: 'Carpets',
    subtitle: 'Premium Quality',
    description: 'Hand-knotted and machine-made carpets from certified weaving centers.',
    image: '/assets/carpet.jpg',
    linkText: 'View Specifications',
    linkHref: PRODUCT_CATEGORIES[2].href,
  },
  {
    title: 'Pure Honey',
    subtitle: 'FSSAI Certified',
    description: 'Certified natural honey sourced from verified apiaries with FSSAI approval.',
    image: '/assets/honey.jpg',
    linkText: 'View Specifications',
    linkHref: PRODUCT_CATEGORIES[3].href,
  },
  {
    title: 'Specialty Coffee',
    subtitle: 'APEDA Certified',
    description: 'Premium Indian coffee from South Indian estates, exported globally.',
    image: '/assets/coffee.jpg',
    linkText: 'View Specifications',
    linkHref: PRODUCT_CATEGORIES[4].href,
  },
  {
    title: 'Custom Sourcing',
    description: 'Your specific product requirements, our expert sourcing. Share your specs and we’ll handle the rest.',
    image: '',
    linkText: 'Submit Custom RFQ',
    linkHref: URLS.CONTACT,
    featured: true,
  }
];

export default function ExportSection() {
  return (
    <section className="w-full bg-white py-12 md:px-8">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="mb-2 font-accent font-semibold text-xs tracking-widest uppercase text-secondary">Core Export Products</h3>
        <SectionTitle title="What We Export" className="text-center md:text-justify mb-8 font-[auto]" />
        <p className="text-gray-600 text-center md:text-justify max-w-2xl mx-auto md:mx-0 mb-12">
          Five carefully curated product categories, each with verified supplier networks and documented quality standards.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col border overflow-hidden shadow-sm hover:border-secondary transition-all duration-300 group ${
                item.featured ? 'border-2 border-dashed border-secondary hover:bg-primary hover:border-0' : 'border-gray-200'
              }`}
            >
              {item.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {
                    item.featured && (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package text-secondary mb-4 mt-16" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>)
                  }
                  {item.subtitle && (
                    <p className="font-accent text-sm text-secondary mb-2 font-[auto]">{item.subtitle}</p>
                  )}
                  <h3 className={`text-lg font-semibold mb-1 font-[auto] ${item.featured ? 'group-hover:text-white' : ''}`}>{item.title}</h3>
                  <p className={`text-sm text-slate-500 font-body leading-relaxed mb-4 ${item.featured ? 'group-hover:text-gray-300' : ''}`}>
                    {item.description}
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href={item.linkHref || '#'}
                    className="text-primary-txt font-semibold text-sm inline-flex items-center gap-1 group-hover:text-secondary transition-colors"
                  >
                    {item.linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
