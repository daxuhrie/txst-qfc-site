import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import ProjectCard from '../ProjectCard'
import Hero from '../Hero'
import About from '../About'
import FeaturedProjects from '../FeaturedProjects'

test('ProjectCard is accessible', async () => {
    const { container } = render(
        <ProjectCard
            title="Test"
            description="desc"
            ownerName="Jane"
            externalUrl="https://example.com"
            tags={["tag"]}
            status="Active"
        />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})

test('Hero is accessible', async () => {
    const { container } = render(<Hero />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})

test('Main site sections are accessible', async () => {
    const { container } = render(
        <div>
            <Hero />
            <About />
            <FeaturedProjects count={1} />
        </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
})
