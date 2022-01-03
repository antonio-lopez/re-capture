const mongoose = require('mongoose');
const entriesSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Please provide a journal entry'],
  },
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    maxlength: 50,
  },
  createdBy: {
    type: mongoose.Types.ObjectId, //ties it to a user
    ref: 'User',
    require: [true, 'Please provide a user'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  selectedFile: {
    type: String,
  },
});

module.exports = mongoose.model('Entry', entriesSchema);
