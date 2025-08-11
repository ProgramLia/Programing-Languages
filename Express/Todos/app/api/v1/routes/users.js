// CALL THE LIB...
const router = require("express").Router();

const { authMiddleware, roleMiddleware } = require("../../../middleware/auth");
const upload = require("../../../middleware/multer");
// CONTROLLERS...
const { register, login, accountVerify, resendOTP, getProfile, updateProfile, deleteProfile, getUsers } = require("../controllers/users");

// REGISTER...
router.post("/auth/register" , register);

// LOGIN...
router.post("/auth/login" , login)

// Verify...
router.post("/auth/otp-verify" , authMiddleware , accountVerify );

// resendOTP...
router.post("/auth/resend-otp" , authMiddleware ,  resendOTP);

// all users..
router.get("/users"  , authMiddleware , roleMiddleware("admin") , getUsers);

// profile...
router.get("/profile/:id" , authMiddleware , getProfile)
router.put("/profile/:id" , authMiddleware , upload.single("image") , updateProfile )
router.delete("/profile/:id" , authMiddleware , deleteProfile);

module.exports = router;