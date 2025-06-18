import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const Header = ({ userName }) => {
    const today = new Date();
    const dateString = today.toLocaleDateString('es-ES', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <header className="flex items-center justify-between p-6 bg-white border-b">
            <div>
                <h2 className="text-2xl font-semibold text-gray-800">Bienvenido "{userName}"</h2>
                <p className="text-gray-600">Hay tareas que hacer y asistencias que tomar</p>
            </div>
            <div className="flex items-center">
                <div className="flex items-center px-4 py-2 bg-gray-100 rounded-md">
                    <FiCalendar className="text-gray-600" />
                    <span className="ml-2 text-sm font-medium text-gray-700">{dateString}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;