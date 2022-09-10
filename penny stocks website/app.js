var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var multinomial_naive_dataRouter = require('./routes/multinomial_naive_data');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/multinomial_naive_data", multinomial_naive_dataRouter);

app.use(express.static(path.join(__dirname, './my-app/build')));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, './my-app/build'));
});

module.exports = app;
