// CALL THE LIBRARY...
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// CALL MY ROUTES...
const welcome = require("./app/api/v1/routes/index");
const user = require("./app/api/v1/routes/users");
const todos = require("./app/api/v1/routes/todos");

// CALL MY FUNCTIONS...
const errorMiddleware = require('./app/middleware/errors');
const notFound = require('./app/middleware/notFound');

// SETUP FROM EXPRESS JS...
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// MY CODE...
const BaseURL = "/api/v1/"

// WELCOME...
app.use(BaseURL , welcome);

// USER...
app.use(BaseURL , user);

// TODOS...
app.use(BaseURL , todos);

// ERROR-MIDDLEWARE...
app.use(errorMiddleware)

// NOTFOUND-MIDDLEWARE...
app.use(notFound)

module.exports = app;
