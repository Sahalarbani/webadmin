import React from 'react';

const Card = ({ title, value, percentage, progress }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <div className="text-2xl font-bold text-blue-600">{value}</div>
            {percentage !== undefined && (
                <div>
                    <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Progress: {percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;