import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the header title', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    const headerTitle = screen.getByText(/Go Watch a Movie!/i);
    expect(headerTitle).toBeInTheDocument();
});
