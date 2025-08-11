const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config");

function encodeToken(payload, expire = "1d") {
     return jwt.sign(payload , JWT_SECRET_KEY , {expiresIn:expire});
}

function decodeToken(token) {
     return jwt.verify(token , JWT_SECRET_KEY);
}

module.exports = {encodeToken , decodeToken}