// IMPORT...
const router = require("express").Router();

router.get("/" ,  (_,res)=> {
     res.status(200).json({
          code:"200",
          status:"OK",
          message:"WELCOME TO TODOZ"
     })
})

module.exports = router;