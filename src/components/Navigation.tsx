'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/join', label: 'Join' },
    { href: '/events', label: 'Events' },
    { href: '/resources', label: 'Resources' },
    { href: '/projects', label: 'Research & Projects' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/governance', label: 'Governance' },
    { href: '/contact', label: 'Contact' },
]

const toolsLinks = [
    { href: '/tools/options', label: 'Options Greeks Dashboard' },
]

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const [toolsOpen, setToolsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-40 bg-[#111111]/96 border-b border-[#222222]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 md:h-24 items-center">
                    <Link href="/" className="flex items-center gap-3 text-white font-semibold leading-tight">
                        <div className="h-14 w-14 md:h-16 md:w-16 overflow-hidden rounded-lg border border-[#222222] bg-[#1a1a1a] flex items-center justify-center">
                            <Image
                                src="/qfc-logo.jpg"
                                alt="Quant Finance Collective"
                                width={64}
                                height={64}
                                className="h-full w-full object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="inline sm:hidden text-base text-white">QFC at TXST</span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="nav-link text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Tools dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setToolsOpen(true)}
                            onMouseLeave={() => setToolsOpen(false)}
                        >
                            <button
                                className="nav-link text-sm font-medium flex items-center gap-1"
                                aria-expanded={toolsOpen}
                                aria-haspopup="true"
                            >
                                Tools
                                <ChevronDown
                                    className={`h-3.5 w-3.5 transition-transform duration-150 ${toolsOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {toolsOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg shadow-xl py-1 z-50">
                                    {toolsLinks.map(link => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="block px-4 py-2.5 text-sm text-[#ddd] hover:bg-[#222] hover:text-white transition-colors no-underline"
                                            onClick={() => setToolsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            aria-label="Toggle navigation menu"
                            className="p-2 rounded-md text-white hover:text-[rgb(var(--accent-rgb))] min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="lg:hidden bg-[#111111] border-t border-[#222222]">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block py-2 font-medium nav-link"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2 border-t border-[#222]">
                            <p className="text-xs text-[#555] font-semibold tracking-wider uppercase mb-2 pt-1">Tools</p>
                            {toolsLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block py-2 font-medium nav-link"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
