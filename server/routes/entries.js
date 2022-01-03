const express = require('express');
const router = express.Router();
const {
  getAllEntries,
  getEntry,
  createEntry,
  updateEntry,
  deleteEntry,
} = require('../controllers/entries');

router.get('/', getAllEntries);
router.get('/:id', getEntry);
router.post('/:id', createEntry);
router.patch('/:id', updateEntry);
router.delete('/:id', deleteEntry);

module.exports = router;
