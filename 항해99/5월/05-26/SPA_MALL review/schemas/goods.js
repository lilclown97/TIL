const mongoose = require('mongoose');

//goods에 대한 schema
const goodsSchema = mongoose.Schema({
    goodsId: {
        type: Number,
        required: true, //필수 포함 값
        unique: true, //index 값
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    thumbnailUrl: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
    },
});

module.exports = mongoose.model('Goods', goodsSchema);
