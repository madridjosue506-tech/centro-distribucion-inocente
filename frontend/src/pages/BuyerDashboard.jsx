import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';

const DashboardContent = () => (
    <div className="dashboard-grid">
        <div className="dashboard-card">
            <h3>Stock Bajo</h3>
            <p>Lista de productos con bajo inventario.</p>
        </div>
        <div className="dashboard-card">
            <h3>Próximas Órdenes</h3>
            <p>Calendario de entregas.</p>
        </div>
        <div className="dashboard-card">
            <h3>Últimas Órdenes</h3>
            <p>Historial de pedidos recientes.</p>
        </div>
        <div className="dashboard-card">
            <h3>Notificaciones</h3>
            <p>Mensajes importantes.</p>
        </div>
    </div>
);

const InventoryPage = () => <div><h2>Inventario</h2><p>Aquí se gestionará el inventario.</p></div>;
const SuppliersPage = () => <div><h2>Proveedores</h2><p>Aquí se gestionarán los proveedores.</p></div>;
const OrdersPage = () => <div><h2>Órdenes</h2><p>Aquí se crearán y verán las órdenes.</p></div>;
const SettingsPage = () => <div><h2>Configuración</h2><p>Opciones de la cuenta.</p></div>;

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