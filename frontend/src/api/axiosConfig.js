import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api' // Base URL de tu API de Django
});

// Interceptor de peticiones
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access_token');
        if (token) {
            // Si el token existe, lo añadimos a la cabecera de Authorization
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Aquí se podría añadir un interceptor de respuestas para manejar la expiración de tokens (401 error)
// y usar el refresh_token para obtener uno nuevo. Por ahora, lo mantenemos simple.

export default api;