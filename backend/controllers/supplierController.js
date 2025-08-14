const Order = require('../models/Order');
const User = require('../models/User');

// @route   GET api/supplier/dashboard
// @desc    Obtener datos para el dashboard del proveedor
// @access  Private
exports.getSupplierDashboardData = async (req, res) => {
    try {
        const newOrders = await Order.find({ supplier: req.user.id, status: 'nueva' }).sort({ createdAt: -1 }).limit(5);

        res.json({
            newOrders,
            message: `Hola, ${req.user.name}. Tienes nuevas órdenes pendientes.`,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// @route   GET api/supplier/orders
// @desc    Obtener todas las órdenes para el proveedor
// @access  Private
exports.getSupplierOrders = async (req, res) => {
    try {
        const orders = await Order.find({ supplier: req.user.id }).populate('buyer', 'name email').populate('products.product');
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// @route   PUT api/supplier/orders/:id/status
// @desc    Actualizar el estado de una orden (aceptar/rechazar)
// @access  Private
exports.updateOrderStatus = async (req, res) => {
    const { status } = req.body; // 'en proceso' o 'rechazada'
    try {
        let order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ msg: 'Orden no encontrada' });
        }
        // Verificar que el proveedor sea el asignado a la orden
        if (order.supplier.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Acción no autorizada' });
        }

        order.status = status;
        await order.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// @route   GET api/supplier/buyers
// @desc    Obtener todos los compradores asignados
// @access  Private
exports.getBuyers = async (req, res) => {
    try {
        // En este prototipo, simplemente obtenemos todos los usuarios con rol 'buyer'
        const buyers = await User.find({ role: 'buyer' }).select('-password');
        res.json(buyers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};