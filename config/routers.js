//配置接口

let routers = (app) => {
    var indexRouter = require('../routes/index');
    var svgCaptchaRouter = require('../routes/svgCaptcha');
    var LoginRouter = require('../routes/login');
    var userInfoRouter = require('../routes/userInfo');
    var groupListRouter = require('../routes/groupList');
    var groupALLRouter = require('../routes/groupALL');

    app.use('/', indexRouter);
    app.use('/api/GetVerifyCode', svgCaptchaRouter);
    app.use('/api/Login', LoginRouter);
    app.use('/api/UserInfo', userInfoRouter);
    app.use('/api/group_list', groupListRouter);
    app.use('/api/GroupALL', groupALLRouter);
}

module.exports = routers;
