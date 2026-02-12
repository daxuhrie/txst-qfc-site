import React from 'react';
import { BookOpen, Github, Target } from 'lucide-react';
import Container from './Container'

const Resources: React.FC = () => {
    const resources = [
        {
            title: 'Quantitative Finance Study Guide',
            description: 'Comprehensive guide covering key concepts and formulas.',
            icon: <BookOpen className="w-8 h-8" />,
        },
        {
            title: 'Python for Finance Tutorials',
            description: 'Learn data analysis and financial modeling with Python.',
            icon: <Github className="w-8 h-8" />,
        },
        {
            title: 'Interview Preparation',
            description: 'Practice questions and tips for quant finance interviews.',
            icon: <Target className="w-8 h-8" />,
        },
    ];

    return (
        <section className="py-8 md:py-16 bg-gray-50">
            <Container>
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Resources</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Educational materials and tools to support your quantitative finance journey.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm p-4 md:p-6 hover:shadow-sm transition-shadow h-full flex flex-col">
                            <div className="text-primary-600 mb-4">{resource.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                            <p className="text-gray-600 mb-4">{resource.description}</p>
                            <button className="text-primary-600 hover:text-primary-800 font-medium flex items-center gap-2">
                                Access Resource
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Resources;
