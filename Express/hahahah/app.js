// Express Setup...
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// My Setup...
const welcome = require("./app/api/v1/routes/welcome.route");
const MiddlewareNotFound = require('./app/middleware/middlewareNotFound');
const MiddlewareError = require('./app/middleware/middlewareError');
const baseURL = "/api/v1"
const auth = require("./app/api/v1/routes/auth.route");
const session = require("express-session");

// Express Setup...
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'rahasia_anda',          
  resave: false,                   
  saveUninitialized: false,        
  cookie: { maxAge: 60000 }      
}));

// My Setup...
app.use(baseURL, welcome);
app.use(baseURL, auth);
app.use(MiddlewareNotFound);
app.use(MiddlewareError);

module.exports = app;
