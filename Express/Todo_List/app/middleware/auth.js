const { secret_key } = require("../config");
const { Unauthenticated, Unauthorized } = require("../errors/errors");
const { isVerified } = require("../libs/jwt");
const userModel = require("../api/v1/models/users")

async function authMiddleware(req, res, next) {
    try {
        const { authorization } = req.headers;
        if (!authorization) throw new Unauthenticated("Invalid authentication");
        const token = authorization.split(" ");

        const payload = await isVerified(token[1], secret_key);
        req.user = payload;
        next();
    } catch (err) {
        next(err);
    }
}

async function userVerify(req,res,next) {
    try {
        const user = await userModel.findById({_id:req.user._id})
        if(!user.is_verified) throw new Unauthorized("Dont have access")
        next()
    }catch(err){ 
        next(err);
    }
}

function roleMiddlewer(...role) {
    return async function (req, res, next) {
        if (!role.includes(req.user.role)) throw new Unauthorized("Dont have access");
        next()
    }
}

module.exports = { authMiddleware, roleMiddlewer, userVerify }