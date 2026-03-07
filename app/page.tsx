import Hero from '@/components/home-components/Hero';
import Certifications from '@/components/home-components/Certifications';
import SeriousBuyersSection from '@/components/home-components/SeriousBuyersSection';
import ExportSection from '@/components/home-components/ExportSection';
import ProcessSection from '@/components/home-components/ProcessSection';
import IndiaAdvantageSection from '@/components/home-components/IndiaAdvantageSection';
import MarketMapSection from '@/components/home-components/MarketMapSection';
import PaymentTermsSection from '@/components/home-components/PaymentTermsSection';
import RFQSection from '@/components/home-components/RFQSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Certifications />
      <SeriousBuyersSection />
      <ExportSection />
      <ProcessSection />
      <IndiaAdvantageSection />
      <MarketMapSection highlight={["IND"]} />
      <PaymentTermsSection />
      <RFQSection />
    </main>
  );
}
