const weekly = {
    schedule: 'Every Thursday',
    time: '5:00 – 6:00 PM',
    location: 'Room 5242, Roy F. Mitte Building',
}

const semesterCalendar = [
    { date: 'Thu Feb 12', time: '5–6 PM', topic: 'Inaugural meeting' },
    { date: 'Thu Feb 19', time: '5–6 PM', topic: 'What is Quant?' },
    { date: 'Thu Feb 26', time: '5–6 PM', topic: 'How Probabilities Work' },
    { date: 'Thu Mar 5', time: '5–6 PM', topic: 'Poker Squares (Interactive Simulation)' },
    { date: 'Thu Mar 12', time: '5–6 PM', topic: 'What is Volatility?' },
    { date: 'Mar 15–22', time: '', topic: 'Spring Break (no meeting)' },
    { date: 'Thu Mar 26', time: '5–6 PM', topic: 'Risk Tiles (Interactive Simulation)' },
    { date: 'Thu Apr 2', time: '5–6 PM', topic: 'What is Market Making?' },
    { date: 'Thu Apr 9', time: '5–6 PM', topic: 'Market Making (Interactive Simulation)' },
    { date: 'Thu Apr 16', time: '5–6 PM', topic: 'Poker as Analogy for Trading' },
    { date: 'Thu Apr 23', time: '5–6 PM', topic: 'Poker (Game)' },
    { date: 'Thu Apr 30', time: '5–6 PM', topic: 'Interview Preparation' },
]

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                <div className="text-center mb-10 space-y-3">
                    <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Events</p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">Weekly Meetings and Semester Plan</h1>
                    <p className="text-lg text-slate-700">Regular schedule with clear topics, simulations, and discussion.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 mb-10">
                    <div className="card p-5">
                        <p className="text-xs uppercase tracking-[0.08em] text-slate-500 mb-1">Meeting schedule</p>
                        <h2 className="text-xl font-semibold text-slate-900">{weekly.schedule}</h2>
                        <p className="text-sm text-slate-700">{weekly.time}</p>
                        <p className="text-base text-slate-700">{weekly.location}</p>
                    </div>

                    <div className="card p-5 flex flex-col items-center justify-center gap-3">
                        <p className="text-xs uppercase tracking-[0.08em] text-slate-500 mb-1">Stay updated</p>
                        <p className="text-sm text-slate-700 mb-3">Join our community and follow updates</p>
                        <div className="flex gap-3">
                            <a href="https://discord.gg/eUSru8tggM" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center">Discord</a>
                            <a href="https://www.instagram.com/qfctxst/" target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center">Instagram</a>
                        </div>
                    </div>

                    <div className="card p-5">
                        <p className="text-xs uppercase tracking-[0.08em] text-slate-500 mb-1">Upcoming sessions</p>
                        <h2 className="text-xl font-semibold text-slate-900">Next Topics</h2>
                        <ul className="text-sm text-slate-700 mt-3 space-y-1">
                            {semesterCalendar.slice(0, 3).map((item) => (
                                <li key={item.date}>
                                    <span className="font-semibold">{item.date}</span>
                                    {item.time && <span className="text-slate-500"> · {item.time}</span>}
                                    {': '}
                                    {item.topic}
                                </li>
                            ))}
                        </ul>
                        <a href="#topic-roadmap" className="inline-flex items-center text-sm text-[rgb(var(--accent-rgb))] mt-4">See full calendar →</a>
                    </div>
                </div>

                <div className="section-panel">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Spring semester calendar</p>
                            <h2 id="topic-roadmap" className="text-xl font-semibold text-slate-900">Topic Roadmap</h2>
                        </div>
                        <p className="text-sm text-slate-600">Subject to refinement as we add speakers and new simulations.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        {semesterCalendar.map((item) => (
                            <div key={item.date} className="border border-slate-100 rounded-lg bg-white px-4 py-3 flex justify-between gap-3">
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-slate-900">{item.date}</span>
                                    {item.time && <span className="text-xs text-slate-500">{item.time}</span>}
                                </div>
                                <span className="text-sm text-slate-700 text-right">{item.topic}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="card p-5">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Past events</h3>
                        <p className="text-sm text-slate-700">Catalog of past workshops and slides will be added after each session.</p>
                    </div>
                    <div className="card p-5">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Future events</h3>
                        <p className="text-sm text-slate-700">Guest speakers and joint sessions are being scheduled; details will appear here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}