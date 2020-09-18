require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const sendGridAPIKey = process.env.sendGridAPI;

sgMail.setApiKey(sendGridAPIKey);

sgMail.send({
  to: "asamshan456@gmail.com",
  from: "asamshan456@gmail.com",
  subject: "This is my first creation",
  text: "I hope this one actually gets to you",
});
