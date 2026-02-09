import React from 'react';
import Container from './Container'

const About: React.FC = () => {
    return (
        <section id="about" className="site-section">
            <Container>
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">About the Club</h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 mb-6">
                        Quant Finance Collective at Texas State University is a student-led quantitative finance education organization dedicated to developing foundational and advanced market understanding through mathematics, programming, and data-driven analysis.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mb-6">
                        Our purpose is to make quant finance accessible to motivated students. We teach how modern markets actually work and how quantitative strategies are built through hands-on workshops, project collaborations, and speaker-led sessions.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mb-6">
                        Our membership is open to all Texas State University students with an interest in quantitative methods and finance.
                        We hold weekly meetings featuring workshops, guest speakers, and collaborative projects.
                    </p>
                    <p className="text-lg text-gray-700">
                        Through our activities, members gain practical experience, build professional networks, and develop skills
                        that prepare them for careers in quantitative finance and related fields.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default About;