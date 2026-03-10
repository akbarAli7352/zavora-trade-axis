import { PRODUCT_CATEGORIES, URLS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* about section */}
          <div>
            <Link href={URLS.HOME} className="flex items-center mb-4">
              <Image
                src="/logo.png"
                width={48}
                height={48}
                alt="Zavora Trade Axis Logo"
                className="mr-2"
              />
              <span
                className="text-white font-heading font-bold text-lg"
                style={{ fontFamily: 'Playfair Display,serif' }}
              >
                Zavora TradeAxis
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-3">
              {`India's structured merchant exporter providing compliant,
              process-driven export sourcing for international buyers.`}
            </p>
            <div className="flex items-center text-secondary text-xs space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              <span>IEC • MSME • APEDA • GST REGISTERED</span>
            </div>
          </div>

          {/* company links */}
          <div>
            <h3 className="text-secondary uppercase text-sm mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={URLS.ABOUT} className="text-white/60 hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={URLS.EXPORT_PROCESS} className="text-white/60 hover:text-secondary">
                  Export Process
                </Link>
              </li>
              <li>
                <Link href={URLS.CERTIFICATIONS} className="text-white/60 hover:text-secondary">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href={URLS.CONTACT} className="text-white/60 hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* product links */}
          <div>
            <h3 className="text-secondary uppercase text-sm mb-3">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm">
              {PRODUCT_CATEGORIES.map((category) => (<li key={category.name}>
                <Link
                  href={category.href}
                  className="text-white/60 hover:text-secondary"
                >
                  {category.name}
                </Link>
              </li>))}
            </ul>
          </div>

          {/* contact details */}
          <div>
            <h3 className="text-secondary uppercase text-sm mb-3">
              Contact
            </h3>
            <ul className="text-white/60 space-y-2 text-sm">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-secondary mt-0.5 shrink-0" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="inline-block ml-2">New Delhi, India — 110001</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-secondary shrink-0" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                <Link
                  href="mailto:trade@zavora-tradeaxis.com"
                  className="ml-2 hover:text-secondary"
                >
                  trade@zavora-tradeaxis.com
                </Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-secondary shrink-0" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <Link href="tel:+919876543210" className="ml-2 hover:text-secondary">
                  +91 98765 43210 (WhatsApp)
                </Link>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-secondary shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span className="inline-block ml-2">Mon – Fri, 9:00 AM – 6:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400 space-y-2 md:space-y-0 md:flex md:justify-center md:items-center md:space-x-4">
          <span>
            © 2026 Zavora TradeAxis. All rights reserved. Registered Merchant
            Exporter, India.
          </span>
          <Link href={URLS.PRIVACY_POLICY} className="hover:text-secondary">
            Privacy Policy
          </Link>
          <Link href={URLS.TERMS_OF_TRADE} className="hover:text-secondary">
            Terms of Trade
          </Link>
          <Link
            href={URLS.CONTACT}
            className="hover:text-secondary"
          >
            Anti‑Corruption Statement
          </Link>
        </div>
      </div>
    </footer>
  );
}
