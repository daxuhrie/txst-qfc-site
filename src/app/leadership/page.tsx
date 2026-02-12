"use client";

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import { Linkedin, Mail, ChevronLeft, ChevronRight, X } from 'lucide-react'

const leaders = [
    {
        name: 'Colin Whetstone',
        role: 'Co-Founder | President | Quantitative Trading',
        bio: "Colin is a Junior majoring in Economics with a minor in Applied Math. In his free time he enjoys playing Chess and Reading.",
        linkedin: 'https://www.linkedin.com/in/colin-whetstone/',
        photo: '/colin-headshot.jpeg',
    },
    {
        name: 'Dax Uhrie',
        role: 'Co-Founder | Vice President | Quantitative Research',
        bio: 'Senior majoring in Finance. He completed a Summer 2025 Data & AI internship at PepsiCo and will return full-time in Summer 2026. His interests center on volatility, probability theory, market structure, and applying quantitative reasoning to financial decision-making.',
        linkedin: 'https://www.linkedin.com/in/daxuhrie/',
        photo: '/dax-headshot.jpg',
    },
    {
        name: 'Leadership Team',
        role: 'Officers & Contributors',
        bio: 'Facilitate workshops, maintain simulations, and mentor members on projects and interview prep.',
        linkedin: '',
        photo: '/qfc-logo.jpg',
    },
]

function LeaderModal({ leaders, index, onClose, onPrev, onNext }: { leaders: any[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
    const leader = leaders[index]
    const closeRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            } else if (e.key === 'ArrowLeft') {
                onPrev()
            } else if (e.key === 'ArrowRight') {
                onNext()
            }
        }
        document.addEventListener('keydown', onKey)
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        // focus the close button for accessibility
        setTimeout(() => closeRef.current?.focus(), 0)
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prevOverflow
        }
    }, [onClose, onPrev, onNext])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/70" onClick={onClose} />
            <div className="relative max-w-3xl w-full bg-black text-white rounded-md overflow-hidden shadow-xl">
                <button ref={closeRef} onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-20 p-2 rounded-full text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-stretch gap-6 p-8">
                    <div className="w-1/2 flex items-center justify-center">
                        <div className="relative w-full max-w-xs aspect-[4/5]">
                            <Image
                                src={leader.photo}
                                alt={leader.name}
                                fill
                                className="object-contain rounded-md"
                                sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 70vw"
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-1/2 flex flex-col h-full">
                        <h2 className="text-2xl font-semibold">{leader.name}</h2>
                        <p className="text-sm text-primary-700 mt-1">{leader.role}</p>
                        {(leader.major || leader.interest) && (
                            <p className="text-sm text-slate-300 mt-2">{leader.major || leader.interest}</p>
                        )}

                        <p className="mt-4 text-sm text-slate-300">{leader.bio}</p>

                        <div className="mt-6">
                            {leader.linkedin && (
                                <a href={leader.linkedin} target="_blank" rel="noreferrer" aria-label={`${leader.name} LinkedIn`} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-primary-700">
                                    <Linkedin className="w-5 h-5" /> LinkedIn
                                </a>
                            )}

                            {leader.email && (
                                <a href={`mailto:${leader.email}`} aria-label={`Email ${leader.name}`} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-primary-700">
                                    <Mail className="w-5 h-5" /> Email
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Navigation anchored to the modal card: bottom-right corner of the card */}
                <div className="absolute right-6 bottom-6 z-30 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                        <button onClick={onPrev} aria-label="Previous" className="p-3 rounded-full bg-white/5 hover:bg-white/10">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={onNext} aria-label="Next" className="p-3 rounded-full bg-white/5 hover:bg-white/10">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        {leaders.map((_, i) => (
                            <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function LeaderCard({ leader, index, onOpen }: { leader: any; index: number; onOpen: (i: number) => void }) {
    const snippet = leader.bio && leader.bio.length > 160 ? leader.bio.slice(0, 160) + '…' : leader.bio

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen(index)
        }
    }

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => onOpen(index)}
            onKeyDown={handleKeyDown}
            className="card overflow-hidden bg-gradient-to-b from-slate-900/80 to-slate-950/90 flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
        >
            <div className="relative w-full aspect-[4/5] bg-slate-900 overflow-hidden">
                <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 320px, 90vw"
                />
            </div>

            <div className="p-5 text-white flex flex-col flex-1">
                <div className="flex-1">
                    <h2 className="text-lg font-semibold text-white">{leader.name}</h2>
                    <p className="text-sm text-primary-700 font-medium">{leader.role}</p>
                    {(leader.major || leader.interest) && (
                        <p className="text-sm text-slate-300 mt-1">{leader.major || leader.interest}</p>
                    )}

                    {/* description hidden on card; visible in modal only */}
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {leader.linkedin && (
                            <a href={leader.linkedin} target="_blank" rel="noreferrer" aria-label={`${leader.name} LinkedIn`} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-primary-700" onClick={(e) => e.stopPropagation()}>
                                <Linkedin className="w-4 h-4" />
                            </a>
                        )}
                        {leader.email && (
                            <a href={`mailto:${leader.email}`} aria-label={`Email ${leader.name}`} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-primary-700" onClick={(e) => e.stopPropagation()}>
                                <Mail className="w-4 h-4" />
                            </a>
                        )}
                    </div>

                    {leader.bio && leader.bio.length > 160 && leader.name !== 'Dax Uhrie' && (
                        <span className="text-sm text-[rgb(var(--accent-rgb))]">Read more</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function LeadershipPage() {
    const [modalIndex, setModalIndex] = useState<number | null>(null)

    const openModal = (index: number) => setModalIndex(index)
    const closeModal = () => setModalIndex(null)
    const prev = () => setModalIndex((i) => (i === null ? null : (i - 1 + leaders.length) % leaders.length))
    const next = () => setModalIndex((i) => (i === null ? null : (i + 1) % leaders.length))

    return (
        <div className="min-h-screen bg-gray-50">
            <Container className="py-12 md:py-16">
                <div className="space-y-3 mb-8">
                    <p className="text-xs uppercase tracking-[0.08em] text-slate-500">Leadership</p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Meet the Founders</h1>
                    <p className="text-lg text-slate-700 max-w-3xl">Students building the foundation of quantitative finance education and research at Texas State.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {leaders.map((leader, i) => (
                        <LeaderCard key={leader.name} leader={leader} index={i} onOpen={openModal} />
                    ))}
                </div>

                {modalIndex !== null && (
                    <LeaderModal
                        leaders={leaders}
                        index={modalIndex}
                        onClose={closeModal}
                        onPrev={prev}
                        onNext={next}
                    />
                )}
            </Container>
        </div>
    )
}