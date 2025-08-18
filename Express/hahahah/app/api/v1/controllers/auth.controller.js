const { signup, signin, otpVerify, otpResend, forgotPassword } = require("../../../services/auth.service");

async function register(req,res,next) {
     try {
          const response = await signup(req);
          res.status(201).json({
               code:'201',
               status:'CREATED',
               message:'Registrasi berhasil',
               data:response,
          })
     }catch(err) {
          next(err);
     }
}

async function login(req,res,next) {
     try {
          const response = await signin(req);
          res.status(200).json({
               code:'200',
               status:'OK',
               message:'Login berhasil',
               data:response,
          })
     }catch(err) {
          next(err);
     }
}

async function OtpVerification(req,res,next) {
     try {
          await otpVerify(req);
          res.status(200).json({
               code:'200',
               status:'OK',
               message:'Verifikasi berhasil',
          })
     }catch(err) {
          next(err);
     }
}

async function resendOtp(req,res,next) {
     try {
          await otpResend(req);
          res.status(200).json({
               code:'200',
               status:'OK',
               message:'Otp dikirim ke email anda',
          })
     }catch(err) {
          next(err);
     }
}

async function passwordForgot(req,res,next) {
     try {
          await forgotPassword(req);
          res.status(200).json({
               code:'200',
               status:'OK',
               message:'Berhasil mengubah password',
          })
     }catch(err) {
          next(err);
     }
}

module.exports = {register, login, OtpVerification, resendOtp, passwordForgot}