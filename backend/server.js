import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import createError from 'http-errors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import referencesRouter from './routes/references.js';
import projectsRouter from './routes/projects.js';
import servicesRouter from './routes/services.js';
import usersRouter from './routes/users.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio API is running.',
  });
});

app.use('/api/references', referencesRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/users', usersRouter);

app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
  });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('MongoDB connected successfully.');
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

startServer();
