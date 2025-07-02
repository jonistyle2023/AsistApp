import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ClassesPage from './pages/ClassesPage';
import QrGeneratorPage from './pages/QrGeneratorPage';
import LandingPage from './pages/LandingPage';

const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
        return <Navigate to="/" replace/>;
    }
    return children;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>,
    },
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <DashboardLayout/>
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <ClassesPage/>,
            },
            {
                path: 'qr-generator', // Resuelve a /dashboard/qr-generator
                element: <QrGeneratorPage/>,
            },
            // Puedes añadir más rutas del dashboard aquí
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
