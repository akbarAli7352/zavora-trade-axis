import Hero from "@/components/about-component/Hero";
import CompanyOverview from "@/components/about-component/CompanyOverview";
import HowWeOperateSection from "@/components/about-component/HowWeOperateSection";
import LeadershipSection from "@/components/about-component/LeadershipSection";
import AboutCtaSection from "@/components/about-component/AboutCtaSection";

export default function About() {
  return (
    <main>
      <Hero />
      <CompanyOverview />
      <HowWeOperateSection />
      <LeadershipSection />
      <AboutCtaSection />
    </main>
  );
}
