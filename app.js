var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var svgCaptchaRouter = require('./routes/svgCaptcha');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: '12345',//数据进行加密的字符串
    name: 'name',//表示cookie的name
    cookie: {
        maxAge: 60000//cookie过期时间，毫秒
    },
    resave: false,//指每次请求都重新设置session
    saveUninitialized: true,//指无论有没有session cookie，每次请求都设置个session cookie

}));
    
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/GetVerifyCode', svgCaptchaRouter);

module.exports = app;
