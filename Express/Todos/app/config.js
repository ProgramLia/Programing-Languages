// CALL THE LIBRARY...
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    db_url:process.env.DB_URL,
    secret_key:process.env.SECRET_KEY,
    google_app_password:process.env.GOOGLE_APP_PASSWORD
}