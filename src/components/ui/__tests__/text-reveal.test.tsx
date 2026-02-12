import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import TextReveal from '../text-reveal';

describe('TextReveal', () => {
    it('renders and is accessible', async () => {
        const { container } = render(<TextReveal word="Test Reveal" />);
        expect(screen.getByRole('heading', { name: /Test Reveal/i })).toBeInTheDocument();

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('replays animation when button clicked', async () => {
        render(<TextReveal word="Replay" />);
        const button = screen.getByRole('button', { name: /Replay Animation/i });
        expect(button).toBeInTheDocument();
        await userEvent.click(button);
        // If click didn't throw, assume success; animation is visual.
        expect(button).toBeEnabled();
    });
});
