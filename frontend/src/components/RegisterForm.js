import React, { useState } from 'react';
import api from '../api/axiosConfig';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const RegisterForm = ({ onSuccess }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== password2) {
            setError('Las contraseñas no coinciden.');
            return;
        }
        try {
            await api.post('/auth/register/', { username, email, password, password2 });
            onSuccess(); // Llama a la función del padre en caso de éxito
        } catch (err) {
            setError('Error en el registro. El email o usuario puede que ya exista.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold mb-6 text-center">Crear una Cuenta</h3>
            {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">{error}</p>}
            <div className="mb-4"> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reg-username">Nombre de Usuario</label> <input id="reg-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-3 border rounded-md" required /> </div>
            <div className="mb-4"> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reg-email">Email</label> <input id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-md" required /> </div>
            <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reg-password">Contraseña</label>
                <input id="reg-password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border rounded-md pr-10" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-gray-600"> {showPassword ? <FiEyeOff /> : <FiEye />} </button>
            </div>
            <div className="mb-6 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reg-password2">Confirmar Contraseña</label>
                <input id="reg-password2" type={showPassword2 ? "text" : "password"} value={password2} onChange={(e) => setPassword2(e.target.value)} className="w-full p-3 border rounded-md pr-10" required />
                <button type="button" onClick={() => setShowPassword2(!showPassword2)} className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-gray-600"> {showPassword2 ? <FiEyeOff /> : <FiEye />} </button>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 font-bold">Registrarse</button>
        </form>
    );
};

export default RegisterForm;