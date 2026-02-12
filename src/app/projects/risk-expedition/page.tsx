import ProjectDetail from '../../../components/ProjectDetail'
import { projects } from '../../../data/projects'

export const metadata = {
    title: 'Risk Expedition: Quant Finance Collective',
    description:
        'Overview of Risk Expedition, an independently developed educational project focused on risk, probability, and decision-making under uncertainty.',
}

export default function RiskExpeditionPage() {
    const project = projects.find((p) => p.id === 'risk-expedition')

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Project not found.</p>
            </div>
        )
    }

    const overview = [
        'Risk Expedition is an independent educational platform focused on risk modeling, simulation design, and portfolio analysis. The site provides research modules and simulations that build quantitative intuition and demonstrate practical modeling approaches.',
        'These simulations are modules within Risk Expedition designed to build quantitative intuition and explore market dynamics.',
        'Modules are Under Development. Minor bugs may exist; feedback is welcome.',
        'This project is independently developed and maintained by its author. The Quant Finance Collective hosts a link to the project as an external resource and does not own or operate the platform.',
    ]

    const simulations = [
        {
            id: 'dice-market-maker',
            title: 'Dice Market Maker',
            description:
                'A stylized market microstructure module demonstrating quoting behavior, inventory management, and spread dynamics.',
        },
        {
            id: 'tiles-volatility',
            title: 'Tiles Volatility',
            description:
                'A simulation that illustrates volatility clustering, streaks, and drawdown intuition through simple tiled-path dynamics.',
        },
        {
            id: 'poker-simulator',
            title: 'Poker Simulator',
            description:
                'A module for Bayesian updates and expected-value reasoning in a repeated (simulation) setting, emphasizing risk and edge assessment.',
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
