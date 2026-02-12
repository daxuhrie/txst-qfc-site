import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';
import Container from '../../components/Container'

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#111111] text-white">
            <Container className="py-12 md:py-20">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Member Projects & Simulations</h1>
                    <div className="grid gap-6 md:grid-cols-2 items-start max-w-4xl mx-auto">
                        <div>
                            <p className="text-base md:text-lg muted mb-4">QFC acts as a platform for member-built research and simulations. Projects may be developed independently or collaboratively. Strong contributions are reviewed and showcased to the collective.</p>
                            <p className="text-sm muted">Projects listed here are independently developed and maintained by their authors. Clear attribution and long-term ownership are emphasized.</p>
                        </div>
                        <aside className="section-panel p-4">
                            <h3 className="text-sm font-semibold text-white mb-2">How Contributions Work</h3>
                            <p className="text-sm muted mb-2">Members are encouraged to build simulations, research notes, analytical tools, or technical modules independently or in small teams. Submissions are reviewed for clarity and rigor before being featured. Select projects may be incorporated into workshops or expanded further.</p>
                            <p className="text-xs muted">By lowering friction and emphasizing ownership, QFC creates a structure where members can build on their own terms while contributing to a shared ecosystem.</p>
                        </aside>
                    </div>
                </div>
                <div className="flex gap-6 flex-wrap justify-center">
                    {projects.map((project) => (
                        <div key={project.id} className="w-full md:w-[48%] lg:w-[31%]">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}