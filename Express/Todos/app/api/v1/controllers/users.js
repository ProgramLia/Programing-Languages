const { registerService, loginService, serviceVerify, serviceResendOTP, serviceProfile, serviceUsers } = require("../../../service/users");

// REGISTER...
async function register(req,res,next) {
     try {
          const response = await registerService(req);
          res.status(200).json({status:"success" , message:"User created" ,  data:{ user:response.user , token:response.token }})
     }catch(err){
          next(err)
     }
}

// LOGIN...
async function login(req,res,next) {
     try {
          const response = await loginService(req);
          res.status(200).json({status:"success" , message:"Login successfuly" , data:{user:response.user, token:response.token}})
     }catch(err) {
          next(err);
     }
}

async function accountVerify(req,res,next) {
     try {
          const response = await serviceVerify(req);
          res.status(200).json({status:"success" , message:"Account verify successfuly", data:response})
     }catch(err){
          next(err)
     }
}

async function resendOTP(req,res,next) {
     try {
          const response = await serviceResendOTP(req);
          res.status(200).json({status:"success" , data:response})
     }catch(err) {
          next(err);
     }
}

async function getProfile(req,res,next) {
     try {
          const response = await serviceProfile(req, "read");
          res.status(200).json({status:"success" , message:"user profile" , data:response})
     }catch(err) {
          next(err);
     }
}

async function updateProfile(req,res,next) {
     try {
          const response = await serviceProfile(req, "update");
          res.status(200).json({status:"success" , message:"profile updated" , data:response})
     }catch(err) {
          next(err);
     }
}

async function deleteProfile(req,res,next) {
     try {
          const response = await serviceProfile(req, "delete");
          res.status(200).json({status:"success" , message:"user deleted"});
     }catch(err) {
          next(err);
     }
}

async function getUsers(req,res,next) {
     try {
          const response = await serviceUsers();
          res.status(200).json({status:"success" , message:"success get all user" , data:response})
     }catch(err) {
          next(err);
     }
}

module.exports = {register , login , accountVerify , resendOTP , getProfile , updateProfile , deleteProfile, getUsers}