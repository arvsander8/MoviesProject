import { render, screen, waitFor } from '@testing-library/react';
import GenresPage from './GenresPage';

// Mock global fetch
global.fetch = jest.fn();

describe('GenresPage Component', () => {

    beforeEach(() => {
        fetch.mockClear();
    });

    test('shows loading state', async () => {
        fetch.mockImplementationOnce(() => 
            new Promise((resolve) => setTimeout(() => resolve({ json: () => Promise.resolve([]) }), 100))
        );
        render(<GenresPage />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('loads and displays genres', async () => {
        const genres = [{ id: 1, genre: 'Comedy' }, { id: 2, genre: 'Drama' }];
        fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(genres),
        });

        render(<GenresPage />);
        await waitFor(() => expect(screen.getByText(/Comedy/i)).toBeInTheDocument());
        expect(screen.getByText(/Drama/i)).toBeInTheDocument();
    });

    test('displays error message on fetch failure', async () => {
        fetch.mockRejectedValueOnce(new Error('Network response was not ok'));

        render(<GenresPage />);
        await waitFor(() => expect(screen.getByText(/Error:/i)).toBeInTheDocument());
    });
});

describe('GenresPage Component without Mocks', () => {

    test('loads and displays genres', async () => {
        render(<GenresPage />);
        await waitFor(() => {
            expect(screen.getByText(/Comedy/i)).toBeInTheDocument();
        }, { timeout: 4000 }); // Espera hasta 5000 milisegundos (5 segundos)
    });

    // Otros tests similares pueden seguir aquí...
}); 
