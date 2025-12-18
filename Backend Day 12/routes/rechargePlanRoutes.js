const express = require('express');
const {
  createRechargePlan,
  getRechargePlans,
  getRechargePlanById,
  updateRechargePlan,
  deleteRechargePlan
} = require('../controllers/rechargePlanController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', createRechargePlan);
router.get('/', getRechargePlans);
router.get('/:id', getRechargePlanById);
router.put('/:id', updateRechargePlan);
router.delete('/:id', deleteRechargePlan);

module.exports = router;