const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    product_image: {
        type: String,
        required: true,
    },
    product_category: {
        type: String,
        required: true,
    },
    sale_price: {
        type: Number,
        required: true,
    },
    original_price: {
        type: Number,
        required: true,
    },
    product_trending: {
        type: String,
        required: true,
    },
    product_description: {
        type: String,
        required: true,
    },
    product_date: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;