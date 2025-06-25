import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Example route for handling contact form submissions
router.post('/contact', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Handle the contact form submission (e.g., send an email, save to database)
    res.status(200).json({ message: 'Contact form submitted successfully' });
});

// Additional routes can be defined here

export default router;