import React from 'react';
// Asegúrate de tener react-icons instalado: npm install react-icons
import {
    FiGrid, FiCheckSquare, FiCamera, FiUsers, FiEdit, FiFileText, FiHardDrive, FiUpload, FiSettings,
    FiClock, FiMapPin, FiUser, FiLock, FiLogOut
} from 'react-icons/fi'; // <-- CORREGIDO: FiQrCode cambiado por FiCamera

const Sidebar = () => {
    // Helper para crear los links y evitar repetir código
    const NavLink = ({ icon, children, active = false }) => (
        <a href="#" className={`flex items-center px-4 py-2 mt-2 text-gray-700 rounded-md ${active ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
            {icon}
            <span className="ml-3">{children}</span>
        </a>
    );

    const NavSection = ({ title, children }) => (
        <div className="mt-6">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
            {children}
        </div>
    );

    return (
        <aside className="w-64 flex-shrink-0 bg-white border-r overflow-y-auto">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-800">AssitsApp</h1>
            </div>
            <nav className="px-4">
                <NavSection title="General">
                    <NavLink icon={<FiGrid size={18}/>}>Mis Cursos</NavLink>
                    <NavLink icon={<FiCheckSquare size={18}/>} active={true}>Clases</NavLink>
                    {/* CORREGIDO: Usando FiCamera como reemplazo */}
                    <NavLink icon={<FiCamera size={18}/>}>Código QR</NavLink>
                    <NavLink icon={<FiUsers size={18}/>}>Estudiantes</NavLink>
                </NavSection>

                <NavSection title="Herramientas">
                    <NavLink icon={<FiEdit size={18}/>}>Agregar o editar</NavLink>
                    <NavLink icon={<FiUpload size={18}/>}>Subir archivo</NavLink>
                    <NavLink icon={<FiFileText size={18}/>}>Justificaciones</NavLink>
                    <NavLink icon={<FiHardDrive size={18}/>}>Dispositivos</NavLink>
                </NavSection>

                <NavSection title="Adicional">
                    <NavLink icon={<FiSettings size={18}/>}>Configuración</NavLink>
                    <NavLink icon={<FiUser size={18}/>}>Personal</NavLink>
                    <NavLink icon={<FiLock size={18}/>}>Contraseña</NavLink>
                </NavSection>

                <div className="mt-8">
                    <NavLink icon={<FiLogOut size={18}/>}>Cerrar Sesión</NavLink>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;