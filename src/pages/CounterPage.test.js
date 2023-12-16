import { render, screen, fireEvent } from '@testing-library/react';
import CounterPage from './CounterPage';

describe('CounterPage Component', () => {

    // Test 1: Verifica si el componente se renderiza correctamente
    test('should render the counter component', () => {
        render(<CounterPage />);
        expect(screen.getByText(/count/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /increment/i })).toBeInTheDocument();
    });

    // Test 2: Verifica si el contador inicia en 0
    test('should start the counter at 0', () => {
        render(<CounterPage />);
        expect(screen.getByText(/count 0/i)).toBeInTheDocument();
    });

    // Test 3: Verifica si el contador se incrementa al hacer clic en el botón
    test('should increment counter on button click', () => {
        render(<CounterPage />);
        fireEvent.click(screen.getByRole('button', { name: /increment/i }));
        expect(screen.getByText(/count 1/i)).toBeInTheDocument();
    });

});
