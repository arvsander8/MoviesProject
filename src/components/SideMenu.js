import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/genres">Genres</Link>
                    </li>
                    <li>
                        <Link to="/genrescont">Genres Content</Link>
                    </li>

                    <li>
                        <Link to="/counter">Ejemlo de Contador</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideMenu;