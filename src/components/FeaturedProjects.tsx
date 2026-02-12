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
                        A curated selection of member-built projects. Each item credits its author and links to the original source; external links open in a new tab.
                    </p>
                </div>
                <div className="section-panel">
                    <div className="flex gap-6 flex-wrap justify-center mb-8">
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="w-full md:w-[48%] lg:w-[31%]">
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            href="/projects"
                            className="btn-primary bg-primary-600 hover:bg-primary-700"
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedProjects;