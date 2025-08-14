const mongoose = require('mongoose');
const SupplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactName: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    address: { type: String },
    description: { type: String },
});
module.exports = mongoose.model('Supplier', SupplierSchema);