import HeroSection from '@/components/hero-section';
import Features from '@/components/features-1';
import IntegrationsSection from '@/components/integrations-7';
import ProcessSection from '@/components/features-2';
import Stats from '@/components/stats-3';
import FAQSection from '@/components/faqs-3';


export default function Home() {
  return (
    <div className="bg-black text-white relative min-h-screen font-outfit">
      <HeroSection />
      <div id="features">
        <Features />
      </div>
      <IntegrationsSection />
      <div id="solution">
        <ProcessSection />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="about">
        <FAQSection />
      </div>
      {/* <FooterSection /> */}
    </div>
  );
}
