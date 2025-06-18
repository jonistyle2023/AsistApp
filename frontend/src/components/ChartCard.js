import React from 'react';

const ChartCard = ({ title, children }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <div className="mt-4">
                {children}
            </div>
        </div>
    );
}

export default ChartCard;