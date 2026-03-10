'use client';

export default function Certifications() {
  const certifications = [
    {
      title: 'IEC',
      description: 'Import Export Code'
    },
    {
      title: 'MSME',
      description: 'Udyam Registered'
    },
    {
      title: 'APEDA',
      description: 'Agricultural Export'
    },
    {
      title: 'FSSAI',
      description: 'Food Safety'
    },
    {
      title: 'GST',
      description: 'Tax Compliant'
    },
    {
      title: 'ISO',
      description: '9001 Standard'
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-center gap-8 md:gap-12">
            <h2 className="text-primary-txt text-center font-semibold text-sm md:text-[0.75rem] whitespace-nowrap">
              REGISTERED & CERTIFIED:
            </h2>
            <div className="flex-1 grid grid-cols-6 gap-4 md:gap-8">
              {certifications.map((cert) => (
                <div key={cert.title} className="text-center">
                  <p className="text-primary-txt font-[auto] font-bold text-xs md:text-sm mb-1">
                    {cert.title}
                  </p>
                  <p className="text-gray-600 font-[auto] text-[0.5rem] md:text-[0.75rem]">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <h2 className="text-primary-txt font-semibold text-sm mb-6">
            REGISTERED & CERTIFIED:
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="text-center">
                <p className="text-primary-txt font-bold text-base mb-1">
                  {cert.title}
                </p>
                <p className="text-gray-600 text-xs">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
