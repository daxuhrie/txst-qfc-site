"use client"
import { useState } from 'react'
import Container from '@/components/Container'

interface SimulationCard {
    id: string
    title: string
    concept: string
    teaches: string
    status: string
    note: string
}

const simulations: SimulationCard[] = [
    {
        id: 'dice-market-maker',
        title: 'Dice Market Maker',
        concept: 'Order flow, spreads, inventory risk',
        teaches: 'How bid/ask setting responds to flow and variance',
        status: 'Prototype: functional',
        note: 'Adjust spreads based on recent outcomes and see how inventory risk shifts.',
    },
    {
        id: 'tiles-volatility',
        title: 'Tiles Volatility',
        concept: 'Volatility clustering and streaks',
        teaches: 'Runs of outcomes and how clustered variance emerges',
        status: 'Prototype: functional',
        note: 'Flip tiles to see clustered moves; observe how sequences affect perceived risk.',
    },
    {
        id: 'poker-simulator',
        title: 'Poker Simulator',
        concept: 'Bayesian updates, edge, and risk',
        teaches: 'Posterior thinking and risk-of-ruin intuition',
        status: 'Prototype: functional',
        note: 'Simulate simplified hands to see how small edges compound and when variance dominates.',
    },
]

function useSampleRun(label: string) {
    const [result, setResult] = useState<string>('Ready')

    const run = () => {
        const roll = Math.random()
        if (label === 'dice-market-maker') {
            const inventoryTilt = roll < 0.33 ? 'long inventory' : roll < 0.66 ? 'balanced' : 'short inventory'
            const spread = (0.5 + Math.random() * 0.8).toFixed(2)
            setResult(`Inventory state: ${inventoryTilt}; suggested spread: ${spread}%`)
        } else if (label === 'tiles-volatility') {
            const streak = Math.floor(Math.random() * 5) + 1
            const cluster = roll > 0.55 ? 'clustered swings' : 'calm patch'
            setResult(`Streak length: ${streak}; regime: ${cluster}`)
        } else {
            const edge = (Math.random() * 3 + 1).toFixed(2)
            const risk = roll > 0.6 ? 'variance dominates' : 'edge realized'
            setResult(`Estimated edge: ${edge}% over many hands; current regime: ${risk}`)
        }
    }

    return { result, run }
}

export default function GamesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Container className="py-12 md:py-16">
                <div className="space-y-3 mb-6">
                    <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Quantitative simulations</p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Quant Simulation Lab</h1>
                    <p className="text-lg text-slate-700 max-w-3xl">
                        Simulations are actively being refined and improved. Minor bugs may exist; feedback is welcome. These tools focus on probability, market structure, and volatility concepts, not arcade gameplay.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {simulations.map((sim) => {
                        const { result, run } = useSampleRun(sim.id)
                        return (
                            <div key={sim.id} className="card p-5 h-full flex flex-col">
                                <div className="space-y-1 mb-3">
                                    <p className="text-xs text-slate-500">{sim.status}</p>
                                    <h2 className="text-xl font-semibold text-slate-900">{sim.title}</h2>
                                    <p className="text-sm text-slate-700">Concept: {sim.concept}</p>
                                    <p className="text-sm text-slate-700">What it teaches: {sim.teaches}</p>
                                </div>
                                <p className="text-sm text-slate-700 mb-4 flex-1">{sim.note}</p>
                                <div className="space-y-2">
                                    <button
                                        className="w-full rounded-md border border-primary-100 bg-white text-primary-800 font-semibold py-2 hover:bg-primary-50"
                                        onClick={run}
                                    >
                                        Run quick sample
                                    </button>
                                    <div className="rounded-md border border-slate-100 bg-gray-50 px-3 py-2 text-sm text-slate-800 min-h-[48px] flex items-center">
                                        {result}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}