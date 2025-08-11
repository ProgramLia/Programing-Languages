// CALL THE MODELS...
const todoModel = require("../api/v1/models/todos");
const NotFound = require("../errors/notFound");

// EXPRESS...
const fs = require("fs");
const path = require("path");

// SERVICE FUNCTION...
async function todoService(req, set) {
     const { title, desc, category_id } = req.body;
     const { _id } = req.user;
     const { id } = req.params;

     // IMAGE-DIRECTOTY
     const todo = await todoModel.findById(id);

     let handler;

     set === "create" ? handler = await todoModel.create({ title, desc, category_id, user_id: _id, image:req.file ? `/images/${req.file.filename}` : '' }) : null;
     set === "read" ? handler = await todoModel.find() : null;
     if (set === "update") {
          const dir = path.join(__dirname , "../../public" , todo.image);
          if(req.file && todo.image) {
               fs.unlink(dir , (err)=> console.log(err))
          }
          handler = await todoModel.findOneAndUpdate({ _id: id }, { title, desc, image: req.file ? `/images/${req.file.filename}` : '' })
     }

     if(set === "delete")  {
          const dir = path.join(__dirname , "../../public" , todo.image);
          if(todo.image) {
               fs.unlink(dir , (err)=> console.log(err))
          }
          handler = await todoModel.findOneAndDelete({ _id: id })
     }

     return handler;
}

module.exports = todoService;
