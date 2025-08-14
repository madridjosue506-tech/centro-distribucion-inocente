import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="logo-container">
                <img src="https://via.placeholder.com/150/FF6B35/FFFFFF?text=CDI+Logo" alt="CDI Logo" />
            </div>
            <div className="card-container">
                <h1>Bienvenido a Centro de Distribución Inocente</h1>
                <p>La plataforma para una gestión de compras eficiente.</p>
                <div className="role-selection">
                    <Link to="/buyer/dashboard" className="button buyer-button">Ingresar como Comprador</Link>
                    <Link to="/supplier/dashboard" className="button supplier-button">Ingresar como Proveedor</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;