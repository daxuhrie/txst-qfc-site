import Link from 'next/link'
import Container from '../../components/Container'

export const metadata = {
    title: 'Join the Collective: Quant Finance Collective',
    description: 'How to join QFC: attend meetings, join via Campus Labs, or email the officers to contribute projects and simulations.',
}

export default function JoinPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Container>
                <div className="max-w-3xl mx-auto py-20">
                    <div className="bg-white shadow-md rounded-lg p-10 text-center">
                        <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Join the Collective</p>
                        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-2">Attend, Connect, Contribute</h1>
                        <p className="text-sm text-slate-700 max-w-xl mx-auto mt-4">Attend weekly meetings, join our Discord, or reach out by email to contribute projects, simulations, and research. We welcome students at all levels who are interested in building and learning; contributions are curated for clarity and rigor and authors retain ownership of their work.</p>

                        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
                            <a href="https://txst.campuslabs.com/engage/organization/ql_txst" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center">Join the Collective</a>
                            <a href="mailto:ygv7@txstate.edu" className="btn-secondary inline-flex items-center">Email us</a>
                            <Link href="/projects" className="inline-flex items-center text-sm text-slate-600 hover:underline">View Projects →</Link>
                        </div>

                        <div className="mt-6 text-sm text-slate-700">Room 5242, Roy F. Mitte Building • Thursdays • 5:00 – 6:00 PM</div>

                        <p className="text-xs text-slate-500 mt-6">If you have materials to contribute, please share them via the Discord or email; contributions are curated for clarity and rigor.</p>

                        <div className="mt-6 p-4 border border-slate-100 rounded-md bg-gray-50">
                            <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">Leadership Opportunities</h3>
                            <p className="text-sm text-slate-700 mb-3">We are seeking students to fill leadership and officer roles. Responsibilities include organizing workshops, maintaining simulations, mentoring contributors, and coordinating events.</p>
                            <div className="flex justify-center">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScnMCHaqsHTxN_w32q0ja8LeAHRdWke8UM_TtOX75Id0EcY9Q/viewform" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center">Interest form →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
