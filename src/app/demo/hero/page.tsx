import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

export default function DemoHeroPage() {
    return (
        <main className="min-h-screen">
            {/* Client component will handle animations */}
            {/* @ts-ignore */}
            <HeroGeometric badge="Demo" title1="Elevate Your" title2="Digital Vision" />
        </main>
    );
}
