const Transaction = require('../models/Transaction');

// Create transaction
const createTransaction = async (req, res) => {
  try {
    const { mobile, operator, amount, planName } = req.body;
    console.log('Creating transaction:', { mobile, operator, amount, planName });
    
    const transactionId = 'TXN' + Date.now() + Math.random().toString(36).substr(2, 5);
    
    // Get first user as default for now
    const User = require('../models/User');
    const user = await User.findOne();
    
    const transaction = await Transaction.create({
      userId: user._id,
      mobile,
      operator,
      amount,
      planName,
      transactionId
    });

    console.log('Transaction created successfully:', transaction._id);
    res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (error) {
    console.error('Transaction creation error:', error);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get user transactions
const getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: transactions
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Clear all transactions
const clearAllTransactions = async (req, res) => {
  try {
    await Transaction.deleteMany({});
    res.status(200).json({
      success: true,
      message: 'All transactions cleared successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createTransaction,
  getUserTransactions,
  clearAllTransactions
};