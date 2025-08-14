const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    stock: { type: Number, required: true },
    minStock: { type: Number, required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    // Aquí puedes agregar más detalles como 'color', 'talla', etc.
});
module.exports = mongoose.model('Product', ProductSchema);