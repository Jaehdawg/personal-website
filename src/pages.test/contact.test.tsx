import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '@/pages/contact';

// Mock the fetch API
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({}),
    })
) as jest.Mock;

describe('Contact Page', () => {
    beforeEach(() => {
        (global.fetch as jest.Mock).mockClear();
    });

    it('renders the contact form', () => {
        render(<Contact />);

        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
    });

    it('submits the form with valid data', async () => {
        render(<Contact />);

        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello there!' } });

        fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

        expect(screen.getByRole('button', { name: /Sending.../i })).toBeInTheDocument();

        // Wait for the submission to complete (mocked)
        await screen.findByText(/Message sent successfully!/i);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('/api/submit', expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({
                name: 'John Doe',
                email: 'john@example.com',
                phone: '1234567890',
                message: 'Hello there!',
            }),
        }));
    });
});
