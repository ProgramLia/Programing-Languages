// IMPORTS...
const express = require("express");
const welcome_controller = require("../controllers/welcome.controller");
const router = express.Router();

router.get("/" , welcome_controller);

// EXPORTS...
module.exports = router;