import React from 'react';

const KpiCard = ({ title, value, change, changeType, icon }) => {
    const isIncrease = changeType === 'increase';
    const changeColor = isIncrease ? 'text-green-500' : 'text-red-500';
    const changeIcon = isIncrease ? '↑' : '↓';

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-start justify-between">
            <div>
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
                <div className={`flex items-center mt-2 text-sm ${changeColor}`}>
                    <span>{changeIcon}</span>
                    <span className="ml-1">{change}%</span>
                    <span className="text-gray-500 ml-2">Semanal</span>
                </div>
            </div>
            <div className="text-4xl text-gray-300">
                {icon}
            </div>
        </div>
    );
}

export default KpiCard;