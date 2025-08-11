const { registerService, loginService, serviceVerify } = require("../../../service/users");

async function register(req,res,next) {
    try {
        const response = await registerService(req);
        res.status(200).json({status:"success" , message:"user created" , token:response});
    }catch(err) {
        next(err);
    };
};

async function login(req,res,next) {
    try {
        const response = await loginService(req);
        res.status(200).json({status:"success", token:response})
    }catch(err) {
        next(err);
    }
}

async function accountVerify(req,res,next) {
    try {
        const response = await serviceVerify(req);
        res.status(200).json({status:"success" , message:"Welcome user good luck"})
    }catch(err) {
        next(err);
    }
}

module.exports = {register, login, accountVerify}
