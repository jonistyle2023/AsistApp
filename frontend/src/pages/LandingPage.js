import React, { useState, useEffect } from 'react';
import { FiLogIn, FiCheckCircle } from 'react-icons/fi';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import logo from '../assets/qr-logo.svg';

const LandingPage = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const handleRegisterSuccess = () => {
        setRegisterModalOpen(false);
        setNotification('¡Usuario creado correctamente! Ahora puedes iniciar sesión.');
    };

    return (
        <div className="bg-white text-gray-800 font-['Roboto'] min-h-screen flex flex-col">
            <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${notification ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <div className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 rounded-lg shadow-lg">
                    <FiCheckCircle className="mr-2" size={20}/>
                    <p>{notification}</p>
                </div>
            </div>

            <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
                <div className="flex items-center justify-center mb-6">
                    {/* CORRECCIÓN: Usar una etiqueta <img> con el logo importado. */}
                    <img src={logo} alt="AssistApp Logo" className="h-16 w-16 md:h-24 md:w-24 text-gray-700" />
                    <h1 className="animated-aurora text-6xl md:text-8xl font-bold ml-4">
                        AssistApp
                    </h1>
                </div>
                <button onClick={() => setLoginModalOpen(true)} className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-transform transform hover:scale-105">
                    <FiLogIn className="inline-block mr-2" />
                    Iniciar Sesión
                </button>
                <button onClick={() => setRegisterModalOpen(true)} className="mt-4 text-gray-600 hover:text-gray-900 font-medium transition-colors">
                    ¿No tienes una cuenta? Regístrate
                </button>
            </main>
            <footer className="w-full p-4 text-center text-gray-500 text-sm"> <p>2025 <b>©AssistApp</b>. Designed & Developed by <b>Cosmos_Space-x Industries</b></p> </footer>
            <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}> <LoginForm /> </Modal>
            <Modal isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)}> <RegisterForm onSuccess={handleRegisterSuccess} /> </Modal>
        </div>
    );
};

export default LandingPage;