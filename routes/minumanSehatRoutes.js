const express = require('express');
const { checkAuth, validateMinumanSehat } = require('../middlewares/authAndValidationMiddleware');
const {
  addMinumanSehat,
  getMinumanSehat,
  deleteMinumanSehat,
} = require('../controllers/minumanSehatController');

const router = express.Router();

router.post('/', checkAuth, validateMinumanSehat, addMinumanSehat);
router.get('/', checkAuth, getMinumanSehat);
router.delete('/:id', checkAuth, deleteMinumanSehat);

module.exports = router;
