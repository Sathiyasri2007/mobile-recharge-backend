require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mobile-recharge_db');

async function createUser() {
  try {
    const user = await User.create({
      username: 'sathiyasri',
      email: 'sathiyasri@gmail.com',
      password: 'password123',
      phone: '9876543210',
      role: 'user'
    });
    console.log('User created:', user.email);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

createUser();