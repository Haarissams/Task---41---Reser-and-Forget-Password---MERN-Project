import mailtrapClient, { sender } from './mailtrap.config.js';
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from './emailTemplates.js';

// Function to send a verification email
export const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: `"${sender.name}" <${sender.email}>`, // sender address
    to: email, // recipient email address
    subject: 'Verify your email',
    html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken), // replace template placeholder with token
  };

  try {
    const response = await mailtrapClient.sendMail(mailOptions);
    console.log('Verification email sent:', response.messageId);
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

// Function to send a welcome email
export const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: `"${sender.name}" <${sender.email}>`,
    to: email,
    subject: 'Welcome to Our Platform!',
    html: `<h1>Welcome, ${name}!</h1><p>Thank you for joining us. We're thrilled to have you on board!</p>`,
  };

  try {
    const response = await mailtrapClient.sendMail(mailOptions);
    console.log('Welcome email sent:', response.messageId);
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};

// Function to send a password reset email
export const sendPasswordResetEmail = async (email, resetURL) => {
  const mailOptions = {
    from: `"${sender.name}" <${sender.email}>`,
    to: email,
    subject: 'Reset Your Password',
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetURL),
  };

  try {
    const response = await mailtrapClient.sendMail(mailOptions);
    console.log('Password reset email sent:', response.messageId);
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw new Error(`Error sending password reset email: ${error.message}`);
  }
};

// Function to send a password reset success email
export const sendResetSuccessEmail = async (email) => {
  const mailOptions = {
    from: `"${sender.name}" <${sender.email}>`,
    to: email,
    subject: 'Password Reset Successful',
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  };

  try {
    const response = await mailtrapClient.sendMail(mailOptions);
    console.log('Password reset success email sent:', response.messageId);
  } catch (error) {
    console.error('Error sending password reset success email:', error);
    throw new Error(`Error sending password reset success email: ${error.message}`);
  }
};
