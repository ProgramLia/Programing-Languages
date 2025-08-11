// CALL THE LIBRRAY...
const mogoose = require("mongoose");
const {Schema, model} = mogoose;

// USER SCHEMA & MODEL...
const userSchema = new Schema({
     username:{
          type:String,
          default:""
     },
     email:{
          type:String,
          unique:true,
          required:true
     },
     password:{
          type:String,
          required:true,
          minLenght:6
     },
     image:{
          type:String,
          default:"",
     },
     role:{
          type:String,
          enum:["user" , "admin"],
          default:"user",
     },
     otp:{
          type:String,
          maxLenght:6
     },
     is_verified:{
          type:Boolean,
          default:false
     }
}, {
     timestamps:true
})

module.exports = model("User" , userSchema);