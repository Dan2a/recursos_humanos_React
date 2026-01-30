import { HeroSection } from '@/app/components/hero-section';
import { FeaturesSection } from '@/app/components/features-section';
import { SolutionHighlight } from '../components/SolutionHighlight';
import { DynamicExperience } from '../components/DynamicExperience';

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SolutionHighlight />    
    </>
  );
}