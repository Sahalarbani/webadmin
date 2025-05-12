import React from 'react';

const Calendar = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Interactive Calendar</h2>
            <div className="grid grid-cols-7 gap-2">
                {/* Simulated calendar days */}
                {Array.from({ length: 42 }).map((_, index) => (
                    <div key={index} className="border p-2 text-center rounded-lg hover:bg-blue-100">
                        {index + 1}
                    </div>
                ))}
            </div>
            <p className="mt-4 text-gray-600">Yearly details are available.</p>
        </div>
    );
};

export default Calendar;