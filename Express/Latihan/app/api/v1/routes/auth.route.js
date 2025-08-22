const authMiddleware = require("../../../middleware/authMiddleware");
const { register, login, OtpVerification, resendOtp, passwordForgot } = require("../controllers/auth.controller");
const router = require("express").Router();

 router.post("/auth/register" , register);
 router.post("/auth/login" , login);
 router.post("/auth/otp-verification", authMiddleware , OtpVerification);
 router.post("/auth/otp-resend", authMiddleware , resendOtp);
 router.post("/otp-verification", OtpVerification);
 router.post("/otp-resend", resendOtp);
 router.post("/forgot-password", passwordForgot);

 module.exports = router;