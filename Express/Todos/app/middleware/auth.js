const Unauthenticated = require("../errors/unauthenticated");
const { verifyToken } = require("../libs/jwt");
const userModel = require("../api/v1/models/users");
const Forbidden = require("../errors/Forbidden");

async function authMiddleware(req, res, next) {
     try {
          const { authorization } = req.headers;
          if(!authorization) throw new Unauthenticated("Invalid authentication");
          const token = authorization.split(" ")[1];
          const payload = await verifyToken(token);
          req.user = payload;
          next();
     }catch(err) {
          next(err);
     }
}

async function verifyMiddleware(req,res,next) {
     try {
          const user = await userModel.findById(req.user._id);
          if(!user) throw new Unauthenticated("Invalid authentication");
          if(!user.is_verified) throw new Unauthenticated("Invalid authentication")
          next();
     }catch(err) {
          next(err);
     }
}

function roleMiddleware(...role) {
   return (req,res,next) => {
          try {
               const user = req.user;
               if(!user) throw new Unauthenticated("Invalid authentication");
               if(!role.includes(user.role)) throw new Forbidden("Access denied");
               next()
          }catch(err) {
               next(err)
          }
   }
}

module.exports = {authMiddleware , verifyMiddleware, roleMiddleware}