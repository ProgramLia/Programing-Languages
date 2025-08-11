// ERROR MIDDLEWARE...
async function errorMiddleware(err,req,res,next) {
     const errorCustom = {
          status:err.status,
          message:err.message,
     }

     console.log(err);
     
     return res.status(errorCustom.status || 500).json({status:"error" , message:errorCustom.message || 'Internal server error'})
}

module.exports = errorMiddleware;