const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { title } = require('process');

// middleware
const {globalError , notFound} = require('./app/middleware/error-handler');
const {NotFound } = require('./app/errors/NotFound')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const v1 = '/api/v1'

// routes
const userRoutes = require('./app/api/v1/routes/users');
const { authMiddleware } = require('./app/middleware/auth');

// welcome...
app.get(v1 , (req,res) => res.status(200).json({status:"success" , message:"Welcom to  Todos", author:"Mazumala"}));
app.use(v1, userRoutes)
// 

// menangkap error yang terjadi di BackEnd...
app.use(globalError)

// app use , merupakan middleware untuk semua jadi selama route tidak ada di atas maka akan menampilkan error custom kita
app.use(notFound)

app.use(authMiddleware)

module.exports = app;
