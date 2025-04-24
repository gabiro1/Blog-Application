const express = require('express');
const router = express.Router();
const { getPosts, createPost } = require('../controllers/posts');

// Define API routes for posts
router.get('/', getPosts); // Get all posts
router.post('/', createPost); // Create a new post

module.exports = router;
