import RFQForm from '@/components/RFQForm';

export default function RFQSection() {
  return (
    <section className="w-full bg-[#F6F7F8] py-14 md:py-20 md:px-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-2 font-accent font-semibold text-xs tracking-widest uppercase text-secondary">
            Start Your Trade
          </p>
          <h2 className="text-primary font-heading text-4xl md:text-5xl font-bold leading-tight">
            Submit a Request for Quotation
          </h2>
          <p className="text-slate-500 text-sm mt-4 font-body max-w-lg mx-auto">
            Complete the form below with your requirements. Our trade team will respond within 24 business hours.
          </p>
        </div>

        <div className="mt-10 border border-slate-300 bg-[#F6F7F8] p-5 md:p-9">
          <RFQForm />
        </div>
      </div>
    </section>
  );
}
