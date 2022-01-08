const Entry = require('../models/Entry');

const getAllEntries = async (req, res) => {
  const entries = await Entry.find({ createdBy: req.user.userId }).sort(
    'createdAt'
  );
  res.status(200).json({ entries });
};
const getEntry = async (req, res) => {
  const {
    user: { userId },
    params: { id: entryId },
  } = req;

  try {
    const entry = await Entry.findOne({ _id: entryId, createdBy: userId });
    res.status(200).json({ entry });
  } catch (error) {
    res.status(404).json({ message: 'No entry with that ID.' });
  }
};
const createEntry = async (req, res) => {
  req.body.createdBy = req.user.userId;
  try {
    const entry = await Entry.create(req.body);
    res.status(201).json({ entry });
  } catch (error) {
    res.status(400).json({ message: 'Cannot leave title or message empty' });
  }
};
const updateEntry = async (req, res) => {
  const {
    body: { title, message },
    user: { userId },
    params: { id: entryId },
  } = req;

  // if (title === '' || message === '') {
  //   res.status(400).json({ message: 'Cannot leave title or message empty' });
  // }

  try {
    const entry = await Entry.findByIdAndUpdate(
      { _id: entryId, createdBy: userId },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({ entry });
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const deleteEntry = async (req, res) => {
  const {
    user: { userId },
    params: { id: entryId },
  } = req;

  try {
    const entry = await Entry.findByIdAndRemove({
      _id: entryId,
      createdBy: userId,
    });
    res.status(200).send();
  } catch (error) {
    res.status(404).json({ message: 'No entry with that ID.' });
  }
};

module.exports = {
  getAllEntries,
  getEntry,
  createEntry,
  updateEntry,
  deleteEntry,
};
