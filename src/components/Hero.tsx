import React from 'react';
import Link from 'next/link';
import Container from './Container'

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <Container className="py-16 md:py-24">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                        Quant Finance Collective at Texas State University
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
                        A student-led organization making quant finance accessible through mathematics, programming, and data-driven market analysis.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/projects"
                            className="bg-white text-primary-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors min-h-[44px] flex items-center justify-center"
                        >
                            Explore Projects
                        </Link>
                        <Link
                            href="/about"
                            className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-700 transition-colors min-h-[44px] flex items-center justify-center"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;