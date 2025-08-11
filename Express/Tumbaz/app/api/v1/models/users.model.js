const mongoose = require("mongoose");
const bycriptjs = require("bcryptjs");
const {Schema , model} = mongoose;

const userSchema = new Schema({
     username:{ 
          type:String, 
          minLength:[5 , 'Username minimal 5 karakter'], 
          required:[true , 'Username wajib diisi']},
     email:{
          type:String, 
          unique:[true , 'Email sudah digunakan'], 
          required:[true , 'Email wajib diisi']},
     password:{
          type:String, minLength:[5, 'Password minimal terdiri dari 5 karakter'], 
          required:[true , 'Password wajib diisi']},
     verified:{
          type:Boolean , 
          default:false},
     role:{type:String , 
          enum:['user' , 'admin'], 
          default:"user"},
} , {timestamps:true});

userSchema.pre("save" , async function(next) {
     if(this.isModified("password")) this.password = await bycriptjs.hash(String(this.password) , 12);
     next();
});

module.exports = model('User' , userSchema);
