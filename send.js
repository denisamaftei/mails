const ExcelJS = require("exceljs");
const nodemailer = require("nodemailer");

const worksheet = workbook.getWorksheet("Apelative");

const studentName = worksheet.getColumn("Student's name");
const groupName = worksheet.getColumn("Group Name");
const trainer = worksheet.getColumn("Trainer");
const best = worksheet.getColumn("CEL MAI");
const skill1 = worksheet.getColumn("Competente 1");
const skill2 = worksheet.getColumn("Competente 2");
const skill3 = worksheet.getColumn("Competente 3");
const skill4 = worksheet.getColumn("Competente 4");

const sendController = nodemailer.createTransport({
  host: "smtp.gmail.com", // Send mail using built-in transport View support list: https://nodemailer.com/smtp/well-known/
  port: 465, // SMTP port
  secure: true, // used SSL
  auth: {
    user: "denisa.mihaela.maftei@gmail.com",
    pass: "zzaeexdxnqkllcll"
  }
});

const mailOptions = {
  from: "denisa.mihaela.maftei@gmail.com",
  to: "denysadeny11@yahoo.com",
  subject: "subtitle",
  text: "Test"
};

sendController.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("**********OK**********" + info);
  }
});
