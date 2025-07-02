import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {
    FiCheckSquare, FiCamera, FiUsers, FiEdit, FiUpload, FiSettings,
    FiUser, FiLock, FiLogOut, FiX
} from 'react-icons/fi';

const Sidebar = ({isSidebarOpen, setSidebarOpen}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/');
    };

    const NavLink = ({icon, children, to, onClick}) => {
        const isActive = location.pathname === to;
        return (
            <Link to={to} onClick={onClick || (() => setSidebarOpen(false))}
                  className={`flex items-center px-4 py-2 mt-2 text-gray-700 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
                {icon}
                <span className="ml-3">{children}</span>
            </Link>
        );
    }
    // ... resto del componente ...
    const NavSection = ({title, children}) => (<div className="mt-6"><h3
        className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</h3> {children} </div>);
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}></div>
            <aside
                className={`fixed top-0 left-0 w-64 h-full bg-white border-r z-30 transform transition-transform md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center p-4 border-b"><h1
                    className="text-2xl font-bold text-gray-800">AssitsApp</h1>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden"><FiX size={24}
                                                                                             className="text-gray-600"/>
                    </button>
                </div>
                <nav className="px-4 pb-4 overflow-y-auto h-full">
                    <NavSection title="General">
                        <NavLink to="/dashboard" icon={<FiCheckSquare size={18}/>}>Clases</NavLink>
                        <NavLink to="/dashboard/qr-generator" icon={<FiCamera size={18}/>}>Código QR</NavLink>
                        <NavLink to="/dashboard/students" icon={<FiUsers size={18}/>}>Estudiantes</NavLink>
                    </NavSection>
                    <NavSection title="Herramientas">
                        <NavLink to="/dashboard/edit" icon={<FiEdit size={18}/>}>Agregar o editar</NavLink>
                        <NavLink to="/dashboard/upload" icon={<FiUpload size={18}/>}>Subir archivo</NavLink>
                    </NavSection>
                    <NavSection title="Adicional">
                        <NavLink to="/dashboard/settings" icon={<FiSettings size={18}/>}>Configuración</NavLink>
                        <NavLink to="/dashboard/profile" icon={<FiUser size={18}/>}>Personal</NavLink>
                    </NavSection>
                    <div className="mt-8">
                        <NavLink to="/" icon={<FiLogOut size={18}/>} onClick={handleLogout}>Cerrar Sesión</NavLink>
                    </div>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;