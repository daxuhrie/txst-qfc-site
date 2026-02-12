import { BookOpen, Clock, GitBranch } from 'lucide-react'

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="bg-white shadow-md rounded-lg p-10 text-center">
                    <div className="mx-auto inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-50 text-primary-700 mb-6">
                        <BookOpen className="w-8 h-8" />
                    </div>

                    <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Resources</p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2">Under Construction</h1>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto mt-4">We&apos;re curating educational materials, meeting artifacts, and structured handouts for QFC. The resources section is being assembled and will be published after upcoming meetings.</p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        <div className="p-4 border border-slate-100 rounded-lg">
                            <Clock className="w-6 h-6 text-slate-600 mb-2" />
                            <p className="text-sm font-semibold text-slate-900">Coming soon</p>
                            <p className="text-xs text-slate-600 mt-1">Meeting notes &amp; handouts</p>
                        </div>
                        <div className="p-4 border border-slate-100 rounded-lg">
                            <GitBranch className="w-6 h-6 text-slate-600 mb-2" />
                            <p className="text-sm font-semibold text-slate-900">Repository</p>
                            <p className="text-xs text-slate-600 mt-1">Shared code &amp; simulations</p>
                        </div>
                        <div className="p-4 border border-slate-100 rounded-lg">
                            <BookOpen className="w-6 h-6 text-slate-600 mb-2" />
                            <p className="text-sm font-semibold text-slate-900">Reading lists</p>
                            <p className="text-xs text-slate-600 mt-1">Curated introductions &amp; advanced texts</p>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <a href="https://txst.campuslabs.com/engage/organization/ql_txst" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-primary">Join the Collective</a>
                        <a href="mailto:ygv7@txstate.edu" className="text-sm text-slate-600 hover:underline">Contact us</a>
                    </div>

                    <p className="text-xs text-slate-500 mt-6">If you have materials to contribute, please share them via the Discord or email; we welcome independent contributions and will curate for clarity and rigor.</p>
                </div>
            </div>
        </div>
    )
}
