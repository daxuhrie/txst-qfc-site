import React from 'react';
import Container from './Container';

interface Phase {
    label: string;
    title: string;
    description: string;
    current: boolean;
}

const phases: Phase[] = [
    {
        label: 'Phase 1',
        title: 'Independent Research Initiatives',
        description:
            'Members develop individual projects and research tools. Each project is independently maintained, with shared visibility through the collective',
        current: true,
    },
    {
        label: 'Phase 2',
        title: 'Shared Infrastructure Development',
        description:
            'Useful tools and shared utilities may emerge from overlapping project needs; these remain member-driven and optional, reducing duplication where helpful',
        current: false,
    },
    {
        label: 'Phase 3',
        title: 'Structured Research Teams',
        description:
            'Formal research teams organize around specific domains (risk modeling, volatility analysis, systematic strategy research) with defined workflows and review processes',
        current: false,
    },
];

const HowQFCWorks: React.FC = () => {
    return (
        <section className="site-section bg-white">
            <Container>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        How QFC Works
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                        A phased approach to building quantitative research infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {phases.map((phase) => (
                        <div
                            key={phase.label}
                            className={`p-6 rounded-lg border ${phase.current
                                ? 'border-primary-200 bg-primary-50/40'
                                : 'border-gray-100 bg-gray-50/50'
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span
                                    className={`text-xs font-semibold uppercase tracking-wider ${phase.current
                                        ? 'text-primary-700'
                                        : 'text-gray-400'
                                        }`}
                                >
                                    {phase.label}
                                </span>
                                {phase.current && (
                                    <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-0.5 rounded-full">
                                        Current
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">
                                {phase.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {phase.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-6 text-sm text-gray-500 italic">
                    Currently operating in Phase 1. Shared infrastructure elements are emerging organically as project needs overlap.
                </p>
            </Container>
        </section>
    );
};

export default HowQFCWorks;
