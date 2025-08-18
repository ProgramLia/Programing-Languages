const dotenv = require("dotenv");
dotenv.config();

module.exports = {
     DB_URL:process.env.DB_URL,
     PORT:process.env.PORT,
     JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
     EMAIL:process.env.EMAIL,
     GOOGLE_APP_PASSWORD:process.env.GOOGLE_APP_PASSWORD,
}