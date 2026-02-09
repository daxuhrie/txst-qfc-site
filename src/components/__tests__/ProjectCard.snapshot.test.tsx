import React from 'react'
import { render } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

const sample = {
    title: 'Test Project',
    description: 'Short description',
    ownerName: 'Jane Doe',
    externalUrl: 'https://example.com',
    tags: ['Test'],
    status: 'Active' as const,
}

describe('ProjectCard snapshots (responsive widths)', () => {
    const sizes = [320, 768, 1200]

    sizes.forEach((w) => {
        test(`renders correctly at ${w}px`, () => {
            const { container } = render(
                <div style={{ width: w }}>
                    <ProjectCard {...sample} />
                </div>
            )
            expect(container.firstChild).toMatchSnapshot()
        })
    })
})
