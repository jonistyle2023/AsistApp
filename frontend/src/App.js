import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KpiCard from './components/KpiCard';
import ChartCard from './components/ChartCard';
import StudentTable from './components/StudentTable';
import PerformanceList from './components/PerformanceList';

// Importa los íconos que usaremos (una forma sencilla es usar una librería como react-icons)
// Para instalarla: npm install react-icons
import { FiTrendingUp, FiTrendingDown, FiUser, FiBarChart2, FiPieChart, FiSettings } from 'react-icons/fi';


function App() {
    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Barra Lateral */}
            <Sidebar />

            {/* Contenido Principal */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Cabecera */}
                <Header userName="Iván" />

                {/* Contenido Desplazable */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <div className="container mx-auto px-6 py-8">
                        {/* Sección de Tarjetas de KPI */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <KpiCard title="Asistencia" value="10,145" change={1.50} changeType="increase" icon={<FiTrendingUp className="text-green-500" />} />
                            <KpiCard title="Atraso" value="10,145" change={2.71} changeType="decrease" icon={<FiTrendingDown className="text-red-500" />} />
                            <KpiCard title="Falla" value="10,145" change={0.32} changeType="increase" icon={<FiUser className="text-yellow-500" />} />
                            <KpiCard title="Justificación" value="10,145" change={0.18} changeType="decrease" icon={<FiTrendingDown className="text-red-500" />} />
                        </div>

                        {/* Sección de Gráficos */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                            {/* Gráfico de Asistencia / Faltas */}
                            <div className="lg:col-span-2">
                                <ChartCard title="Asistencia / Faltas">
                                    {/* Aquí iría el componente del gráfico de barras */}
                                    <div className="h-64 flex items-center justify-center text-gray-400">
                                        <FiBarChart2 size={50} /> <span className="ml-2">Placeholder Gráfico de Barras</span>
                                    </div>
                                </ChartCard>
                            </div>

                            {/* Gráfico Circular de Asistencia */}
                            <ChartCard title="PETRÓLEOS 3/1">
                                <div className="h-64 flex flex-col items-center justify-center text-gray-400">
                                    <FiPieChart size={50} />
                                    <span className="mt-2">Placeholder Gráfico Circular</span>
                                    <p className="font-bold text-2xl text-gray-800 mt-2">4,145</p>
                                    <p className="text-sm text-gray-500">Total</p>
                                </div>
                            </ChartCard>
                        </div>

                        {/* Sección de Tablas y Listas */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                            <div className="lg:col-span-2">
                                <StudentTable />
                            </div>
                            <div>
                                <PerformanceList />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;