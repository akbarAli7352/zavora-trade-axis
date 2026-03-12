import { URLS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Port and Trade Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
        
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-0">
        <div className="max-w-3xl text-left px-8">
          {/* Header Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-secondary mt-1"></div>
            <p className="mt-1 text-secondary font-semibold text-sm tracking-widest uppercase">
              {`INDIA'S PREMIER MERCHANT EXPORTER`}
            </p>
          </div>

          {/* Main Heading */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-white mb-4">
              <span className="block text-5xl md:text-7xl font-bold mb-2">
                Structured Trade.
              </span>
              <span className="block text-5xl md:text-7xl font-bold text-secondary mb-2">
                Verified Quality.
              </span>
              <span className="block text-4xl md:text-7xl font-bold">
                Reliable Execution.
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-4 md:mb-6">
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl">
              {`Zavora TradeAxis connects international buyers with India's finest verified suppliers — leather goods, handicrafts, carpets, honey, and coffee — with full compliance, documented process, and payment security built in.`}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-12 md:mb-16">
            <Link href={URLS.CONTACT} className="bg-secondary hover:bg-secondary-hover text-primary-txt font-semibold px-8 py-3 md:px-10 md:py-4 transition-colors flex items-center gap-2">
              Submit RFQ
              <span className="text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
              </span>
            </Link>
            <Link href={URLS.HOME} className="border-2 border-gray-300 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-3 md:px-10 md:py-4 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
              Download Company Profile
            </Link>
          </div>

          {/* Certifications */}
          <div className="pb-12">
            <p className="text-gray-400 text-xs tracking-wider uppercase">
              <span className="inline-block mr-3 md:mr-6">IEC REGISTERED</span>
              <span className="inline-block mr-3 md:mr-6">GST COMPLIANT</span>
              <span className="inline-block mr-3 md:mr-6">MSME CERTIFIED</span>
              <span className="inline-block">APEDA APPROVED</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
