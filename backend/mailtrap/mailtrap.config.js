import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Configure nodemailer with Gmail SMTP
const mailtrapClient = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Use port 587 for TLS
    secure: false, // false for TLS, true for SSL
    auth: {
        user: process.env.EMAIL_USER, // Gmail email address
        pass: process.env.EMAIL_PASS  // Gmail app-specific password or your regular password
    },
    tls: {
        rejectUnauthorized: false  // This helps prevent self-signed certificate errors
    }
});

// Define sender information
export const sender = {
    email: "mailtrap@demomailtrap.com",  // You can replace this with your Gmail address if needed
    name: "Mohamed Haaris"
};

// Export the nodemailer transporter
export default mailtrapClient;
