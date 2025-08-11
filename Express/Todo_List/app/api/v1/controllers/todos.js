const { todoService, getData } = require("../../../service/todos")

async function getTodo(req,res,next) {
    try {
        const response = await getData(req);
        res.status(200).json({status:"success" , data:response})
    }catch(err) {
        next(err)
    }
}

async function  createTodo(req,res,next) {
    try {
        const response = await todoService(req , "create");
        res.status(200).json({status:"success" , message:"Todo created"})
    }catch(err){
        next(err)
    }
}

async function  updateTodo(req,res,next) {
    try {
        const response = await todoService(req , "update");
        res.status(200).json({status:"success" , message:"Todo updated"})
    }catch(err){
        next(err)
    }
}

async function  deleteTodo(req,res,next) {
    try {
        const response = await todoService(req , "delete");
        res.status(200).json({status:"success" , message:"Todo deleted"})
    }catch(err){
        next(err)
    }
}

module.exports = {createTodo, updateTodo, deleteTodo, getTodo};