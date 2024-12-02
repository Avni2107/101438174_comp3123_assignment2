const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }
    res.send({ message: 'Login successful!', token: 'mock-token' });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

