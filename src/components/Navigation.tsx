'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl md:text-2xl font-bold text-primary-700">
                            <span className="hidden sm:inline">Quant Finance Collective at Texas State University</span>
                            <span className="inline sm:hidden">Quant Finance Collective</span>
                        </Link>
                    </div>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/about" className="text-gray-700 hover:text-primary-700 transition-colors">
                            About
                        </Link>
                        <Link href="/projects" className="text-gray-700 hover:text-primary-700 transition-colors">
                            Projects
                        </Link>
                        <Link href="/events" className="text-gray-700 hover:text-primary-700 transition-colors">
                            Events
                        </Link>
                        <Link href="/resources" className="text-gray-700 hover:text-primary-700 transition-colors">
                            Resources
                        </Link>
                        <Link href="/team" className="text-gray-700 hover:text-primary-700 transition-colors">
                            Team
                        </Link>
                        <Link href="/governance" className="text-gray-700 hover:text-primary-700 transition-colors">
                            Governance
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            aria-label="Toggle navigation menu"
                            className="p-2 rounded-md text-gray-700 hover:text-primary-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <Link href="/about" className="block text-gray-700 py-2">About</Link>
                        <Link href="/projects" className="block text-gray-700 py-2">Projects</Link>
                        <Link href="/events" className="block text-gray-700 py-2">Events</Link>
                        <Link href="/resources" className="block text-gray-700 py-2">Resources</Link>
                        <Link href="/team" className="block text-gray-700 py-2">Team</Link>
                        <Link href="/governance" className="block text-gray-700 py-2">Governance</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation;