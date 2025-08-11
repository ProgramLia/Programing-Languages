const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// your code...
const welcome = require("./app/api/v1/routes/index");
const todos = require("./app/api/v1/routes/todos");
const users = require("./app/api/v1/routes/users")
const { errorHandler, notFound } = require('./app/middleware/errors');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// baseURL...
const baseURL = "/api/v1/";

// welcome...
app.use(baseURL , welcome);

// Todos...
app.use(baseURL , todos )

// Users...
app.use(baseURL , users)

// middleware error...
app.use(errorHandler);
app.use(notFound);

module.exports = app;
