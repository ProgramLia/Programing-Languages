const {Users} = require("../api/v1/models");
const BadRequest = require("../errors/badRequest");
const bycriptjs = require("bcryptjs");
const { createToken , isVerified} = require("../libs/jwt");
const { secret_key } = require("../config");
const Unauthenticated = require("../errors/Unauthenticated");

async function register (req) {
    const {username,email,password,confirmPassword} = req.body;
    let otp = '';
    
    for(let i = 1; i <= 6; i++) {
        const value = Math.floor(Math.random() * 6);
        otp += value;
    }

    if(password !== confirmPassword) throw new BadRequest("Password and confirm password not match");
    const user = await Users.create({username, email, password: await bycriptjs.hash(password, 12), otp : Number(otp)})

    return await createToken({username:user.username, email:user.email, _id:user._id, role:user.role, is_Verified:user.is_verified })
}

async function login (req) {
    const {email, password} = req.body;
    const user = await Users.findOne({email});

    if(!user) throw new BadRequest('Invalid Credential')
    if(!await bycriptjs.compare(password , user.password)) throw new BadRequest('Invalid Credential')

    return await createToken({username:user.username, email:user.email, _id:user._id, role:user.role, is_Verified:user.is_verified })
}

async function getProfile(req) {

    const user = await Users.findOne({_id:req.user._id});
    return user
}

module.exports = {register, login, getProfile}