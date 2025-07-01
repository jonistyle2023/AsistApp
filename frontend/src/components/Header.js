import React from 'react';
import {FiCalendar, FiMenu} from 'react-icons/fi';

const Header = ({userName, setSidebarOpen}) => {
    const today = new Date();
    const dateString = today.toLocaleDateString('es-ES', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <header className="flex items-center justify-between p-4 bg-white border-b">
            <div className="flex items-center">
                {/* Botón de Menú para móvil - visible solo en pantallas < md */}
                <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none md:hidden">
                    <FiMenu size={24}/>
                </button>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">Bienvenido "{userName || 'Usuario'}"</h2>
                    <p className="text-sm text-gray-600">Hay tareas que hacer y asistencias que tomar</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center px-3 py-2 bg-gray-100 rounded-md">
                    <FiCalendar className="text-gray-600"/>
                    <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:block">{dateString}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;