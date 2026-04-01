import HeroSection from '@/components/hero-section';
import Features from '@/components/features-1';
import IntegrationsSection from '@/components/integrations-7';
import ProcessSection from '@/components/features-2';

export default function Home() {
  return (
    <div className="bg-black text-white relative min-h-screen">
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <ProcessSection />
    </div>
  );
}
