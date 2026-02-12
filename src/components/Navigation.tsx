'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/join', label: 'Join' },
    { href: '/events', label: 'Events' },
    { href: '/resources', label: 'Resources' },
    { href: '/projects', label: 'Projects & Simulations' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/governance', label: 'Governance' },
    { href: '/contact', label: 'Contact' },
]

const Navigation = () => {
    const [open, setOpen] = useState(false)

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
                    </div>

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
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation