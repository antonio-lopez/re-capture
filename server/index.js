require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// security packages
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// connect db
const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');

// routers
const authRouter = require('./routes/auth');
const entriesRouter = require('./routes/entries');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(xss());
// app.use(express.json());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// routes
app.get('/', (req, res) => {
  res.send('Re-capture journal API');
});

app.use('/api/v1/auth', authRouter);
// authenticateUser middleware, has a next() function to get to entriesRouter
app.use('/api/v1/entries', authenticateUser, entriesRouter);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
