const nodemailer = require("nodemailer");
const { EMAIL, GOOGLE_APP_PASSWORD } = require("../config");
const generateOtpEmail = require("./otpscreen");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: GOOGLE_APP_PASSWORD,
  },
});

const mail = async (toEmail, username, otp) => {
  const htmlContent = generateOtpEmail(username, otp);

  await transporter.sendMail({
    from: `"Tim Tumbaz App" <${EMAIL}>`,
    to: toEmail,
    subject: "Kode OTP Verifikasi Akun",
    html: htmlContent,
  });
};

module.exports = mail;

