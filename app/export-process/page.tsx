import ExportCtaSection from "@/components/export-process-components/ExportCtaSection";
import Hero from "@/components/export-process-components/Hero";
import LCPaymentFlowSection from "@/components/export-process-components/LCPaymentFlowSection";
import ProcessTimelineSection from "@/components/export-process-components/ProcessTimelineSection";

export default function ExportProcess() {
    return (
        <main>
            <Hero />
            <ProcessTimelineSection />
            <LCPaymentFlowSection />
            <ExportCtaSection />
        </main>
    );
}
