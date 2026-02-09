import React from 'react'
import Link from 'next/link'
import FeaturedProjects from './FeaturedProjects'
import Container from './Container'

const LandingHighlights: React.FC = () => {
    return (
        <section className="py-8 md:py-12 bg-gray-50">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
                    <div className="lg:col-span-2">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Highlights</h2>
                        <p className="text-gray-600 mb-6">Quick access to projects, upcoming events, and ways to get involved.</p>
                        <FeaturedProjects count={2} />
                    </div>

                    <aside className="bg-white p-4 md:p-8 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Event</h3>
                        <p className="text-gray-700 mb-4">Portfolio Optimization Workshop — Feb 21, 2024 • 6:00 PM</p>
                        <Link href="/events" className="text-primary-600 hover:underline font-medium">See All Events</Link>

                        <hr className="my-6" />

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Involved</h3>
                        <p className="text-gray-700 mb-4">Weekly meetings, workshops, and project collaboration opportunities.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/about" className="px-4 py-2 min-h-[44px] bg-primary-600 text-white rounded-md hover:bg-primary-700">About</Link>
                            <Link href="/projects" className="px-4 py-2 min-h-[44px] border border-primary-700 text-primary-700 rounded-md hover:bg-primary-50">Projects</Link>
                        </div>
                    </aside>
                </div>
            </Container>
        </section>
    )
}

export default LandingHighlights
