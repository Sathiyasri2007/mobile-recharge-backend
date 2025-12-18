require('dotenv').config();
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction');
const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mobile-recharge_db');

async function testTransaction() {
  try {
    // Find a user
    const user = await User.findOne();
    if (!user) {
      console.log('No user found');
      return;
    }

    // Create test transaction
    const transaction = await Transaction.create({
      userId: user._id,
      mobile: '9876543210',
      operator: 'jio',
      amount: 299,
      planName: 'Test Plan',
      transactionId: 'TXN' + Date.now()
    });

    console.log('Transaction created:', transaction);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

testTransaction();