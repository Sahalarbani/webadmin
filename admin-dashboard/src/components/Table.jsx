import React from 'react';
import TableRow from './TableRow';

const Table = ({ orders }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="w-full bg-blue-500 text-white">
                        <th className="py-2 px-4">Category</th>
                        <th className="py-2 px-4">Verification</th>
                        <th className="py-2 px-4">Pending</th>
                        <th className="py-2 px-4">Dispatched</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <TableRow key={index} order={order} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;