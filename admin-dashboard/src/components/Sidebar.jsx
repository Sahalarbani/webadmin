import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, DocumentTextIcon, UsersIcon, ShoppingCartIcon, TruckIcon, CubeIcon } from '@heroicons/react/outline';

const Sidebar = () => {
    return (
        <div className="flex flex-col w-64 h-screen bg-blue-600 text-white">
            <div className="flex items-center justify-center h-16 text-2xl font-bold">
                Admin Dashboard
            </div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    <li>
                        <Link to="/dashboard" className="flex items-center p-4 hover:bg-blue-700">
                            <HomeIcon className="w-5 h-5 mr-3" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/content" className="flex items-center p-4 hover:bg-blue-700">
                            <DocumentTextIcon className="w-5 h-5 mr-3" />
                            Content
                        </Link>
                    </li>
                    <li>
                        <Link to="/customers" className="flex items-center p-4 hover:bg-blue-700">
                            <UsersIcon className="w-5 h-5 mr-3" />
                            Customers
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders" className="flex items-center p-4 hover:bg-blue-700">
                            <ShoppingCartIcon className="w-5 h-5 mr-3" />
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/shipping" className="flex items-center p-4 hover:bg-blue-700">
                            <TruckIcon className="w-5 h-5 mr-3" />
                            Shipping
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="flex items-center p-4 hover:bg-blue-700">
                            <CubeIcon className="w-5 h-5 mr-3" />
                            Product
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;