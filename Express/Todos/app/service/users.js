// CALL THE MODELS...
const userModel = require("../api/v1/models/users");

// CALL THE ERROR...
const BadRequest = require("../errors/badRequest");
const NotFound = require("../errors/notFound");

// LIBS...
const { hashing, compare } = require("../libs/bycript");
const { createToken } = require("../libs/jwt");
const { mail } = require("../libs/nodemailer");
const notFound = require("../middleware/notFound");
const path = require("path");
const fs = require("fs")

// RGISTER-SERVICE...
async function registerService(req) {
     let { username, email, password, confirmPassword } = req.body;

     // IF USER OR EMAIL EXIST...
     if (await userModel.findOne({ email: email })) throw new BadRequest("Invalid credential");

     // IF PASSWORD AND CONFIRM-PASSWORD DEFERENT...
     if (password != confirmPassword) throw new BadRequest("Invalid credential");

     // CREATE-OTP...
     let OTP = '';
     for (let i = 1; i <= 6; i++) {
          OTP += Math.floor(Math.random() * 10);
     }

     // HASH THE PASSWORD...
     password = await hashing(password, 12);

     // CREATE NEW USER...
     const newUser = await userModel.create({
          username: username,
          email: email,
          password: password,
          otp: OTP
     })

     // CREATE TOKEN...
     let token = await createToken({
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          role: newUser.role,
          otp: newUser.otp,
          is_verified: newUser.is_verified,
     }, "1d");

     await mail(newUser.email, OTP);
     return {user:newUser , token:token};
}

async function loginService(req) {
     const { email, password } = req.body;
     const user = await userModel.findOne({ email });

     if (!user) throw new BadRequest("Invalid credential");

     // IF PASSWORD NOT SAME...
     if (!await compare(password, user.password)) throw new BadRequest("Invalid credential");

     // CREATE TOKEN...
     let token = await createToken({
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          otp: user.otp,
          is_verified: user.is_verified,
     }, "1d");

     return {user:user , token:token};
}

async function serviceVerify(req) {
     const { otp } = req.body;
     const user = await userModel.findById(req.user._id)
     if (!user) throw new NotFound("User not found")
     if (otp != user.otp) throw new BadRequest("Invalid OTP");

     return await userModel.findByIdAndUpdate(user._id, { is_verified: true });
}

async function serviceResendOTP(req) {
     let OTP = ''
     const user = await userModel.findById(req.user._id);
     function generateOTP() {
          OTP = ''
          for (let i = 1; i <= 6; i++) {
               OTP += Math.floor(Math.random() * 10);
          }
     }

     generateOTP()

     while(user.otp == OTP) {
          generateOTP();
     }
     await userModel.findByIdAndUpdate(req.user._id , {otp:OTP})
     await mail(user.email , OTP);
     return OTP;
}

async function serviceProfile(req , set) {
     const {id} = req.params;
     const {username , email} = req.body;
     const user = await userModel.findById(id);
     if(!user) throw new NotFound("User not found");
     let handler;
     if(set === "read") {
          handler = user;
     }

     if(set === "update") {
          handler = await userModel.findByIdAndUpdate(id , {username , email , image:req.file ? `images/${req.file.filename}` : user.image})

          if(req.file && user.image) {
               const dir = path.join(__dirname , "../../public" , user.image)
               fs.unlink(dir , (err)=> console.log(err))
          }
     }

     if(set === "delete") {
          handler = await userModel.findByIdAndDelete(id)

          if(user.image) {
               const dir = path.join(__dirname , "../../public" , user.image)
               fs.unlink(dir , (err)=> console.log(err))
          }
     }

     return handler;
}

async function serviceUsers(req) {
     const user = await userModel.find();
     return user;
}

module.exports = { registerService, loginService, serviceVerify , serviceResendOTP , serviceProfile , serviceUsers }