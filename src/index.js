import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
mongoose
  .connect(process.env.MONGODB_URI, {
    
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


// Start server
app.listen(PORT, () => {
  console.log(`⁠ Server is running on port ${PORT}`);
});