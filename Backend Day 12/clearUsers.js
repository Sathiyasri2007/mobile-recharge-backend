require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mobile-recharge_db');

async function clearUsers() {
  try {
    await User.deleteMany({});
    console.log('All users cleared from database');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

clearUsers();