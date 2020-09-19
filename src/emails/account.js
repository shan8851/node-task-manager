require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const sendGridAPIKey = process.env.SEND_GRID_API;

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "asamshan456@gmail.com",
    subject: "Welcome to Task Manager",
    text: `Hey ${name}, welcome to the app. Let me know how you find it.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "asamshan456@gmail.com",
    subject: "Sorry to see you go",
    text: `Hey ${name}, I am sorry to hear you have closed your account. Please let me know if there is anything we can do to improve your experience.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
