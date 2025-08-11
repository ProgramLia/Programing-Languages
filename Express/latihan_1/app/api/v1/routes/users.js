const router = require('express').Router();
const { authMiddleware, roleMiddleware } = require('../../../middleware/auth');
const { signUp, signIn, profile} = require('../controllers/users');

router.post("/auth/register" , signUp)
router.post("/auth/login" , signIn)
router.get("/profile" , authMiddleware , roleMiddleware('user', 'admin'),  profile)

module.exports = router