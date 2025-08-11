const nodemiler = require("nodemailer");
const { google_app_password } = require("../config");
const transporter = nodemiler.createTransport({
    service:"gmail",
    auth: {
        user:"zumaltholib@gmail.com",
        pass:google_app_password
    }
})

async function mail(userEmail, otp) {
    try {
         return await transporter.sendMail({
        from:`"From zumaltholib@gmail.com`,
        to: userEmail,
        subject:"Ini OTP nya yah 😁",
        text:`${otp}`
    });
    }catch(err) {
        console.log(err)
    }
}

module.exports = {mail}
