const processSteps = [
  {
    id: "01",
    dayRange: "Day 1-3",
    title: "Inquiry & Requirement Analysis",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-secondary mt-0.5 shrink-0" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>,
    description:
      "The process begins with your detailed RFQ submission. Our trade team analyzes your requirements - product specifications, quantity, target price, certifications required, and destination port.",
    activities: [
      "RFQ form review and clarification call",
      "Feasibility assessment against current supplier network",
      "Preliminary pricing indication",
      "Timeline projection based on product and quantity",
    ],
    documents: ["RFQ Acknowledgement", "Preliminary Trade Term Sheet"],
  },
  {
    id: "02",
    dayRange: "Day 4-14",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-secondary mt-0.5 shrink-0" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>,
    title: "Sourcing & Supplier Vetting",
    description:
      "We identify qualified suppliers from our verified network. Each supplier is vetted against compliance requirements, quality standards, capacity, and export history before being shortlisted.",
    activities: [
      "Supplier identification and background verification",
      "Compliance documentation review (IEC, GST, certifications)",
      "Factory capacity and export history assessment",
      "Shortlist presentation to buyer",
    ],
    documents: ["Supplier Assessment Report", "Compliance Verification Checklist"],
  },
  {
    id: "03",
    dayRange: "Day 15-30",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-secondary mt-0.5 shrink-0" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>,
    title: "Quality Inspection & Sampling",
    description:
      "Pre-production samples are prepared and inspected against buyer specifications. For large orders, third-party inspection agencies conduct independent quality audits.",
    activities: [
      "Pre-production sample dispatch",
      "Third-party inspection booking (SGS/Bureau Veritas/Intertek)",
      "Quality audit against buyer specifications",
      "Inspection report and buyer approval",
    ],
    documents: ["Sample Approval Form", "Third-Party Inspection Report", "Quality Certificate"],
  },
  {
    id: "04",
    dayRange: "Day 30-45",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-secondary mt-0.5 shrink-0" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>,
    title: "Documentation & Compliance",
    description:
      "Once production is complete and quality approved, we handle all export documentation - ensuring full compliance with Indian export regulations and destination country import requirements.",
    activities: [
      "Commercial Invoice and Packing List preparation",
      "Certificate of Origin (COO) from APEDA/Chamber of Commerce",
      "Bill of Lading / Airway Bill coordination",
      "Phytosanitary certificate (where applicable)",
      "FSSAI/health certificates for food products",
    ],
    documents: ["Commercial Invoice", "Packing List", "COO", "BL/AWB", "Health Certificates"],
  },
  {
    id: "05",
    dayRange: "Day 45-60+",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ship text-secondary mt-0.5 shrink-0" aria-hidden="true"><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>,
    title: "Shipment & Post-Sale Support",
    description:
      "Logistics coordination, container booking, customs clearance, and shipping documentation. Post-shipment tracking and support until final delivery at destination.",
    activities: [
      "Container booking and freight forwarder coordination",
      "Customs clearance and Let Export Order (LEO)",
      "Shipment tracking updates to buyer",
      "Post-shipment document submission for LC negotiation",
      "Post-delivery follow-up and feedback",
    ],
    documents: ["Shipping Bill", "LEO Confirmation", "Tracking Details", "Final Invoice Set for LC"],
  },
];

export default function ProcessTimelineSection() {
  return (
    <section className="bg-[#F5F7FA]">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-32 lg:py-14">
        <div className="space-y-6">
          {processSteps.map((step) => (
            <article
              key={step.id}
              className="group grid grid-cols-1 border border-slate-300 bg-white transition-colors lg:grid-cols-[167px_1fr] hover:border-secondary"
            >
              <div className="flex min-h-28 flex-col items-center justify-center bg-primary px-4 py-6 text-center text-white transition-colors group-hover:bg-secondary lg:min-h-full">
                <p className="font-heading text-4xl font-bold leading-none text-white/45">
                  {step.id}
                </p>
                <p className="mt-2 font-accent text-xs font-semibold tracking-[0.12em] uppercase text-white/80">
                  {step.dayRange}
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <h2 className="flex font-heading font-bold text-xl text-primary-txt">
                  <span className="text-secondary mr-2 md:mr-4" aria-hidden="true">
                    {step.icon}
                  </span>
                  {step.title}
                </h2>
                <p className="text-slate-600 font-body text-sm leading-relaxed mb-5 mt-3">
                  {step.description}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-accent font-semibold tracking-widest uppercase text-primary-txt mb-3">
                      Activities
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {step.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-2 text-xs text-slate-500 font-body"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-secondary mt-0.5 shrink-0" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-accent font-semibold tracking-widest uppercase text-primary-txt mb-3">
                      Documents Involved
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.documents.map((doc) => (
                        <span
                          key={doc}
                          className="border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
