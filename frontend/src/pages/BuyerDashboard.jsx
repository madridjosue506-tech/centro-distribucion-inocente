import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import { Routes, Route } from 'react-router-dom';

// TODO: Replace this URL with your live backend URL from Render
const API_URL = 'https://cdi-backend-7wpg.onrender.com';

const DashboardContent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Example API call to fetch data for the buyer dashboard
        fetch(`${API_URL}/api/buyer-data`)
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching buyer data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading data...</p>;
    if (!data) return <p>Could not load dashboard data.</p>;

    return (
        <div className="dashboard-grid">
            <div className="dashboard-card">
                <h3>Low Stock</h3>
                <p>List of products with low inventory.</p>
            </div>
            <div className="dashboard-card">
                <h3>Upcoming Orders</h3>
                <p>Delivery calendar.</p>
            </div>
            <div className="dashboard-card">
                <h3>Recent Orders</h3>
                <p>Recent order history.</p>
            </div>
            <div className="dashboard-card">
                <h3>Notifications</h3>
                <p>Important messages.</p>
            </div>
        </div>
    );
};

const InventoryPage = () => <div><h2>Inventory</h2><p>Inventory management goes here.</p></div>;
const SuppliersPage = () => <div><h2>Suppliers</h2><p>Supplier management goes here.</p></div>;
const OrdersPage = () => <div><h2>Orders</h2><p>Order creation and viewing goes here.</p></div>;
const SettingsPage = () => <div><h2>Settings</h2><p>Account options.</p></div>;

const BuyerDashboard = () => {
    return (
        <div className="app-container">
            <Sidebar userRole="buyer" />
            <div className="content-area">
                <Routes>
                    <Route path="dashboard" element={<DashboardContent />} />
                    <Route path="inventory" element={<InventoryPage />} />
                    <Route path="suppliers" element={<SuppliersPage />} />
                    <Route path="orders" element={<OrdersPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="*" element={<DashboardContent />} />
                </Routes>
            </div>
        </div>
    );
};

export default BuyerDashboard;
