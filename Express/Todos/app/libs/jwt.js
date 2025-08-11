// CALL THE LIB...
const JWT = require("jsonwebtoken");
const { secret_key } = require("../config");

async function createToken(payload , exp) {
     return await JWT.sign(payload , secret_key , {expiresIn:exp})
}

async function verifyToken(token) {
     return await JWT.verify(token, secret_key)
}

module.exports = {createToken, verifyToken}