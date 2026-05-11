export default function EventsPage() {
    return (
        <div className="min-h-screen bg-[#111111]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                <div className="text-center mb-12">
                    <p className="text-xs uppercase tracking-[0.08em] text-[#555] mb-3">Events</p>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">Events</h1>
                    <p className="text-lg muted max-w-xl mx-auto">
                        Stay tuned for next semester — more events coming soon.
                    </p>
                </div>

                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href="https://discord.gg/eUSru8tggM"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                    >
                        Join our Discord
                    </a>
                    <a
                        href="https://www.instagram.com/qfctxst/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                    >
                        Follow on Instagram
                    </a>
                </div>
            </div>
        </div>
    )
}
