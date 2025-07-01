import React from 'react';

const SectionCard = ({title, icon, children}) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <div className="flex items-center mb-4">
                <div className="text-gray-600">{icon}</div>
                <h3 className="text-lg font-bold text-gray-800 ml-2">{title}</h3>
            </div>
            {children}
        </div>
    );
};

export default SectionCard;