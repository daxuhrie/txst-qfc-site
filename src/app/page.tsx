import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import LandingHighlights from '../components/LandingHighlights';
import FeaturedProjects from '../components/FeaturedProjects';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* @ts-ignore - Client component rendered in server component */}
      <HeroGeometric badge="Quant Finance Collective" title1="Quant Finance Collective at" title2="Texas State University" />
      <LandingHighlights />
      <div className="text-center py-12">
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our site for full details on membership, events, projects, and governance.</p>
      </div>
    </div>
  );
}