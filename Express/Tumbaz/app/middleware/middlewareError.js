function MiddlewareError(err,req,res,next) {
     return res.status(err.status || 500).json({
          status:'ERROR',
          message:err.message || 'INTERNAL SERVER ERROR',
     });
}

module.exports = MiddlewareError;