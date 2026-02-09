import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import Container from './Container'

interface FeaturedProjectsProps {
    count?: number;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ count = 3 }) => {
    // Show first `count` projects as featured
    const featuredProjects = projects.slice(0, count);

    return (
        <section className="site-section">
            <Container>
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover projects developed by our members; external links open in a new tab.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
                <div className="text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors"
                    >
                        View All Projects
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedProjects;