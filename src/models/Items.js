const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: true,
    },
    name: {
        unique: true,
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Item', itemSchema);
