const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas con middleware de autenticación
router.get('/dashboard', authMiddleware, supplierController.getSupplierDashboardData);
router.get('/orders', authMiddleware, supplierController.getSupplierOrders);
router.put('/orders/:id/status', authMiddleware, supplierController.updateOrderStatus);
router.get('/buyers', authMiddleware, supplierController.getBuyers);

module.exports = router;