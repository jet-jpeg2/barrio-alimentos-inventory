// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected Successfully!');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    console.log('💡 Make sure MongoDB is installed and running!');
    console.log('💡 Install from: https://www.mongodb.com/try/download/community');
    process.exit(1);
  }
};

// Connect to database
connectDB();

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: '✅ Backend is running!',
    status: 'Connected to database',
    timestamp: new Date()
  });
});

// Import routes
const materialRoutes = require('./routes/materials');
app.use('/api/materials', materialRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Visit: http://localhost:${PORT}`);
});
