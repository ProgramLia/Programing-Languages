// BUILD-IN-FUNCTIONS...
async function welcome_controller(req,res,next) {
     res.status(200).json({
          code:'200',
          status:'OK',
          message:'WELCOME TO TUMBAZ REST API 😉'
     })
}

// EXPORTS...
module.exports = welcome_controller;