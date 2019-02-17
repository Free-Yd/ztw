var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');//请求日志

var indexRouter = require('./routes/index');
var svgCaptchaRouter = require('./routes/svgCaptcha');
var LoginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: 'ztw',//数据进行加密的字符串
    name: 'sesssionID',//表示cookie的name
    resave: true,//指每次请求都重新设置session
    saveUninitialized: false,//指无论有没有session cookie，每次请求都设置个session cookie
    cookie: {
        maxAge: 1000 * 60 * 3//cookie过期时间，毫秒
    }
}));

app.use('/', indexRouter);
app.use('/api/GetVerifyCode', svgCaptchaRouter);
app.use('/api/Login', LoginRouter);
    
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
