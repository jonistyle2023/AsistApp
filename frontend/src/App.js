import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ClassesPage from './pages/ClassesPage'; // <-- CAMBIO DE NOMBRE AQUÍ
import LoginPage from './pages/LoginPage';
import QrGeneratorPage from './pages/QrGeneratorPage';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage/>,
    },
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <ClassesPage/>, // <-- Y AQUÍ
            },
            {
                path: 'qr-generator',
                element: <QrGeneratorPage/>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;