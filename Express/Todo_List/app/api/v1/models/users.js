const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password: {
        type:String,
        required:true
    },
    image: {
        type:String,
        default:"",
    },
    role: {
        type:String,
        enum: ["user" , "admin"],
        default:"user"
    },
    otp: {
        type:Number,
        min:0,
        max:999999,
        required:true
    },
    is_verified: {
        type:Boolean,
        default:false
    }
}, {
    timestamps:true,
})

module.exports = model("User" , userSchema);