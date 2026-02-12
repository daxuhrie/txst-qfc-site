import React from 'react';
import Link from 'next/link';
import Container from './Container'

const Hero: React.FC = () => {
    return (
        <section className="site-section">
            <Container className="py-20 md:py-32 lg:py-40">
                <div className="hero-panel max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                        Quant Finance Collective at Texas State University
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
                        A student-led organization making quant finance accessible through mathematics, programming, and data-driven market analysis.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/projects"
                            className="btn-primary bg-white text-primary-700 hover:bg-gray-100"
                        >
                            Explore Projects
                        </Link>
                        <Link
                            href="/about"
                            className="btn-primary bg-primary-600 hover:bg-primary-700"
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