import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { HeroGeometric } from '../shape-landing-hero';

describe('HeroGeometric', () => {
    it('renders heading and badge and is accessible', async () => {
        const { container } = render(<HeroGeometric badge="Demo Badge" title1="Hello" title2="World" />);

        expect(screen.getByText(/Demo Badge/i)).toBeInTheDocument();
        expect(screen.getByText(/Hello/i)).toBeInTheDocument();

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
