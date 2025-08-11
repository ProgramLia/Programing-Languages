const { NotFound, Unauthorized } = require("../errors");
const { decodeToken } = require("../utils/jwt");
const User = require("../api/v1/models/users.model")

async function authMiddleware(req, res, next) {
     try {
          const { authorization } = req.headers;
          if (!authorization) throw new Unauthorized("Token otorisasi tidak valid");
          const token = await decodeToken(authorization.split(" ")[1]);
          const user = await User.findById(token.user_id);
          if (!user) throw new NotFound("Pengguna tidak ditemukan");
          req.user = user;
          next();
     } catch (err) {
          next(err);
     }
}

module.exports = authMiddleware;