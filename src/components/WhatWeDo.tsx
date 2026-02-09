import React from 'react';
import Container from './Container'

const WhatWeDo: React.FC = () => {
    const offerings = [
        {
            title: 'Workshops',
            description: 'Hands-on sessions covering quantitative finance topics, programming, and financial modeling techniques.',
        },
        {
            title: 'Speaker Series',
            description: 'Invited talks from industry professionals sharing insights on quantitative finance careers and trends.',
        },
        {
            title: 'Networking',
            description: 'Events connecting members with alumni, recruiters, and other finance professionals.',
        },
        {
            title: 'Member Projects Directory',
            description: 'A curated showcase of independent member-developed projects and research initiatives.',
        },
    ];

    return (
        <section className="py-12 md:py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {offerings.map((offering, index) => (
                        <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-sm h-full flex flex-col">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{offering.title}</h3>
                            <p className="text-gray-600">{offering.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhatWeDo;