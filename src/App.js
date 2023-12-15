import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import GenresPage from './pages/GenresPage';
import GenresContentPage from './pages/GenresContentPage';
import LoginPage from './pages/LoginPage';
import CounterPage from './pages/CounterPage';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginToggle = () => {
        setShowLogin(!showLogin);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'usuario', // Aquí debes obtener el nombre de usuario y la contraseña desde un formulario o un estado
                    password: 'contraseña',
                }),
            });
    
            if (!response.ok) {
                throw new Error('Login fallido');
            }
    
            const data = await response.json();
            localStorage.setItem('token', data.token); // Guarda el token en el almacenamiento local
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error en el login:', error);
            // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
        }
    };
    

    const handleLogout = () => {
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local
        setIsLoggedIn(false);
    };
    

    return (
        <div className="flex flex-col h-screen">
            <Header isLoggedIn={isLoggedIn}
                onLoginToggle={handleLoginToggle}
                onLogout={handleLogout} />
            <div className="flex flex-1">
                <SideMenu />
                <div className="flex-1 p-4">
                    {showLogin ? (
                        <LoginPage onLogin={handleLogin} /> // Reemplaza esto por tu formulario o componente de login
                    ) : (
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/movies" element={<MoviesPage />} />
                            <Route path="/genres" element={<GenresPage />} />
                            <Route path="/genrescont" element={<GenresContentPage />} />
                            <Route path="/counter" element={<CounterPage />} />
                        </Routes>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
