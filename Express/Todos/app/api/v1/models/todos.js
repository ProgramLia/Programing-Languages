// CALL THE LIBRRAY...
const mogoose = require("mongoose");
const { Schema, model, Types } = mogoose;

// TODO SCHEMA & MODEL...
const todoSchema = new Schema({
     title: {
          type: String,
          default: ""
     },
     desc: {
          type: String,
          default: ""
     },
     category_id: {
          type: Types.ObjectId,
          ref: "Category",
          required: true
     },
     date: {
          type: Date,
          default: null,
     },
     image: {
          type: String,
          default: "",
     },
     user_id: {
          type: Types.ObjectId,
          ref: "User",
          required: true,
     }
}, {
     timestamps: true
})

module.exports = model("Todos", todoSchema);