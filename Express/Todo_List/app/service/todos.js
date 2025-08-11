const todoModel = require("../api/v1/models/todos");
const userModel = require("../api/v1/models/users")
const { BadRequest } = require("../errors/errors");

async function todoService(req,set) {
    let handler;
    const {idTodo} = req.params;
    const {title, desc, category_id} = req.body;

    set === "create" ? handler = await todoModel.create({title, desc, category_id, user_id:req.user._id}) : null;
    set === "update" ? handler = await todoModel.findOneAndUpdate({_id:idTodo} , {title, desc, category_id, user_id:req.user._id} ) : null;
    set === "delete" ? handler = await todoModel.findOneAndDelete({_id:idTodo}) : null;
    
    if(!handler) throw new BadRequest("Id not found");
    return handler;
}

async function getData(req) {
    const data = await todoModel.find();
    const result = data.filter(item=> item.user_id.toString() ==  req.user._id.toString());
    return result;
}

module.exports = {todoService, getData}