import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative min-h-screen md:flex bg-gray-100 font-sans">
            {/* El Sidebar ahora recibe el estado y la función para cambiarlo */}
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>

            <div className="flex-1 flex flex-col">
                {/* El Header recibe la función para poder abrir el menú desde el botón hamburguesa */}
                <Header setSidebarOpen={setSidebarOpen}/>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;