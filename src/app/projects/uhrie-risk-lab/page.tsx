import ProjectDetail from '../../../components/ProjectDetail'
import { projects } from '../../../data/projects'

export const metadata = {
    title: 'Uhrie Risk Lab — Quant Finance Collective',
    description:
        'Overview of Uhrie Risk Lab, an independently developed educational project focused on risk, probability, and decision-making under uncertainty.',
}

export default function UhrieRiskLabPage() {
    const project = projects.find((p) => p.id === 'uhrie-risk-lab')

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Project not found.</p>
            </div>
        )
    }

    const overview = [
        'Uhrie Risk Lab is an independent educational platform focused on risk and decision-making under uncertainty. The site provides interactive simulations and research modules designed to build quantitative intuition around probabilistic reasoning and expected value analysis.',
        'The platform contains interactive simulations and guided modules that demonstrate foundational and applied topics such as probability distributions, expected value computations, scenario analysis, and model-based decision-making. These modules are educational in nature and intended for students and practitioners exploring quantitative approaches to market behavior and risk measurement.',
        'This project is independently developed and maintained by its author. The Quant Finance Collective hosts a link to the project as an external resource and does not own or operate the platform.',
    ]

    const simulations = [
        {
            id: 'tiles-risk-game',
            title: 'Tiles Risk Game',
            description:
                'A simulation that illustrates risk-reward trade-offs via sequential decision problems and probability weighting, emphasizing intuitive understanding of cumulative risk.',
        },
        {
            id: 'poker-squares-ev',
            title: 'Poker Squares EV',
            description:
                'A module exploring expected value calculations in game settings, demonstrating how strategy changes with altered payoff matrices and probabilistic outcomes.',
        },
        {
            id: 'market-maker-dice',
            title: 'Market Maker Dice',
            description:
                'A stylized market microstructure simulation highlighting inventory management, quoting behavior, and how spread dynamics reflect underlying probability and risk preferences.',
        },
    ]

    const technicalFocus = [
        'Risk modeling intuition and exposure analysis',
        'Probability theory and expected value computations',
        'Scenario and sensitivity analysis',
        'Decision trees and sequential decision frameworks',
        'Market microstructure concepts in simplified simulations',
    ]

    return (
        <main className="min-h-screen bg-gray-50">
            <ProjectDetail
                title={project.title}
                ownerName={project.ownerName}
                status={project.status}
                overview={overview}
                simulations={simulations}
                technicalFocus={technicalFocus}
                externalUrl={project.externalUrl}
            />
        </main>
    )
}
