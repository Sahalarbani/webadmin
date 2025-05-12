import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Table from '../components/Table';
import Calendar from '../components/Calendar';
import NotificationBadge from '../components/NotificationBadge';
import dummyData from '../data/dummyData.json';
import useAutoRefresh from '../hooks/useAutoRefresh';

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalPending, setTotalPending] = useState(0);
    const [totalDispatched, setTotalDispatched] = useState(0);

    useEffect(() => {
        // Simulate fetching data
        const fetchData = () => {
            setOrders(dummyData.orders);
            setTotalOrders(dummyData.totalOrders);
            setTotalPending(dummyData.totalPending);
            setTotalDispatched(dummyData.totalDispatched);
        };

        fetchData();
    }, []);

    useAutoRefresh(fetchData, 60000); // Refresh every 60 seconds

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card title="Total Orders" value={totalOrders} />
                    <Card 
                        title="Total Pending Orders" 
                        value={totalPending} 
                        progress={totalPending / totalOrders * 100} 
                    />
                    <Card 
                        title="Total Dispatched" 
                        value={totalDispatched} 
                        progress={totalDispatched / totalOrders * 100} 
                    />
                </div>
                <Table orders={orders} />
                <div className="flex mt-6">
                    <Calendar />
                    <div className="ml-4">
                        <NotificationBadge count={totalPending} />
                        <p className="mt-2">Yearly details are available</p>
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex items-center">
                    <img src="/path/to/profile.jpg" alt="Admin" className="w-10 h-10 rounded-full" />
                    <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;