"use client"

import { useState } from "react"

type TabKey = "overview" | "projects" | "resources"

function TabButton({
    active,
    tab,
    label,
    onSelect,
}: {
    active: boolean
    tab: TabKey
    label: string
    onSelect: (tab: TabKey) => void
}) {
    return (
        <button
            type="button"
            onClick={() => onSelect(tab)}
            className={
                active
                    ? "relative overflow-hidden rounded-none border border-border bg-muted text-foreground py-2 px-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary first:rounded-s last:rounded-e"
                    : "relative overflow-hidden rounded-none border border-border py-2 px-3 text-muted-foreground hover:bg-muted/40 first:rounded-s last:rounded-e"
            }
        >
            <span className="inline-flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full" style={{ background: 'rgb(var(--accent-rgb))' }} aria-hidden="true" />
                {label}
            </span>
        </button>
    )
}

const overview = {
    schedule: "Thursdays • 5:00–6:00 PM • Roy F. Mitte 5242",
    flow: [
        "10–15 min primer on probability, microstructure, or volatility",
        "Simulation or notebook walkthrough with small-group pairing",
        "Discussion, metrics, and next steps for project owners",
    ],
}

const projectHighlights = [
    { title: "Dice Market Maker", detail: "Order flow, spreads, and impact with tunable parameters." },
    { title: "Tiles Volatility", detail: "Streaks, clustering, and drawdown intuition via tile paths." },
    { title: "Poker Bayes", detail: "Posterior updates, EV, and risk of ruin under uncertainty." },
]

const resources = [
    "Foundational notes on probability and distributions",
    "Interview prep: mental math, market making prompts, risk questions",
    "Reading list spanning microstructure, volatility, and systematic design",
    "Lightweight Python notebooks for quick experimentation",
]

function FocusTabs() {
    const [active, setActive] = useState<TabKey>("overview")

    return (
        <div className="w-full">
            <div className="mb-3 inline-flex h-auto -space-x-px bg-background p-0 shadow-sm rtl:space-x-reverse">
                <TabButton active={active === "overview"} tab="overview" label="Overview" onSelect={setActive} />
                <TabButton active={active === "projects"} tab="projects" label="Projects" onSelect={setActive} />
                <TabButton active={active === "resources"} tab="resources" label="Resources" onSelect={setActive} />
            </div>

            <div>
                {active === "overview" && (
                    <div className="grid gap-3 rounded-md border border-slate-800/80 bg-slate-950/60 p-4">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.08em] text-slate-400">Meeting schedule</p>
                            <p className="text-sm text-slate-100">{overview.schedule}</p>
                        </div>
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.08em] text-slate-400 mb-1">Session flow</p>
                            <ul className="text-sm text-slate-200 space-y-1">
                                {overview.flow.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                {active === "projects" && (
                    <div className="grid gap-3 sm:grid-cols-3">
                        {projectHighlights.map((proj) => (
                            <div key={proj.title} className="rounded-md border border-slate-800/80 bg-slate-950/60 p-4 shadow-sm">
                                <p className="text-xs text-slate-400 mb-1">Simulation lab</p>
                                <h3 className="text-sm font-semibold text-slate-50">{proj.title}</h3>
                                <p className="text-sm text-slate-200 mt-1">{proj.detail}</p>
                            </div>
                        ))}
                    </div>
                )}
                {active === "resources" && (
                    <div className="rounded-md border border-slate-800/80 bg-slate-950/60 p-4">
                        <p className="text-[11px] uppercase tracking-[0.08em] text-slate-400 mb-2">Start here</p>
                        <ul className="text-sm text-slate-200 space-y-1">
                            {resources.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full" style={{ background: 'rgb(var(--accent-rgb))' }} aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export { FocusTabs }
