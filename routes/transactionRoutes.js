const express = require('express');
const { createTransaction, getUserTransactions, clearAllTransactions } = require('../controllers/transactionController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', createTransaction);
router.get('/', getUserTransactions);
router.delete('/clear', clearAllTransactions);

module.exports = router;