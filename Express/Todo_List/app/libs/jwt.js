const jwt = require("jsonwebtoken");
const { secret_key } = require("../config");

async function createToken(payload,exp) {
    return jwt.sign(payload, secret_key, {expiresIn:exp});
}

async function isVerified(token) {
    return jwt.verify(token, secret_key);
}

module.exports = {isVerified, createToken}