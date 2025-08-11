const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;

const schemaTodos = new Schema({
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
        ref: 'Category',
        required:true,
    },
    date: {
        type: Date,
        default: null
    },
    image: {
        type: String,
        default: ""
    },
    id_user: {
        type: Types.ObjectId,
        ref: 'User',
        default:""
    }
}, {
    timestamps: true,
})

module.exports = model("Todo", schemaTodos);