const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/users');

// Define API routes
router.get('/', getUsers); // Get all users
router.post('/', createUser); // Create a new user

module.exports = router;
