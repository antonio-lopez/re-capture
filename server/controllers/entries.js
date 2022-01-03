const Entry = require('../models/Entry');

const getAllEntries = async (req, res) => {
  res.send('getAllEntries route');
};
const getEntry = async (req, res) => {
  res.send('getEntry route');
};
const createEntry = async (req, res) => {
  res.send('createEntry route');
};
const updateEntry = async (req, res) => {
  res.send('updateEntry route');
};
const deleteEntry = async (req, res) => {
  res.send('deleteEntry route');
};

module.exports = {
  getAllEntries,
  getEntry,
  createEntry,
  updateEntry,
  deleteEntry,
};
