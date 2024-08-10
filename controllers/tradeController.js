const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const Trade = require('../models/Trade');

const uploadCSV = (req, res) => {
    const filePath = req.file.path;  // Path to the uploaded file

    const trades = [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
            const [baseCoin, quoteCoin] = row.Market.split('/');
            trades.push({
                userId: row.User_ID,
                utcTime: new Date(row.UTC_Time),
                operation: row.Operation,
                baseCoin,
                quoteCoin,
                amount: parseFloat(row['Buy/Sell Amount']),
                price: parseFloat(row.Price)
            });
        })
        .on('end', async () => {
            try {
                await Trade.insertMany(trades);
                res.status(200).json({ message: 'CSV data uploaded and processed successfully' });
            } catch (error) {
                res.status(500).json({ message: 'Error processing CSV data', error });
            } finally {
                // Delete the file after processing
                fs.unlinkSync(filePath);
            }
        });
};

const getBalance = async (req, res) => {
    const { timestamp } = req.body;
    const date = new Date(timestamp);

    try {
        const trades = await Trade.find({ utcTime: { $lt: date } });

        const balance = {};

        trades.forEach((trade) => {
            const { baseCoin, operation, amount } = trade;
            if (!balance[baseCoin]) balance[baseCoin] = 0;
            balance[baseCoin] += operation === 'Buy' ? amount : -amount;
        });

        res.status(200).json(balance);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching balance', error });
    }
};

module.exports = { uploadCSV, getBalance };

