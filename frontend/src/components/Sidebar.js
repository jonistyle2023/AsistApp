import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
    FiGrid, FiCheckSquare, FiCamera, FiUsers, FiEdit, FiFileText, FiHardDrive, FiUpload, FiSettings,
    FiUser, FiLock, FiLogOut, FiX
} from 'react-icons/fi';

const Sidebar = ({isSidebarOpen, setSidebarOpen}) => {
    const location = useLocation();

    const NavLink = ({icon, children, to}) => {
        const isActive = location.pathname === to;
        return (
            <Link to={to} onClick={() => setSidebarOpen(false)}
                  className={`flex items-center px-4 py-2 mt-2 text-gray-700 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
                {icon}
                <span className="ml-3">{children}</span>
            </Link>
        );
    }

    const NavSection = ({title, children}) => (
        <div className="mt-6">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
            {children}
        </div>
    );

    return (
        <>
            {/* Overlay para cerrar el menú en móvil */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity md:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            <aside
                className={`fixed top-0 left-0 w-64 h-full bg-white border-r z-30 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-2xl font-bold text-gray-800">AssitsApp</h1>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden">
                        <FiX size={24} className="text-gray-600"/>
                    </button>
                </div>
                <nav className="px-4 pb-4 overflow-y-auto h-full">
                    <NavSection title="General">
                        <NavLink to="/courses" icon={<FiGrid size={18}/>}>Mis Cursos</NavLink>
                        <NavLink to="/" icon={<FiCheckSquare size={18}/>}>Clases</NavLink>
                        <NavLink to="/qr-generator" icon={<FiCamera size={18}/>}>Código QR</NavLink>
                        <NavLink to="/students" icon={<FiUsers size={18}/>}>Estudiantes</NavLink>
                    </NavSection>
                    <NavSection title="Herramientas">
                        <NavLink to="/edit" icon={<FiEdit size={18}/>}>Agregar o editar</NavLink>
                        <NavLink to="/upload" icon={<FiUpload size={18}/>}>Subir archivo</NavLink>
                        <NavLink to="/justifications" icon={<FiFileText size={18}/>}>Justificaciones</NavLink>
                        <NavLink to="/devices" icon={<FiHardDrive size={18}/>}>Dispositivos</NavLink>
                    </NavSection>
                    <NavSection title="Adicional">
                        <NavLink to="/settings" icon={<FiSettings size={18}/>}>Configuración</NavLink>
                        <NavLink to="/profile" icon={<FiUser size={18}/>}>Personal</NavLink>
                        <NavLink to="/password" icon={<FiLock size={18}/>}>Contraseña</NavLink>
                    </NavSection>
                    <div className="mt-8">
                        <NavLink to="/login" icon={<FiLogOut size={18}/>}>Cerrar Sesión</NavLink>
                    </div>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;