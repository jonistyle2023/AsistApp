import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import api from '../api/axiosConfig';

const DashboardLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await api.get('/auth/profile/');
                setUserName(response.data.username);
            } catch (error) {
                console.error("No se pudo obtener el perfil del usuario", error);
            }
        };
        fetchUserProfile();
    }, []);

    return (
        <div className="relative min-h-screen md:flex bg-gray-100 font-sans">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header setSidebarOpen={setSidebarOpen} userName={userName} />
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;