const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sendmail = require('sendmail')();

const api = express();
var cors = require('cors');
api.use(cors());
api.use(express.static(__dirname));
api.use(bodyParser.json());

api.listen(3100, () => {
  console.log('API up and running!');
});
api.post('/email', (req , res) => {
    console.log(req.body);
    var str = req.body.email;

    var len = 6;
    var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'; 
    let coupon = ''; 
    for (let i = 0; i < len; i++ ) { 
        coupon += digits[Math.floor(Math.random() * digits.length)]; 
    }

    var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'dhaarani1211@outlook.com',
        pass: 'Deikv@123'
    }
});
    
    var mailOptions = {
      from: 'dhaarani1211@outlook.com',
      to: str,
      subject: 'You have won Exciting gift 😍',
      html: '<h1>Congratulation You have won the gift Coupon💐</h1><p style="font-size:20px">By refering more people to <b>WAITLIST ME</b> you have won gift coupon</p><h2>&#127881; Keep Going &#127881;</h2><h3>Your coupon code:</h3><span style="font-size:30px;color:#b17cc6">'+coupon+'</span>'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.send("An conformation link is send to the given mail.");
})
api.post('/forget', (req , res) => {
  console.log(req.body);
  var str = req.body.emailId;
  var len = 100;
    var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'; 
    let OTP = ''; 
    for (let i = 0; i < len; i++ ) { 
        OTP += digits[Math.floor(Math.random() * digits.length)]; 
    }

  var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  // auth: {
  //   user: 'dhaaranieaswari@gmail.com',
  //   pass: '======='
  // }
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "804cbe790ce9be",
    pass: "0920092314f135"
  }
  });
  
  var mailOptions = {
    from: 'dhaaranieaswari@gmail.com',
    to: str,
    subject: 'Change password Link',
    html: '<h5>To reset the password Use the following link</h5><a href="http://localhost:4200/resetPassword/'+OTP+'">http://localhost:4200/resetPassword/'+OTP+'</a>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send("A password reset link has been send to the given mail.");
})
