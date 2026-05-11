'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, BarChart2 } from 'lucide-react'
import Container from '../../components/Container'

// ── Types ─────────────────────────────────────────────────────────────────────

type ResourceType = 'Paper' | 'Article' | 'Video' | 'Course'

interface Resource {
    title: string
    author: string
    description: string
    type: ResourceType
    url: string
}

interface Section {
    id: string
    label: string
    tag?: string
    resources: Resource[]
}

// ── Data ──────────────────────────────────────────────────────────────────────

const sections: Section[] = [
    {
        id: 'market-making',
        label: 'Market Making & HALO',
        resources: [
            {
                title: 'High-Frequency Trading in a Limit Order Book',
                author: 'Avellaneda & Stoikov (2008)',
                description: 'The paper HALO is built on. Derives optimal bid/ask quotes as a function of inventory, volatility, and risk aversion.',
                type: 'Paper',
                url: 'https://math.nyu.edu/~avellane/HighFrequencyTrading.pdf',
            },
            {
                title: 'Dealing with the Inventory Risk',
                author: 'Gueant, Lehalle & Fernandez-Tapia (2013)',
                description: 'Extends Avellaneda-Stoikov with closed-form solutions. More rigorous treatment of the fill intensity model and inventory management problem.',
                type: 'Paper',
                url: 'https://arxiv.org/abs/1105.3115',
            },
            {
                title: 'Flow Toxicity and Liquidity in a High-Frequency World (VPIN)',
                author: 'Easley, Lopez de Prado & O\'Hara (2012)',
                description: 'Introduces VPIN, the industry standard for detecting toxic order flow. The proper version of the OFI filter in HALO.',
                type: 'Paper',
                url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1695596',
            },
            {
                title: 'The Price Impact of Order Book Events',
                author: 'Cont, Kukanov & Stoikov (2014)',
                description: 'Formalizes order flow imbalance as a predictor of short-term price moves.',
                type: 'Paper',
                url: 'https://arxiv.org/abs/1011.6402',
            },
            {
                title: 'Market Making and Mean Reversion',
                author: 'Avellaneda & Stoikov, NYU lecture notes',
                description: 'More accessible than the original paper with worked examples.',
                type: 'Article',
                url: 'https://math.nyu.edu/~avellane/Notes_HighFrequency.pdf',
            },
            {
                title: 'How Citadel Securities Makes Money',
                author: 'Kris Abdelmessih (Moontower)',
                description: 'Practitioner breakdown of how a professional market maker generates revenue.',
                type: 'Article',
                url: 'https://moontowermeta.com/how-citadel-securities-makes-money/',
            },
            {
                title: 'Market Making Explained: Jane Street',
                author: 'Jane Street',
                description: "Jane Street's public explanation of market making and inventory risk.",
                type: 'Video',
                url: 'https://www.youtube.com/watch?v=YHbpRiKG4oY',
            },
            {
                title: 'Limit Order Book Dynamics: Lecture',
                author: 'Oxford Mathematical Finance',
                description: 'Academic lecture covering limit order book microstructure.',
                type: 'Video',
                url: 'https://www.youtube.com/watch?v=7pIGi_4lFLs',
            },
        ],
    },
    {
        id: 'stat-arb',
        label: 'Statistical Arbitrage & Cointegration',
        resources: [
            {
                title: 'Co-integration and Error Correction',
                author: 'Engle & Granger (1987)',
                description: 'The original cointegration paper. Introduces the two-step procedure and ADF test used in the BTC/ETH stat arb system.',
                type: 'Paper',
                url: 'https://www.jstor.org/stable/1913236',
            },
            {
                title: 'Pairs Trading: Performance of a Relative-Value Arbitrage Rule',
                author: 'Gatev, Goetzmann & Rouwenhorst (2006)',
                description: 'The seminal empirical pairs trading paper.',
                type: 'Paper',
                url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=141615',
            },
            {
                title: 'Statistical Arbitrage in the US Equities Market',
                author: 'Avellaneda & Lee (2010)',
                description: 'Applies statistical arbitrage to equities using PCA and cointegration.',
                type: 'Paper',
                url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1153505',
            },
            {
                title: 'Pairs Trading with Python: Full Tutorial',
                author: 'QuantInsti',
                description: 'Step-by-step Python implementation mirroring the QFC Stat Arb system.',
                type: 'Article',
                url: 'https://blog.quantinsti.com/pairs-trading-basics/',
            },
            {
                title: 'Cointegration and Pairs Trading: Lecture',
                author: 'Quantopian',
                description: 'Video lecture covering cointegration theory and signal generation with code examples.',
                type: 'Video',
                url: 'https://www.youtube.com/watch?v=JTucMRYMOyY',
            },
        ],
    },
    {
        id: 'options',
        label: 'Options, Greeks & Volatility Surfaces',
        resources: [
            {
                title: 'A Parsimonious Arbitrage-Free Implied Volatility Parametrization (SVI)',
                author: 'Gatheral (2004)',
                description: 'The original SVI paper.',
                type: 'Paper',
                url: 'https://mfe.baruch.cuny.edu/wp-content/uploads/2013/04/madrid2004.pdf',
            },
            {
                title: 'Arbitrage-Free SVI Volatility Surfaces',
                author: 'Gatheral & Jacquier (2014)',
                description: 'Extension of SVI with strict no-arbitrage conditions.',
                type: 'Paper',
                url: 'https://arxiv.org/abs/1204.0646',
            },
            {
                title: 'The Black-Scholes Formula and the Greeks',
                author: 'Sal Khan, Khan Academy',
                description: 'Accessible video derivation of Black-Scholes and Greeks.',
                type: 'Video',
                url: 'https://www.khanacademy.org/economics-finance-domain/core-finance/derivative-securities',
            },
            {
                title: 'Understanding the Volatility Smile',
                author: 'Peter Carr (NYU)',
                description: 'Explains why the BS implied vol smile exists.',
                type: 'Video',
                url: 'https://www.youtube.com/watch?v=RBLHQpFfJYA',
            },
            {
                title: 'Options Greeks Explained',
                author: 'Tastytrade',
                description: 'Practitioner-level series on Delta, Gamma, Theta, Vega, Vanna.',
                type: 'Video',
                url: 'https://www.tastytrade.com/concepts-strategies/options-greeks',
            },
            {
                title: 'Deribit Insights: Crypto Vol Surface Analysis',
                author: 'Deribit',
                description: 'Research articles on BTC/ETH implied vol dynamics.',
                type: 'Article',
                url: 'https://insights.deribit.com',
            },
        ],
    },
    {
        id: 'fundamentals',
        label: 'Quantitative Finance Fundamentals',
        resources: [
            {
                title: 'An Introduction to Statistical Learning (Free PDF)',
                author: 'James, Witten, Hastie & Tibshirani (2023)',
                description: 'The most accessible ML textbook.',
                type: 'Course',
                url: 'https://www.statlearning.com',
            },
            {
                title: 'MIT OpenCourseWare: Mathematical Finance (18.S096)',
                author: 'MIT',
                description: "Free MIT course covering stochastic calculus, Itô's lemma, Black-Scholes derivation.",
                type: 'Course',
                url: 'https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/',
            },
            {
                title: 'Quantitative Finance Stack Exchange',
                author: 'Community',
                description: 'Best Q&A resource for quant finance problems.',
                type: 'Article',
                url: 'https://quant.stackexchange.com',
            },
            {
                title: 'Advances in Financial Machine Learning: Lecture Series',
                author: 'Marcos Lopez de Prado (Cornell)',
                description: 'Covers financial ML methodology, labeling, and backtesting pitfalls.',
                type: 'Video',
                url: 'https://www.youtube.com/playlist?list=PLjKTV-p5pAnnFT2vbM_jBz7zl3CK99Hp2',
            },
            {
                title: 'QuantLib: Open-Source Quant Finance Library',
                author: 'QuantLib Project',
                description: 'Most widely used open-source quant finance library.',
                type: 'Article',
                url: 'https://www.quantlib.org',
            },
            {
                title: "Ernie Chan's Blog: Practical Quant Trading",
                author: 'Ernest Chan',
                description: 'Covers mean reversion, stat arb, and systematic strategy development.',
                type: 'Article',
                url: 'https://epchan.blogspot.com',
            },
        ],
    },
    {
        id: 'commodities',
        label: 'Commodities & Energy Markets',
        tag: 'Next Semester',
        resources: [
            {
                title: 'Stochastic Models of Commodity Prices',
                author: 'Eduardo Schwartz (1997)',
                description: 'Introduces the Schwartz one, two, and three-factor models for commodity price dynamics.',
                type: 'Paper',
                url: 'https://www.jstor.org/stable/2329501',
            },
            {
                title: 'The Crack Spread Handbook',
                author: 'CME Group',
                description: 'Explains crack spreads and the fundamental energy trading strategy.',
                type: 'Paper',
                url: 'https://www.cmegroup.com/education/files/crack-spread-handbook.pdf',
            },
            {
                title: 'Commodity Markets: An Introduction',
                author: 'CME Group Education',
                description: 'Free course covering commodity market fundamentals.',
                type: 'Course',
                url: 'https://www.cmegroup.com/education/courses/introduction-to-commodity-markets.html',
            },
            {
                title: 'Energy Markets: Overview and Trading Strategies',
                author: 'EIA',
                description: 'Free government resource covering crude oil, natural gas, and refined products markets.',
                type: 'Article',
                url: 'https://www.eia.gov/energyexplained/',
            },
            {
                title: 'Convenience Yield and Commodity Futures Pricing',
                author: 'QuantLib documentation',
                description: 'Explains convenience yields and futures pricing.',
                type: 'Article',
                url: 'https://quantlib-python-docs.readthedocs.io/en/latest/instruments/commodities.html',
            },
            {
                title: 'Quantamental Trading in Commodities: Lecture',
                author: 'Columbia IEOR',
                description: 'Applying quantitative methods to commodity markets.',
                type: 'Video',
                url: 'https://www.youtube.com/watch?v=6_GvxOGNHbE',
            },
        ],
    },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

const TYPE_STYLES: Record<ResourceType, string> = {
    Paper:   'bg-[#7c2a2a]/20 text-[#e07878]',
    Article: 'bg-blue-950/50 text-blue-400',
    Video:   'bg-green-950/50 text-green-400',
    Course:  'bg-yellow-950/40 text-yellow-400',
}

function ResourceCard({ resource }: { resource: Resource }) {
    return (
        <div className="section-panel !p-5 flex flex-col gap-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="text-sm font-semibold text-white leading-snug flex-1 min-w-0">
                    {resource.title}
                </p>
                <span className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${TYPE_STYLES[resource.type]}`}>
                    {resource.type}
                </span>
            </div>
            <p className="text-xs text-[#777]">{resource.author}</p>
            <p className="text-sm muted leading-relaxed flex-1">{resource.description}</p>
            <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[rgb(var(--accent-rgb))] hover:underline mt-auto pt-1 self-start"
            >
                Open <ExternalLink className="h-3 w-3" />
            </a>
        </div>
    )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
    const [activeTab, setActiveTab] = useState(sections[0].id)

    const activeSection = sections.find(s => s.id === activeTab)!

    return (
        <div className="min-h-screen bg-[#111111]">
            <Container className="py-12 md:py-20">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-[0.08em] text-[#555] mb-3">Resources</p>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Reading List &amp; Tools</h1>
                    <p className="muted text-base max-w-2xl">
                        Curated papers, articles, videos, and courses organized by the topics QFC covers each semester.
                        Resources marked with a project name are directly referenced in QFC research.
                    </p>
                </div>

                {/* Interactive Tools */}
                <section className="mb-12">
                    <h2 className="text-lg font-semibold text-white mb-4">Interactive Tools</h2>
                    <Link
                        href="/tools/options"
                        className="flex items-center gap-4 section-panel !p-5 max-w-lg hover:border-[#7c2a2a]/50 transition-colors group no-underline"
                    >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#7c2a2a]/20 flex items-center justify-center">
                            <BarChart2 className="h-5 w-5 text-[#e07878]" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white group-hover:text-white">Options Greeks Dashboard</p>
                            <p className="text-xs muted mt-0.5">
                                Interactive Black-Scholes pricer — Delta, Gamma, Theta, Vega, Rho &amp; payoff diagrams
                            </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#555] group-hover:text-[#e07878] transition-colors flex-shrink-0" />
                    </Link>
                </section>

                {/* Tab bar */}
                <section>
                    <h2 className="text-lg font-semibold text-white mb-4">Reading List</h2>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {sections.map(section => (
                            <button
                                key={section.id}
                                onClick={() => setActiveTab(section.id)}
                                className={[
                                    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors',
                                    activeTab === section.id
                                        ? 'bg-[#7c2a2a] text-white'
                                        : 'bg-[#1a1a1a] text-[#888] border border-[#2a2a2a] hover:text-white hover:border-[#444]',
                                ].join(' ')}
                            >
                                {section.label}
                                {section.tag && (
                                    <span className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-yellow-950/60 text-yellow-500">
                                        {section.tag}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Resource grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {activeSection.resources.map(resource => (
                            <ResourceCard key={resource.title} resource={resource} />
                        ))}
                    </div>

                    <p className="text-xs text-[#444] mt-8 text-center">
                        {activeSection.resources.length} resources in this section
                        {activeSection.tag ? ` · ${activeSection.tag}` : ''}
                    </p>
                </section>

            </Container>
        </div>
    )
}
