const Product = require('../models/Product');
const Supplier = require('../models/Supplier');
const Order = require('../models/Order');

// @route   GET api/buyer/dashboard
// @desc    Obtener datos para el dashboard del comprador
// @access  Private
exports.getBuyerDashboardData = async (req, res) => {
    try {
        const userId = req.user.id;
        const lowStockProducts = await Product.find({ stock: { $lte: 10 } });
        const recentOrders = await Order.find({ buyer: userId }).sort({ createdAt: -1 }).limit(5);

        res.json({
            lowStockProducts,
            recentOrders,
            message: `Bienvenido, ${req.user.name}. ¡Revisa tus niveles de inventario!`,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// @route   GET api/buyer/inventory
// @desc    Obtener todos los productos
// @access  Private
exports.getInventory = async (req, res) => {
    try {
        const products = await Product.find().populate('supplier', 'name');
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// @route   POST api/buyer/inventory/product
// @desc    Añadir un nuevo producto
// @access  Private
exports.addProduct = async (req, res) => {
    const { name, category, sku, stock, minStock, supplier } = req.body;
    try {
        const newProduct = new Product({ name, category, sku, stock, minStock, supplier });
        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// @route   DELETE api/buyer/inventory/product/:id
// @desc    Eliminar un producto
// @access  Private
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        await product.remove();
        res.json({ msg: 'Producto eliminado' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// @route   GET api/buyer/suppliers
// @desc    Obtener todos los proveedores
// @access  Private
exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// @route   POST api/buyer/orders
// @desc    Crear una nueva orden
// @access  Private
exports.createOrder = async (req, res) => {
    const { supplier, products, deliveryDate, deliveryAddress } = req.body;
    try {
        const newOrder = new Order({
            buyer: req.user.id,
            supplier,
            products,
            deliveryDate,
            deliveryAddress,
        });
        const order = await newOrder.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// @route   GET api/buyer/orders/history
// @desc    Obtener el historial de órdenes
// @access  Private
exports.getOrderHistory = async (req, res) => {
    try {
        const orders = await Order.find({ buyer: req.user.id }).populate('products.product').sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};