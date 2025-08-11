const router = require("express").Router();

router.get("/" , (req,res,next) => {
    res.status(200).json({status:"success" , message:"Welcome to Todos"});
})

module.exports = router;