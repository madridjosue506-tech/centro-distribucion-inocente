import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BuyerDashboard from './pages/BuyerDashboard';
import SupplierDashboard from './pages/SupplierDashboard';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Rutas anidadas para el Comprador */}
        <Route path="/buyer/*" element={<BuyerDashboard />} />
        {/* Rutas anidadas para el Proveedor */}
        <Route path="/supplier/*" element={<SupplierDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;