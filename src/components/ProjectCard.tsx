import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    ownerName: string;
    externalUrl: string;
    tags: string[];
    status: 'Active' | 'Completed' | 'In Development';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    ownerName,
    externalUrl,
    tags,
    status,
}) => {
    return (
        <div className="card p-4 md:p-6 h-full flex flex-col transition-shadow hover:shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 break-words">{title}</h3>
                <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : status === 'Completed'
                            ? 'bg-primary-100 text-primary-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                >
                    {status}
                </span>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded-full border border-gray-100"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-500 mb-4 break-words">
                External site — independently developed and maintained by {ownerName}
            </p>
            <div className="mt-auto">
                <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                    Visit Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;