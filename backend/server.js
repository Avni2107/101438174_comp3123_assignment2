const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json()); // Add this line here

// Connect to MongoDB
const MONGO_URI = 'mongodb://localhost:27017/your-database-name';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected!');
});

// Example Routes
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Logic for creating a new user (e.g., saving to database)
  res.status(201).json({ message: 'User created successfully', user: { name, email } });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

