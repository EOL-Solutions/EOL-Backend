require('dotenv').config()

const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
  
});

this.transporter.verify().then(() => {
  console.log("Ready for send emails");
}).catch(err => {
  console.log('Error emails', err);
});