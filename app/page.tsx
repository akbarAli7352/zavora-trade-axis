import Hero from '@/components/Hero';
import Certifications from '@/components/Certifications';
import SeriousBuyersSection from '@/components/SeriousBuyersSection';
import ExportSection from '@/components/ExportSection';
import ProcessSection from '@/components/ProcessSection';
import IndiaAdvantageSection from '@/components/IndiaAdvantageSection';
import MarketMapSection from '@/components/MarketMapSection';
import PaymentTermsSection from '@/components/PaymentTermsSection';
import RFQSection from '@/components/RFQSection';

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
