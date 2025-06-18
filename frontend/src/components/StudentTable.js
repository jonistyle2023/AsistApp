import React from 'react';
import { FiSearch } from 'react-icons/fi';

const StudentTable = () => {
    // Datos de ejemplo
    const students = [
        { name: 'Iván Andrés Panchana Rodríguez', asistencias: 54, faltas: 2, atrasos: 11, justificaciones: 0 },
        { name: 'Claudia María Ordoñez Tormalá', asistencias: 50, faltas: 5, atrasos: 2, justificaciones: 1 },
        { name: 'Juan José Pérez García', asistencias: 55, faltas: 1, atrasos: 1, justificaciones: 0 },
        { name: 'Ana Sofía Castillo Vera', asistencias: 48, faltas: 4, atrasos: 5, justificaciones: 2 },
    ];

    const TableRow = ({ student }) => (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                        {student.name.substring(0, 1)}
                    </div>
                    <span className="ml-3 font-medium text-gray-800">{student.name}</span>
                </div>
            </td>
            <td className="p-4 text-center text-gray-600">{student.asistencias}</td>
            <td className="p-4 text-center text-gray-600">{student.faltas}</td>
            <td className="p-4 text-center text-gray-600">{student.atrasos}</td>
            <td className="p-4 text-center text-gray-600">{student.justificaciones}</td>
        </tr>
    )

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Industrial 6/1</h3>
                <div className="relative">
                    <input type="text" placeholder="Search Here" className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                    <tr>
                        <th className="p-4">Estudiantes</th>
                        <th className="p-4 text-center">Asistencias</th>
                        <th className="p-4 text-center">Faltas</th>
                        <th className="p-4 text-center">Atrasos</th>
                        <th className="p-4 text-center">Justificadas</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student, index) => (
                        <TableRow key={index} student={student} />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentTable;