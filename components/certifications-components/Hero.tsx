export default function Hero() {
  return (
    <section className="w-full bg-primary text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="max-w-4xl">
          <p className="font-accent font-semibold text-xs tracking-widest uppercase text-secondary mb-4">
            Compliance & Credentials
          </p>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mt-3 mb-5 max-w-xl">
            Our Certifications
          </h1>

          <p className="text-white/70 text-lg font-body leading-relaxed max-w-2xl">
            Every credential we hold represents a commitment to compliance, transparency, and trade integrity. We believe in earned trust, not claimed trust.
          </p>
        </div>
      </div>
    </section>
  );
}
