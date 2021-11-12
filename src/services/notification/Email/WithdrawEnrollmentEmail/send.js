const sendEmail = require("../sendEmail");
const { FROM } = require("../../../../constants/email");

const send = (userData,sessionData,classData) => {
  const msg = {
    to:userData.email,
    from: FROM, // Change to your verified sender
    subject: "Withdraw Sucessfull",
    text: "and easy to do anywhere, even with Node.js",
    html: `<strong> ${userData.name} has been successfully withdrawed enrolment from ${sessionData.name} of ${classData.name}</strong>`,
  };
  sendEmail(msg);
};

module.exports = send;
