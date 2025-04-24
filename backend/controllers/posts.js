const { Post } = require('../models'); // Assuming you have a Post model

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.create({ title, content });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: 'Error creating post' });
  }
};

module.exports = { getPosts, createPost };
