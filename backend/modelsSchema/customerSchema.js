//MongoDB Schema: Customer
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({ 
    customer_name: {
        type: String,
    },
    customer_email: {
        type: String,
        unique: true, 
    },
    customer_password: {
        type: String,
    },
    customer_cartData: {
        type: Object, 
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;