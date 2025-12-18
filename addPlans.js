require('dotenv').config();
const mongoose = require('mongoose');
const RechargePlan = require('./models/RechargePlan');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mobile-recharge');

const plans = [
  // Prepaid Plans
  { planName: 'Prepaid Basic', price: 199, validity: 28, description: 'Basic prepaid plan', data: '1GB/day', talkTime: '300 mins', sms: '100/day', category: 'prepaid' },
  { planName: 'Prepaid Standard', price: 299, validity: 28, description: 'Standard prepaid plan', data: '1.5GB/day', talkTime: 'Unlimited', sms: '100/day', category: 'prepaid' },
  { planName: 'Prepaid Premium', price: 499, validity: 28, description: 'Premium prepaid plan', data: '2GB/day', talkTime: 'Unlimited', sms: '100/day', category: 'prepaid' },
  { planName: 'Prepaid Super', price: 699, validity: 84, description: 'Long validity prepaid', data: '1.5GB/day', talkTime: 'Unlimited', sms: '100/day', category: 'prepaid' },
  
  // Postpaid Plans
  { planName: 'Postpaid Basic', price: 399, validity: 30, description: 'Basic postpaid plan', data: '40GB', talkTime: 'Unlimited', sms: 'Unlimited', category: 'postpaid' },
  { planName: 'Postpaid Standard', price: 599, validity: 30, description: 'Standard postpaid plan', data: '75GB', talkTime: 'Unlimited', sms: 'Unlimited', category: 'postpaid' },
  { planName: 'Postpaid Premium', price: 999, validity: 30, description: 'Premium postpaid plan', data: '150GB', talkTime: 'Unlimited', sms: 'Unlimited', category: 'postpaid' },
  { planName: 'Postpaid Family', price: 1499, validity: 30, description: 'Family postpaid plan', data: '200GB', talkTime: 'Unlimited', sms: 'Unlimited', category: 'postpaid' }
];

async function addPlans() {
  try {
    await RechargePlan.deleteMany({});
    const result = await RechargePlan.insertMany(plans);
    console.log('Plans added:', result.length);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

addPlans();