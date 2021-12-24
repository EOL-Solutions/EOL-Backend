require('dotenv').config()

const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({

  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  secureConnection: false, // TLS requires secureConnection to be false
  tls: {
    ciphers:'SSLv3',
    rejectUnauthorized: false
  },
  requireTLS:true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

this.transporter.verify().then(() => {
  console.log("Ready for send emails");
}).catch(err => {
  console.log('Error emails', err);
});