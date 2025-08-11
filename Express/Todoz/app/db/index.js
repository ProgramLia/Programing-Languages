// IMPORT...
const mongoose = require("mongoose");
const { DB_URL } = require("../config");

mongoose.connect(DB_URL)
.then(()=> console.log(`SUCCESS CONNECT TO MONGODB`))
.catch(err=> console.log(err));
const DB = mongoose.connection;

module.exports = DB;