import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

const sample = {
    title: 'Test Project',
    description: 'Short description',
    ownerName: 'Jane Doe',
    externalUrl: 'https://example.com',
    tags: ['Test'],
    status: 'Active' as const,
}

test('renders project card with link and owner text', () => {
    render(<ProjectCard {...sample} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText(/independently developed/i)).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /visit project/i })
    expect(link).toHaveAttribute('href', 'https://example.com')
})
