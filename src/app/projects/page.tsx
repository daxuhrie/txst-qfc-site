import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';
import Container from '../../components/Container'

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Container className="py-12 md:py-20">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Member Projects & Research</h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        The Quant Finance Collective at Texas State University highlights independently developed member projects. Each project is developed, owned, and maintained by its respective author and is linked here as an external resource.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </Container>
        </div>
    );
}