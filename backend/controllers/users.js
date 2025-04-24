const { User } = require('../models'); // Assuming you have a User model

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

module.exports = { getUsers, createUser };
