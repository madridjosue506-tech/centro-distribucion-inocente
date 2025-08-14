import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';

const DashboardContent = () => (
    <div className="dashboard-grid">
        <div className="dashboard-card">
            <h3>Órdenes Nuevas</h3>
            <p>Pedidos pendientes de revisión.</p>
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