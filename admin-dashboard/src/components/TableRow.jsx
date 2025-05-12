import React from 'react';

const TableRow = ({ order }) => {
    return (
        <tr className="border-b hover:bg-gray-100">
            <td className="py-4 px-6">{order.category}</td>
            <td className="py-4 px-6">
                {order.verification ? (
                    <span className="text-green-500">Verified</span>
                ) : (
                    <span className="text-red-500">Pending</span>
                )}
            </td>
            <td className="py-4 px-6">{order.pending}</td>
            <td className="py-4 px-6">{order.dispatched}</td>
            <td className="py-4 px-6">
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            Actions
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div className="py-1" role="none">
                            <a
                                href="#"
                                className="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                            >
                                Dispatch
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem"
                            >
                                Send Tracking Email
                            </a>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default TableRow;