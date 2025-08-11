// NOT FOUND ROUTE...
async function notFound(req,res,next) {
     return res.status(404).json({status:"error" , message:"Route Not Found"});
}

module.exports = notFound;