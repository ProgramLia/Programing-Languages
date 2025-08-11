// CALL THE LIBRARY...
const router = require("express").Router();

// welcome...
router.get("/" , (_,res)=> res.status(200).json({status:"success", message:"Welcome to Todos" }));

module.exports = router;