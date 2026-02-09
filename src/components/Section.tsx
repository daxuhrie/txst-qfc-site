import React from 'react'

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`py-8 sm:py-12 md:py-16 lg:py-20 ${className}`}>
            {children}
        </section>
    )
}

export default Section
