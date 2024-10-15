import mongoose from 'mongoose';

// Get the MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      
      
      connectTimeoutMS: 30000,  // Optional: Timeout settings
      serverSelectionTimeoutMS: 30000  // Optional: Timeout settings
    });
    console.log('MongoDB connection successful');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);  // Exit with failure
  }
};

export default connectDB;
