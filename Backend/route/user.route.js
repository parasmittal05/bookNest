// In your routes file (user.route.js)
import express from 'express';
import { signup, login } from '../controller/user.controller.js';

const router = express.Router();

// POST /signup route
router.post('/signup', signup);

// POST /login route
router.post('/login', login);

export default router;
