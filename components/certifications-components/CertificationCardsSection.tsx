type Certification = {
  code: string;
  title: string;
  authority: string;
  description: string;
  significance: string;
  scope: string;
  status: "ACTIVE" | "IN PROGRESS";
};

const certifications: Certification[] = [
  {
    code: "IEC",
    title: "Import Export Code",
    authority: "Directorate General of Foreign Trade (DGFT), Ministry of Commerce, India",
    description:
      "The IEC (Import Export Code) is the primary business identification number required for export from India. Issued by DGFT under the Ministry of Commerce, it is mandatory for any merchant exporter to operate legally in international trade.",
    significance: "Validates our legal authorization to conduct export transactions from India.",
    scope: "All export transactions",
    status: "ACTIVE",
  },
  {
    code: "GST",
    title: "Goods & Services Tax Registration",
    authority: "Central Board of Indirect Taxes and Customs, India",
    description:
      "GST registration ensures full compliance with India's indirect taxation framework. All our export invoices are GST-compliant, and we maintain zero-rated export status under Indian GST law - ensuring no hidden tax burdens for buyers.",
    significance: "Ensures clean, compliant invoicing and eligibility for export refunds.",
    scope: "All transactions",
    status: "ACTIVE",
  },
  {
    code: "MSME",
    title: "MSME / Udyam Registration",
    authority: "Ministry of Micro, Small and Medium Enterprises, India",
    description:
      "Udyam registration under India's MSME framework provides official recognition as a registered business entity. This registration enables access to government export promotion schemes, priority banking services, and enhanced credibility.",
    significance: "Demonstrates established business credentials and access to export promotion benefits.",
    scope: "Business operations",
    status: "ACTIVE",
  },
  {
    code: "APEDA",
    title: "Agricultural & Processed Food Products Export Development Authority",
    authority: "Ministry of Commerce, Government of India",
    description:
      "APEDA registration is mandatory for exporting agricultural and processed food products from India. This certification covers our honey and coffee exports, ensuring compliance with international phytosanitary requirements and food safety standards.",
    significance: "Required for honey, coffee, and agricultural commodity exports.",
    scope: "Honey, Coffee, Agri-commodities",
    status: "ACTIVE",
  },
  {
    code: "FSSAI",
    title: "Food Safety and Standards Authority of India",
    authority: "Ministry of Health & Family Welfare, Government of India",
    description:
      "FSSAI licensing ensures all food products we handle - including honey and coffee - meet India's food safety standards. FSSAI compliance is increasingly required by international buyers as evidence of hygienic processing and handling standards.",
    significance: "Mandatory food safety compliance for honey, coffee, and all food-grade exports.",
    scope: "Honey, Coffee, Food Products",
    status: "ACTIVE",
  },
  {
    code: "ISO",
    title: "ISO 9001:2015 Quality Management System",
    authority: "International Organization for Standardization",
    description:
      "ISO 9001:2015 certification validates our quality management processes against international standards. This certification demonstrates our commitment to process consistency, customer satisfaction, and continuous improvement in all trade operations.",
    significance: "Internationally recognized quality management standard - strengthens buyer confidence.",
    scope: "All operations",
    status: "IN PROGRESS",
  },
];

export default function CertificationCardsSection() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto w-full max-w-7xl px-6 pb-14 sm:px-10 lg:px-16 lg:pb-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {certifications.map((item) => {
            const isActive = item.status === "ACTIVE";

            return (
              <article key={item.code} className="border border-slate-300 bg-slate-50 p-5 sm:p-6 hover:border-secondary">
                <div className="flex flex-wrap items-start gap-3">
                  <div className="w-14 h-14 bg-primary text-secondary flex items-center justify-center">
                    {item.code}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading font-bold text-base text-primary-txt">
                      {item.title}
                    </h2>
                    <p className="text-xs text-slate-500 font-body">{item.authority}</p>
                  </div>

                  <span
                    className={`text-xs font-accent font-semibold tracking-widest border px-3 py-1 uppercase ${
                      isActive
                        ? "border-green-300 bg-green-50 text-green-700"
                        : "border-amber-300 bg-amber-50 text-amber-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-sm mt-5 text-slate-600 font-body leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-accent font-semibold tracking-wide uppercase text-secondary">
                        Significance
                      </p>
                      <p className="text-xs text-slate-500 font-body mt-1">{item.significance}</p>
                    </div>
                    <div>
                      <p className="text-xs font-accent font-semibold tracking-wide uppercase text-secondary">
                        Scope
                      </p>
                      <p className="text-xs text-slate-500 font-body mt-1">{item.scope}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
