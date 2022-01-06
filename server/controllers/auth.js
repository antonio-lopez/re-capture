const User = require('../models/User');

// user authentication will be passed as a Middleware in index.js
// user password hashing will be done in the User model
// Instance methods in Mongoose allow logic to be seperated from the controller

const register = async (req, res) => {
  const { email } = req.body;
  //   const user = await User.create({ ...req.body });
  //   const token = user.createJWT();

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exists.' });

    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(201).json({ user: { name: user.name }, token });
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong.' });
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter email or password.' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = user.createJWT();
  res.status(200).json({ user: { name: user.name }, token });
};

module.exports = { register, login };
