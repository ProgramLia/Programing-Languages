const User = require("../api/v1/models/users.model");
const Otp = require("../api/v1/models/otp.model");
const { BadRequest, NotFound, Forbidden } = require("../errors");
const { encodeToken, decodeToken } = require("../utils/jwt");
const bcrypt = require("bcryptjs");
const mail = require("../utils/nodemailer");
const speakeasy = require("speakeasy");


async function signup(req) {
     const { username, email, password, confirm_password } = req.body;
     if (!username || !email || !password || !confirm_password) throw new BadRequest("Wajib mengisi semua kolom");
     if (password != confirm_password) throw new BadRequest("Konfirmasi password tidak sesuai");
     const newUser = await User.create({ username, email, password });
     const token = await encodeToken({ user_id: newUser._id });
     let secret = speakeasy.generateSecret();
     const OTP = speakeasy.totp({ secret: secret.base32, encoding: 'base32' });
     await Otp.create({ user_id: newUser._id, secret: secret.base32, otp: OTP, expiresAt: new Date(Date.now() + 2 * 60 * 1000) });
     await mail(newUser.email, newUser.username, OTP);
     return { new_user: newUser, token: token };
}

async function signin(req) {
     const { email, password } = req.body;
     const user = await User.findOne({ email: email });
     if (!email || !password) throw new BadRequest("Wajib mengisi semua kolom");
     if (!user) throw new NotFound("Password atau email salah");
     if (!await bcrypt.compare(password, user.password)) throw new BadRequest("Password atau email salah");
     const token = await encodeToken({ user_id: user._id });
     return { token: token };
}

async function otpResend(req) {
     const { email } = req.body;
     let secret = speakeasy.generateSecret();
     let OTP = speakeasy.totp({ secret: secret.base32, encoding: 'base32' });
     if (req.user && req.user._id) {
          await Otp.findOneAndUpdate(
               { user_id: req.user._id },
               { secret: secret.base32, verified: false, expiresAt: new Date(Date.now() + 2 * 60 * 1000) });
          await mail(req.user.email, req.user.username, OTP);
     } else {
          const user = await User.findOne({ email: email });
          await Otp.findOneAndUpdate(
               { user_id: user._id },
               { secret: secret.base32, verified: false, expiresAt: new Date(Date.now() + 2 * 60 * 1000) })
          await mail(email, user.username, OTP);
     }
}

async function otpVerify(req) {
     const { email, otp } = req.body;
     if (req.user && req.user._id) {
          if (!otp) throw new BadRequest("Wajib mengisi otp");
          const OTP = await Otp.findOne({ user_id: req.user._id });
          if (OTP.secret == null) throw new BadRequest("Otp sudah kadalwarsa");
          if (OTP.expiresAt != null && Date.now() > new Date(OTP.expiresAt)) throw new BadRequest("Otp sudah kadalwarsa");
          const user = await User.findById(req.user._id);
          let is_verify = speakeasy.totp.verify({ secret: OTP.secret, encoding: 'base32', token: otp, window: 2 })
          if (!is_verify) throw new BadRequest("OTP salah atau tidak valid, mohon lihat email anda atau kirim ulang");
          if (!OTP) throw new NotFound("Otp tidak ditemukan");
          if (OTP.verified) throw new BadRequest("Otp sudah digunakan");
          OTP.verified = true;
          await OTP.save();
          user.verified = true;
          await user.save();
     } else {
          if(!email || !otp) throw new BadRequest("Wajib mengisi semua kolom");
          const user = await User.findOne({ email:email });
          if(!user) throw new NotFound("Pengguna tidak ditemukan");
          const OTP = await Otp.findOne({ user_id: user._id });
          if (OTP.secret == null) throw new BadRequest("Otp sudah kadalwarsa");
          if (OTP.expiresAt != null && Date.now() > new Date(OTP.expiresAt)) throw new BadRequest("Otp sudah kadalwarsa");
          let is_verify = speakeasy.totp.verify({ secret: OTP.secret, encoding: 'base32', token: otp, window: 2 })
          if (!is_verify) throw new BadRequest("OTP salah atau tidak valid, mohon lihat email anda atau kirim ulang");
          if (!OTP) throw new NotFound("Otp tidak ditemukan");
          if (OTP.verified) throw new BadRequest("Otp sudah digunakan");
          const token = encodeToken({id:user._id});
          req.session.otp = token;
          OTP.verified = true;
          await OTP.save();
          user.verified = true;
          await user.save();
     }
     return;
}

async function forgotPassword(req) {
     const {password, confirm_password} = req.body;
     if(!req.session.otp || req.session.otp == undefined) throw new Forbidden("Anda tidak punya akses");
     if(!password || !confirm_password) throw new BadRequest("Wajib mengisi semua kolom");
     if(password != confirm_password) throw new BadRequest("Konfirmasi password tidak sesuai");
     const token = decodeToken(req.session.otp)
     const user = await User.findById(token.id);
     if(!user) throw new NotFound("Pengguna tidak ditemukan");
     user.password = password;
     await user.save();
     req.session.otp = null
     return;
}

module.exports = { signup, signin, otpVerify, otpResend, forgotPassword}