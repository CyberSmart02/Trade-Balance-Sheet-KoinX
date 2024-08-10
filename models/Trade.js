const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
    userId: String,
    utcTime: Date,
    operation: String,
    baseCoin: String,
    quoteCoin: String,
    amount: Number,
    price: Number
});

module.exports = mongoose.model('Trade', TradeSchema);
