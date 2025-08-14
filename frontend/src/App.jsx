import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import BuyerDashboard from './pages/BuyerDashboard.jsx';
import SupplierDashboard from './pages/SupplierDashboard.jsx';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buyer/*" element={<BuyerDashboard />} />
        <Route path="/supplier/*" element={<SupplierDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;