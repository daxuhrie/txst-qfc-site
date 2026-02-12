import React from 'react'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'

export default function HeroPatternPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            {/* @ts-ignore */}
            <HeroGeometric
                badge="Quant Finance Collective"
                title1="Student-led. Research-first."
                title2="Quantitative initiatives at Texas State."
                subtitle="This page renders the production hero pattern used across the site."
            />
        </main>
    )
}
