import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '../Navigation'

test('renders navigation links and brand', () => {
    render(<Navigation />)
    const brands = screen.getAllByText(/Quant Finance Collective/i)
    expect(brands.length).toBeGreaterThan(0)
    expect(screen.getByText(/Projects/)).toBeInTheDocument()
    expect(screen.getByLabelText(/toggle navigation menu/i)).toBeInTheDocument()
})
