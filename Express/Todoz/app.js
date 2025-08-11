// EXPRESS-GENERATOR IMPORT SETUP...
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// MY-SETUP...
const welcome = require("./app/api/v1/routes/index");

// EXPRESS-GENERATOR SETUP
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// MY-SETUP...
const baseURL = "/api/v1/"
app.use(baseURL , welcome)

module.exports = app;
