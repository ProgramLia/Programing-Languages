// CALL THE LIBRARY...
const mongoose = require("mongoose");
const { db_url } = require("../config");

// USE THE LIBRARY...
mongoose.connect(db_url).then(()=> console.log("success connect to mongoose")).catch(err=> console.log(err));
const db = mongoose.connection;

module.exports = db;