const mongoose = require("mongoose");
const {Schema, model, Types} = mongoose;

let todoSchema = new Schema({
    title: {
        type: String,
        default:"",
    },
    desc: {
        type: String,
        default:"",
    },
    date: {
        type:Date,
    },
    image: {
        type: String,
        default:"",
    },
    user_id:{ 
        type: Types.ObjectId,
        ref: "User",
        require:true,
    },
    category_id: {
        type: Types.ObjectId,
        ref: "Category",
        require:true,
    },
} , {
    timestamps:true,
})

module.exports = model("Todo" , todoSchema);