const mongoose = require('mongoose');

//cart에 대한 schema
const schema = new mongoose.Schema({
    goodsId: {
        type: Number,
        required: true,
        unique: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Cart', schema);
