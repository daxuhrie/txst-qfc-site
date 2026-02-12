export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-8">
                <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.08em] text-slate-500">About</p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Quant Finance Collective</h1>
                    <p className="text-lg text-slate-700 max-w-3xl">
                        The Quant Finance Collective is a student-led organization at Texas State University focused on developing rigorous quantitative thinkers. We study markets, uncertainty, and decision-making through mathematics, computation, and structured analysis.
                    </p>
                    <p className="text-lg text-slate-700 max-w-3xl">
                        Our goal is to bridge theory and implementation: transforming probability and market concepts into applied simulations, research initiatives, and technical projects.
                    </p>
                </div>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                    <section className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900 mb-3">Who We Are</h2>
                        <p className="text-slate-700">
                            We are students committed to understanding how modern financial systems actually work beneath the headlines and beyond speculation.
                        </p>
                        <p className="text-slate-700 mt-3 font-semibold">Our culture emphasizes:</p>
                        <ul className="text-slate-700 space-y-1 list-disc list-inside mt-2">
                            <li>Intellectual rigor</li>
                            <li>First-principles thinking</li>
                            <li>Systematic reasoning</li>
                            <li>Collaborative building</li>
                        </ul>
                        <p className="text-slate-700 mt-2">We prioritize clarity, depth, and implementation over hype.</p>
                    </section>

                    <section className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900 mb-3">What We Do</h2>
                        <ul className="text-slate-700 space-y-3">
                            <li>
                                <strong>Structured Workshops</strong><br />
                                Foundational and advanced topics in probability, market structure, volatility, and quantitative modeling.
                            </li>
                            <li>
                                <strong>Simulation Design</strong><br />
                                Interactive modules that reinforce intuition through implementation and iteration.
                            </li>
                            <li>
                                <strong>Research &amp; Project Development</strong><br />
                                Member-driven quantitative builds (individual or collaborative) that evolve into reusable tools and structured research.
                            </li>
                            <li>
                                <strong>Open Contribution Model</strong><br />
                                Students can build independently or in teams, contribute to shared repositories, and expand on existing modules.
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm md:col-span-2">
                        <h2 className="text-xl font-semibold text-slate-900 mb-3">What Members Gain</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="text-slate-700 space-y-3">
                                <li>
                                    <strong>Quantitative Frameworks</strong><br />
                                    Deep intuition for probability, risk, and expected value.
                                </li>
                                <li>
                                    <strong>Market Understanding</strong><br />
                                    Insight into liquidity, pricing mechanics, and volatility dynamics.
                                </li>
                            </ul>
                            <ul className="text-slate-700 space-y-3">
                                <li>
                                    <strong>Technical Experience</strong><br />
                                    Exposure to simulation design, structured modeling, and research workflows.
                                </li>
                                <li>
                                    <strong>Interview &amp; Career Preparation</strong><br />
                                    Applied problem-solving relevant to quantitative finance, trading, and data-driven roles.
                                </li>
                                <li>
                                    <strong>A Platform to Build</strong><br />
                                    A space to develop original projects that can grow into research, portfolio pieces, or long-term initiatives.
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
