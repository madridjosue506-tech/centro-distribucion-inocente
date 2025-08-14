const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
        specifications: String,
    }],
    deliveryDate: { type: Date, required: true },
    deliveryAddress: { type: String, required: true },
    status: { type: String, enum: ['nueva', 'en proceso', 'completada', 'rechazada'], default: 'nueva' },
    createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Order', OrderSchema);