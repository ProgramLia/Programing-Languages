const {register, login, getProfile} = require("../../../services/users");

async function signUp(req,res,next) {
    try {
        const token = await register(req)
        res.status(201).json({status: "success" , message: "success to create account", token});
    } catch (error) {
        next(error)
    }
}

async function signIn(req,res,next) {
    try {
        const token = await login(req);
        res.status(200).json({status:"success" , message:"Welcome users good luck" , token});
    }catch(error) {
        next(error)
    }
}

async function profile(req,res,next) {
    try {
        const response = await getProfile(req);
        res.status(200).json({status:"success" , data:response});
    }catch(error) {
        next(error)
    }
}


module.exports = {signUp , signIn, profile}