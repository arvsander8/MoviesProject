// src/components/Header.js

import React from 'react';

const Header = ({ isLoggedIn, onLoginToggle, onLogout }) => {
    return (
        <header className="bg-gray-800 p-4 flex justify-between items-center">
            <h1 className="text-white text-xl">Go Watch a Movie!</h1>
            {isLoggedIn ? (
                // Lógica para cuando el usuario está logueado
                <button
                    className="px-4 py-2 rounded font-bold text-white bg-green-500 hover:bg-green-700 transition-colors"
                    onClick={onLogout}
                >
                    Logout
                </button>
            ) : (
                <button
                    className="bg-blue-500 ..."
                    onClick={onLoginToggle}
                >
                    Login
                </button>
            )}
        </header>
    );
};

export default Header;
