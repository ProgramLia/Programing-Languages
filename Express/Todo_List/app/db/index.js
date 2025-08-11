const mongoose = require("mongoose");
const {db_url} = require("../config")

mongoose.connect(db_url).then(() => console.log("success connect to mongoDB")).catch(err=> console.log(err));

let db = mongoose.connection;

module.exports = db;