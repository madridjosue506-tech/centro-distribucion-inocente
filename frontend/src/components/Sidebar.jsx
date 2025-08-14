import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ userRole }) => {
    return (
        <div className="sidebar">
            <div className="logo-section">
                <img src="https://via.placeholder.com/50/FF6B35/FFFFFF?text=CDI" alt="CDI Logo" />
                <h2>CDI</h2>
            </div>
            <nav className="nav-menu">
                <NavLink to={`/${userRole}/dashboard`} className="nav-item">Inicio</NavLink>
                {userRole === 'buyer' && (
                    <>
                        <NavLink to="/buyer/inventory" className="nav-item">Inventario</NavLink>
                        <NavLink to="/buyer/suppliers" className="nav-item">Proveedores</NavLink>
                        <NavLink to="/buyer/orders" className="nav-item">Órdenes</NavLink>
                    </>
                )}
                {userRole === 'supplier' && (
                    <>
                        <NavLink to="/supplier/buyers" className="nav-item">Compradores</NavLink>
                        <NavLink to="/supplier/orders" className="nav-item">Órdenes</NavLink>
                    </>
                )}
                <NavLink to="/settings" className="nav-item">Configuración</NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;