import Link from 'next/link'
import Container from '../components/Container'
import { projects } from '@/data/projects'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import { BookOpen, GitBranch, Zap, Layers, Activity, Terminal } from 'lucide-react'

const ctas = [
  { label: 'Join the Collective', href: 'https://txst.campuslabs.com/engage/organization/ql_txst', primary: true },
  { label: 'View Projects', href: '/projects', primary: false },
  { label: 'View Events', href: '/events', primary: false },
]

const focusAreas = [
  { title: 'Mathematics of Uncertainty', description: 'Probability, expected value, and stochastic reasoning.', icon: <BookOpen className="w-5 h-5 text-primary-400" /> },
  { title: 'Market Microstructure & Price Formation', description: 'How liquidity, spreads, and information shape prices.', icon: <Activity className="w-5 h-5 text-primary-400" /> },
  { title: 'Volatility & Regime Analysis', description: 'Modeling risk and interpreting volatility as a dynamic signal.', icon: <Zap className="w-5 h-5 text-primary-400" /> },
  { title: 'Simulation & Model Development', description: 'Build simulations and decision frameworks that evolve through iteration.', icon: <Layers className="w-5 h-5 text-primary-400" /> },
  { title: 'Research Pods & Independent Builds', description: 'Member-led projects that form a shared research library.', icon: <GitBranch className="w-5 h-5 text-primary-400" /> },
  { title: 'Practical Implementation & Reproducibility', description: 'Reproducible code, notebooks, and practices for maintainable research.', icon: <Terminal className="w-5 h-5 text-primary-400" /> },
]



const quickLinks = [
  { title: 'About', href: '/about', description: 'Who we are and what we focus on.' },
  { title: 'Leadership', href: '/leadership', description: 'Meet the students guiding QFC.' },
  { title: 'Resources', href: '/resources', description: 'Foundations, reading lists, and interview prep.' },
  { title: 'Contact', href: '/contact', description: 'Email, Discord, and social links.' },
]

const featuredProjects = projects.slice(0, 4)

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ── HERO ── */}
      <section className="pb-12 md:pb-16">
        <HeroGeometric
          strap="Quantitative. Systematic. Collaborative."
          title1="Quant Finance Collective"
          title2="Texas State University"
          subtitle={`Exploring quantitative thinking across finance, data, and decision-making.\nWe apply mathematics, statistics, and computation to real-world markets through workshops, simulations, and research collaboration.`}
        />
      </section>

      {/* ── HERO CTAS (overlap) ── */}
      <section className="-mt-12 md:-mt-16 mb-8 relative z-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-3 py-3 md:py-2 md:px-4 shadow-sm">
              {ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={`inline-flex self-center items-center justify-center rounded-md ${cta.primary ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>



      {/* ── CORE FOCUS AREAS ── */}
      <section className="pb-12 md:pb-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 items-start md:items-center mb-6">
            <div className="md:col-span-1">
              <p className="text-xs uppercase tracking-[0.08em] text-white">Core focus areas</p>
              <h2 className="text-2xl font-semibold text-white mt-1">Our Quant Exploration</h2>
              <p className="text-white max-w-md mt-3">We study markets, uncertainty, and decision-making through mathematics, computation, and structured analysis. We prioritize clarity, depth, and implementation over hype.</p>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.map((area) => (
                <div key={area.title} className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg h-full">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary-900/10">{area.icon}</div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{area.title}</h3>
                      <p className="text-sm text-slate-300 mt-1 max-w-xs">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>



      {/* ── MEMBER PROJECTS ── */}
      <section className="pb-12 md:pb-16">
        <Container>
          <div className="section-panel bg-slate-900/80 border border-slate-800 text-white">
            <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-white">Projects</p>
                <h2 className="text-xl font-semibold text-white">Active Research Initiatives</h2>
                <p className="muted text-sm max-w-2xl">QFC acts as a platform for member-built research and simulations. Projects may be developed independently or collaboratively; strong contributions are reviewed and showcased to the collective.</p>
              </div>
              <Link href="/projects" className="inline-flex items-center gap-2 btn-secondary">
                View All Projects
              </Link>
            </div>

            <div className="flex gap-6 flex-wrap justify-center">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={project.externalUrl || `/projects/${project.id}`}
                  className="w-full md:w-[48%] lg:w-[31%] bg-slate-800 border border-slate-700 rounded-lg p-5 hover:shadow-lg transition-shadow flex flex-col h-full"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-base font-semibold text-white leading-snug">{project.title}</h3>
                    <span className="inline-flex items-center justify-center text-center px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">{project.status}</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-4 flex-1">{project.description}</p>

                  <div className="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                    <span>Owner: <span className="text-slate-200 font-medium">{project.ownerName}</span></span>
                    <span className="text-[10px] uppercase tracking-wider">External</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="pb-12 md:pb-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="section-panel bg-slate-900/80 border border-slate-800 text-white hover:border-slate-700 transition flex flex-col">
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white flex-1">{item.description}</p>
                <span className="text-xs font-semibold text-[rgb(var(--accent-rgb))] mt-3">Explore →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CONTACT ── */}
      <section className="pb-16 md:pb-20">
        <Container className="section-panel bg-slate-900/80 border border-slate-800 text-white">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-6">
              <p className="text-xs uppercase tracking-[0.08em] text-white mb-1">Join the Collective</p>
              <h3 className="text-xl font-semibold text-white mb-2">Attend, Connect, Contribute</h3>
              <p className="text-sm text-white mb-4">Attend weekly meetings, join our Discord, or reach out by email to contribute projects and simulations. We welcome students at all levels who are interested in building and learning.</p>

              <div className="flex flex-wrap items-center gap-3">
                <a href="https://txst.campuslabs.com/engage/organization/ql_txst" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center">Join the Collective</a>
                <a href="mailto:ygv7@txstate.edu" className="btn-secondary inline-flex items-center">Email us</a>
                <a href="/projects" className="inline-flex items-center text-sm text-slate-300 hover:underline">View Projects →</a>
              </div>

              <div className="mt-4 text-sm text-slate-200">
                <div>Room 5242, Roy F. Mitte Building</div>
                <div>Thursdays • 5:00 – 6:00 PM</div>
              </div>

              <p className="text-xs text-slate-500 mt-4">If you have materials to contribute, please share them via the Discord or email; contributions are curated for clarity and rigor.</p>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-6">
              <p className="text-sm font-semibold text-white mb-3">First meeting prep</p>
              <ul className="text-sm text-white space-y-2">
                <li>• Bring a laptop if possible.</li>
                <li>• Expect a short primer followed by discussion.</li>
                <li>• No finance background required; curiosity is enough.</li>
              </ul>
              <div className="mt-4">
                <a href="mailto:ygv7@txstate.edu" className="btn-primary">Email the officers</a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}