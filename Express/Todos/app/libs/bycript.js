const bcryptJS = require("bcryptjs");

// HAS...
async function hashing(password , salt) {
     return await bcryptJS.hash(password , salt);
}

async function compare(yourPassword , TaegetPassword) {
     return await bcryptJS.compare(yourPassword , TaegetPassword);
}

module.exports = {hashing , compare};