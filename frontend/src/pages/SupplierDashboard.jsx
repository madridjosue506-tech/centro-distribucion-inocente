import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import { Routes, Route } from 'react-router-dom';

// TODO: Reemplaza esta URL con la de tu backend en Render
const API_URL = 'https://cdi-backend-7wpg.onrender.com';

const DashboardContent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ejemplo de llamada a la API
        fetch(`${API_URL}/api/supplier-data`)
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al obtener datos del proveedor:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando datos...</p>;
    if (!data) return <p>No se pudieron cargar los datos del dashboard.</p>;

    return (
        <div className="dashboard-grid">
            <div className="dashboard-card">
                <h3>Órdenes Nuevas</h3>
                <p>Pedidos pendientes de revisión.</p>
                {/* Ejemplo de cómo usar los datos de la API */}
                {/* <ul>
                    {data.newOrders.map(order => <li key={order.id}>{order.name}</li>)}
                </ul> */}
            </div>
            <div className="dashboard-card">
                <h3>Próximas Entregas</h3>
                <p>Calendario de órdenes aceptadas.</p>
            </div>
            <div className="dashboard-card">
                <h3>Notificaciones</h3>
                <p>Mensajes y alertas.</p>
            </div>
        </div>
    );
};

const BuyersPage = () => <div><h2>Compradores</h2><p>Aquí se gestionarán los compradores.</p></div>;
const OrdersPage = () => <div><h2>Órdenes</h2><p>Aquí se verán y procesarán las órdenes.</p></div>;
const SettingsPage = () => <div><h2>Configuración</h2><p>Opciones de la cuenta.</p></div>;

const SupplierDashboard = () => {
    return (
        <div className="app-container">
            <Sidebar userRole="supplier" />
            <div className="content-area">
                <Routes>
                    <Route path="dashboard" element={<DashboardContent />} />
                    <Route path="buyers" element={<BuyersPage />} />
                    <Route path="orders" element={<OrdersPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="*" element={<DashboardContent />} />
                </Routes>
            </div>
        </div>
    );
};

export default SupplierDashboard;
