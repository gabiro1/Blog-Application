const express = require('express');
const app = express();
const { sequelize } = require('./models'); // Sequelize instance to sync models
const cors = require('cors');
require('dotenv').config();

// Middleware setup
app.use(express.json()); // For parsing application/json
app.use(cors()); // For enabling CORS

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./controllers/posts'));
app.use('/api/comments', require('./routes/comments'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/messages', require('./routes/messages'));
app.use('/api/media', require('./routes/media'));
app.use('/api/views', require('./routes/views'));

// Error Handling Middleware (optional but useful)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error details
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

// Sync database and start server
sequelize.sync({ alter: true }).then(() => {
  console.log('Database connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error('Database connection error:', error);
});
