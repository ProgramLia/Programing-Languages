// IMPORTS...
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// END-POINT...
const welcome = require("./app/api/v1/routes/welcome.route");

// EXPRESS SETUP...
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// MY-CUSTOMIZE...
app.use(welcome);

// EXPORTS...
module.exports = app;
