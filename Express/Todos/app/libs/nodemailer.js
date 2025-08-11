// CALL LIB...
const nodemailer = require("nodemailer");
const { google_app_password } = require("../config");

let transporter = nodemailer.createTransport({
     service:"gmail",
     auth:{
          user:"programlia1108@gmail.com",
          pass:google_app_password
     }
})

async function mail(userEmail , otp) {
     try {
          return await transporter.sendMail({
               from:"programlia1108@gmail.com",
               to:userEmail,
               subject:"OTP Authentication",
               text:`Hallo ${userEmail} ini kode OTP kamu \n${otp}`
          })
     }catch(err){
          console.log(err);
     }
}

module.exports = {mail}