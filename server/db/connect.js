const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url);
  /* No longer required after V6
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, */
};

module.exports = connectDB;
