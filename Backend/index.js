import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

// Initialize dotenv
dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Allow frontend to access
    methods: 'GET,POST,PUT,DELETE,PATCH,HEAD',
    credentials: true,
};

app.use(cors(corsOptions)); // Use CORS middleware
app.use(express.json()); // Parse incoming JSON requests

// Set up MongoDB connection
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT || 4001, () => {
            console.log(`Server running on port ${process.env.PORT || 4001}`);
        });
    })
    .catch((error) => console.error('MongoDB connection error:', error));

// Set up routes
app.use('/user', userRoute);
app.use('/book', bookRoute);
