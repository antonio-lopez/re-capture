const Entry = require('../models/Entry');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllEntries = async (req, res) => {
  const entries = await Entry.find({ createdBy: req.user.userId }).sort({
    createdAt: -1,
  });
  // res.status(StatusCodes.OK).json({ entries });
  res.status(StatusCodes.OK).json(entries);
};
const getEntry = async (req, res) => {
  const {
    user: { userId },
    params: { id: entryId },
  } = req;

  const entry = await Entry.findOne({
    _id: entryId,
    createdBy: userId,
  });
  if (!entry) {
    throw new NotFoundError('No entry with that ID');
  }
  // res.status(StatusCodes.OK).json({ entry });
  res.status(StatusCodes.OK).json(entry);
};
const createEntry = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const entry = await Entry.create(req.body);
  // res.status(StatusCodes.CREATED).json({ entry });
  res.status(StatusCodes.CREATED).json(entry);
};
const updateEntry = async (req, res) => {
  const {
    body: { title, message },
    user: { userId },
    params: { id: entryId },
  } = req;

  if (title === '' || message === '') {
    throw new BadRequestError('Cannot leave title or message empty');
  }

  const entry = await Entry.findByIdAndUpdate(
    { _id: entryId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!entry) {
    throw new NotFoundError('No entry with that ID');
  }
  // res.status(StatusCodes.OK).json({ entry });
  res.status(StatusCodes.OK).json(entry);
};
const deleteEntry = async (req, res) => {
  const {
    user: { userId },
    params: { id: entryId },
  } = req;

  const entry = await Entry.findByIdAndRemove({
    _id: entryId,
    createdBy: userId,
  });
  if (!entry) {
    throw new NotFoundError('No entry with that ID');
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllEntries,
  getEntry,
  createEntry,
  updateEntry,
  deleteEntry,
};
