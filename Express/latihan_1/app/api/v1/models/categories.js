const mongoose =  require("mongoose");
const { Schema, model} = mongoose;

const schemaCategories = new Schema({
    name: {
        type: String,
        default:""
    }
}, {
    timestamps:true
})

module.exports = model("Category" , schemaCategories);