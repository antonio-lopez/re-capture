require('dotenv').config();
const mongoose = require('mongoose');

// tells mongoose to use ES6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

mongoose.connection
  .once('open', () => console.log('Database Connected!'))
  .on('error', (error) => {
    console.warn('Error : ', error);
  });

// runs before each test
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    console.log('Emptying Database...');
    done();
  });
});
