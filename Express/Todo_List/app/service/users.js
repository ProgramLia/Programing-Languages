const userModel = require("../api/v1/models/users");
const bycriptjs = require("bcryptjs");
const { BadRequest } = require("../errors/errors");
const { createToken } = require("../libs/jwt");
const { mail } = require("../libs/nodemailer");

async function registerService(req) {
    const {username, email, password, confirmPassword} = req.body;
    const user = await userModel.findOne({email:email});
    let otp = '';

    if(user) throw new BadRequest("The user already exists");
    if(password != confirmPassword) throw new BadRequest("Invalid Credential");

    for(let i = 1; i <= 6; i++) {
        otp += Math.floor(Math.random() * 10);
    }

    let newUser = await userModel.create({username, email, password:await bycriptjs.hash(password, 12) ,  otp:otp});

    await mail(newUser.email, newUser.otp);
    return await createToken({_id:newUser._id, username:username, email:email, password:newUser.password, role:newUser.role , isVerified:newUser.is_verified , otp:newUser.otp} , "1d")
}

async function loginService(req) {
    const {email, password} = req.body;
    const user = await userModel.findOne({email:email})

    if(!user) throw new BadRequest("Invalid Credential");
    if(!await bycriptjs.compare(password, user.password)) throw new BadRequest("Invalid Credential");

    return await createToken({_id:user._id, username:user.username, email:user.email, password:user.password, role:user.role ,isVerified:user.is_verified, otp:user.otp} , "1d");
}

async function serviceVerify(req) {
    const {otp} = req.body;
    const user = await userModel.findOne({_id:req.user._id});
    if(user.otp != otp) throw new BadRequest("Invalid or expire OTP")
    return await userModel.findOneAndUpdate({_id:user._id} , {is_verified:true})
}

async function reSendOTP(req) {
    const user = await userModel.findOne({_id:req.user._id});
    let otp = '';
      for(let i = 1 ; i <= 6; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    await mail(user.email, otp);
    return await userModel.findOneAndUpdate({_id:user._id} , {otp:otp})
}
 
module.exports = {registerService, loginService, serviceVerify, reSendOTP}