import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoURI =
    process.env.MONGODB_URI ||
    'mongodb+srv://appdbuser:appdbuser@cluster004.gz386up.mongodb.net/portfolio?retryWrites=true&w=majority';

  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
};

export default connectDB;
