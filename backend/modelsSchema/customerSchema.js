//MongoDB Schema: Customer
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({ 
    customer_name: {
        type: String,
    },
    customer_email: {
        type: String,
        unique: true, // Ensures email addresses are unique
    },
    customer_password: {
        type: String,
    },
    customer_cartData: {
        type: Object, // Consider a more specific schema for cart data if needed
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;