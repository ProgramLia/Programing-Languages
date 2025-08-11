const jwt = require("jsonwebtoken");
const { secret_key } = require("../config");

function createToken(payload) {
    return jwt.sign(payload, secret_key, { expiresIn: '1d' });
}

function isVerified(token) {
    return jwt.verify(token, secret_key);
}

module.exports = {createToken, isVerified}