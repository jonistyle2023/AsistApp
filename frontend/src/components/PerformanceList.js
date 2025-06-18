import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const PerformanceList = () => {
    const courses = [
        { name: 'Petróleos 3/1', performance: 13.26, students: 32 },
        { name: 'Civil 2/1', performance: 40.96, students: 41 },
        { name: 'Civil 5/1', performance: 1.64, students: 28 },
        { name: 'Industrial 6/1', performance: 75.38, students: 36 },
        { name: 'Petróleos 8/1', performance: 15.18, students: 15 },
        { name: 'Industrial 1/1', performance: 41.65, students: 40 },
    ];

    const ListItem = ({ course }) => (
        <li className="flex items-center justify-between py-3">
            <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-full">
                    <FiBookOpen className="text-blue-500" />
                </div>
                <span className="ml-4 font-medium text-gray-800">{course.name}</span>
            </div>
            <div className="text-right">
                <p className="font-semibold text-gray-800">{course.performance}%</p>
                <p className="text-xs text-gray-500">{course.students} estudiantes</p>
            </div>
        </li>
    );

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Desempeño por Curso</h3>
            <ul>
                {courses.map((course, index) => (
                    <ListItem key={index} course={course} />
                ))}
            </ul>
        </div>
    );
};

export default PerformanceList;