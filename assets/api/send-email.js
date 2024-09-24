export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;
  
      // You can add email sending logic here using nodemailer or a third-party service
      // For example, you can use nodemailer:
      // const nodemailer = require('nodemailer');
      
      // Send a response back to the form
      res.status(200).send('Email sent successfully!');
    } else {
      res.status(405).send('Method Not Allowed');
    }
  }
  