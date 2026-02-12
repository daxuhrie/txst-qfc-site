import Container from '@/components/Container'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Container className="py-12 md:py-16">
                <div className="space-y-3 mb-8">
                    <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Contact</p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Get in Touch</h1>
                    <p className="text-lg text-slate-700 max-w-3xl">Use the channels below to join meetings, request materials, or collaborate.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="card p-5">
                        <p className="text-xs uppercase tracking-[0.08em] text-slate-500 mb-1">Email</p>
                        <h2 className="text-lg font-semibold text-slate-900">ygv7@txstate.edu</h2>
                        <p className="text-sm text-slate-700 mt-2">Primary contact for meeting details and coordination.</p>
                    </div>
                    <div className="card p-5">
                        <p className="text-xs uppercase tracking-[0.08em] text-slate-500 mb-1">Discord</p>
                        <h2 className="text-lg font-semibold text-slate-900"><a href="https://discord.gg/eUSru8tggM" target="_blank" rel="noreferrer" className="hover:text-primary-700">discord.gg/eUSru8tggM</a></h2>
                        <p className="text-sm text-slate-700 mt-2">Join for announcements, files, and simulation feedback.</p>
                    </div>
                    <div className="card p-5">
                        <p className="text-xs uppercase tracking-[0.08em] text-slate-500 mb-1">Social</p>
                        <ul className="text-slate-800 text-sm space-y-1 mt-2">
                            <li><a className="hover:text-primary-700" href="https://www.instagram.com/qfctxst/" target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a className="hover:text-primary-700" href="https://www.linkedin.com/company/qfc-at-txst/posts/?feedView=all" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}