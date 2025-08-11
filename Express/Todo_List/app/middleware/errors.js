function errorHandler(err,req,res,next) {
    if(err.message == "invalid signature") {
        return res.status(403).json({status:"error" , message:err.message});
    }
    return res.status((err.status || 500)).json({status:"error" , message:err.message || "Internal server error"});
}

function notFound(req,res,next) {
    return res.status(404).json({status:"error" , message:"Route not found"});
}

module.exports = {errorHandler, notFound}