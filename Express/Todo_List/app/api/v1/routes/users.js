const { userVerify, authMiddleware } = require("../../../middleware/auth");
const { reSendOTP } = require("../../../service/users");
const { register, login, accountVerify } = require("../controllers/users");
const router = require("express").Router();

router.post("/auth/register" , register);

router.post("/auth/login" , login);

router.post("/auth/resend-otp" , authMiddleware, reSendOTP);

router.post("/auth/verify" , authMiddleware , accountVerify);


module.exports = router;