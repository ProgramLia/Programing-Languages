// CALL THE SERVICE...
const todoService = require("../../../service/todos");

// TODO FUNCTIONS...
async function getTodos(req,res,next) {
     try {
          const response = await todoService(req , "read");
          res.status(200).json({status:"success" , data:response});
     }catch(err) {
          next(err);
     }
}

async function createTodos(req,res,next) {
     try {
          const response = await todoService(req, "create");
          res.status(200).json({status:"success" , message:"Todo created" , data:response})
     }catch(err) {
          next(err)
     }
}

async function updateTodos(req,res,next) {
     try {
          const response = await todoService(req, "update");
          res.status(200).json({status:"success" , message:"Todo updated" , data:response})
     }catch(err) {
          next(err)
     }
}

async function deleteTodos(req,res,next) {
     try {
          await todoService(req, "delete");
          res.status(200).json({status:"success" , message:"Todo deleted"})
     }catch(err) {
          next(err)
     }
}

module.exports = {getTodos, createTodos, updateTodos, deleteTodos};