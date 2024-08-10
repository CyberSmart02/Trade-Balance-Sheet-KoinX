// const express = require('express');
// const { uploadCSV, getBalance } = require('../controllers/tradeController');

// const router = express.Router();

// // Endpoint to trigger CSV parsing and uploading
// router.get('/upload', uploadCSV);

// // Endpoint to get the balance at a given timestamp
// router.post('/balance', getBalance);

// module.exports = router;
const express = require('express');
const multer = require('multer');
const { uploadCSV, getBalance } = require('../controllers/tradeController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });  // Files will be stored in the 'uploads' directory

router.post('/upload', upload.single('file'), uploadCSV);
router.post('/balance', getBalance);

module.exports = router;
