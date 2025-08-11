const { secret_key } = require("../config");
const Unauthenticated = require("../errors/Unauthenticated");
const { isVerified } = require("../libs/jwt");

async function authMiddleware(req, res, next) {
    try {
        const { authorization } = req.headers
        const token = authorization.split(" ");
        if (!authorization) throw new Unauthenticated("Invalid authenticated");

        const payload = isVerified(token[1], secret_key);
        req.user = payload
        next()
    } catch (err) {
        next(err)
    }
}

function roleMiddleware(...role) {
    return function(req,res,next) {
        if(!role.includes(req.user.role)) throw new Unauthenticated("don't have access this route")
        next()
    }
}

module.exports = { authMiddleware, roleMiddleware }