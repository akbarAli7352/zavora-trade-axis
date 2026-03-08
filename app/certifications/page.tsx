import AntiCorruptionSection from "@/components/certifications-components/AntiCorruptionSection";
import Hero from "@/components/certifications-components/Hero";
import CertificationCardsSection from "@/components/certifications-components/CertificationCardsSection";
import CertificationNoticeSection from "@/components/certifications-components/CertificationNoticeSection";
import ThirdPartyInspectionSection from "@/components/certifications-components/ThirdPartyInspectionSection";
import CertificationCtaSection from "@/components/certifications-components/CertificationCtaSection";

export default function Certifications() {
    return (
        <main>
            <Hero />
            <CertificationNoticeSection />
            <CertificationCardsSection />
            <ThirdPartyInspectionSection />
            <AntiCorruptionSection />
            <CertificationCtaSection />
        </main>
    );
}
