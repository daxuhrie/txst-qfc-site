import React from 'react'
import Link from 'next/link'

interface Simulation {
    id: string
    title: string
    description: string
}

interface ProjectDetailProps {
    title: string
    ownerName: string
    status: 'Active' | 'Completed' | 'In Development' | 'Under Development'
    overview: string[]
    simulations: Simulation[]
    technicalFocus: string[]
    externalUrl: string
}

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    const classes =
        (status === 'Active' || status === 'Under Development')
            ? 'bg-green-100 text-green-800'
            : status === 'Completed'
                ? 'bg-primary-100 text-primary-800'
                : 'bg-yellow-100 text-yellow-800'

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${classes}`}>
            {status}
        </span>
    )
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
    title,
    ownerName,
    status,
    overview,
    simulations,
    technicalFocus,
    externalUrl,
}) => {
    return (
        <article className="site-section" aria-labelledby="project-title">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-8">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                        <div>
                            <h1 id="project-title" className="text-2xl md:text-3xl font-semibold text-white">
                                {title}
                            </h1>
                            <p className="mt-2 text-sm muted">Developed and maintained independently by {ownerName}</p>
                        </div>
                        <div className="flex items-center gap-3">
                                <StatusBadge status={status} />
                                {status === 'Under Development' ? (
                                    <div className="inline-flex items-center px-4 py-2 min-h-[44px] bg-slate-200 text-gray-700 rounded-md text-sm font-medium cursor-not-allowed opacity-90">
                                        Under Development
                                    </div>
                                ) : (
                                    <a
                                        href={externalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 min-h-[44px] bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                                    >
                                        Visit External Site
                                    </a>
                                )}
                        </div>
                    </div>
                </header>

                <section aria-labelledby="overview-heading" className="prose prose-lg mb-8">
                    <h2 id="overview-heading" className="text-xl font-semibold text-gray-900">Overview</h2>
                    {overview.map((p, i) => (
                        <p key={i} className="text-gray-700">
                            {p}
                        </p>
                    ))}
                </section>

                <section aria-labelledby="simulations-heading" className="mb-8">
                    <h3 id="simulations-heading" className="text-lg font-semibold text-white mb-3">Quantitative Simulations</h3>
                    <p className="muted text-sm mb-4">These simulations are modules within {title} designed to build quantitative intuition and explore market dynamics.</p>
                    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {simulations.map((sim) => (
                            <li key={sim.id} className="card p-4">
                                <h4 className="text-sm font-semibold text-white mb-1">{sim.title}</h4>
                                <p className="text-sm muted">{sim.description}</p>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-xs muted">Modules are Under Development. Minor bugs may exist; feedback is welcome.</p>
                </section>

                <section aria-labelledby="technical-heading" className="mb-8">
                    <h3 id="technical-heading" className="text-lg font-semibold text-gray-900 mb-4">Technical Focus</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {technicalFocus.map((t, i) => (
                            <li key={i}>{t}</li>
                        ))}
                    </ul>
                </section>

        <aside role="note" className="mt-8 p-4 border-l-4 border-gray-300 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-700">
            <strong>Independence notice:</strong> {title} is an independent educational project developed and maintained by its author. It is listed here as an external resource and is not owned or operated by the Quant Finance Collective at Texas State University.
                    </p>
                </aside>
            </div>
        </article>
    )
}

export default ProjectDetail
