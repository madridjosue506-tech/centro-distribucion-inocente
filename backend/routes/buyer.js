const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyerController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas con middleware de autenticación
router.get('/dashboard', authMiddleware, buyerController.getBuyerDashboardData);
router.get('/inventory', authMiddleware, buyerController.getInventory);
router.post('/inventory/product', authMiddleware, buyerController.addProduct);
router.delete('/inventory/product/:id', authMiddleware, buyerController.deleteProduct);
router.get('/suppliers', authMiddleware, buyerController.getSuppliers);
router.post('/orders', authMiddleware, buyerController.createOrder);
router.get('/orders/history', authMiddleware, buyerController.getOrderHistory);

module.exports = router;