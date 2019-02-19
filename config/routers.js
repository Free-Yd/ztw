//配置接口

let routers = (app) => {
    var indexRouter = require('../routes/index');
    var svgCaptchaRouter = require('../routes/svgCaptcha');
    var LoginRouter = require('../routes/login');
    var userInfoRouter = require('../routes/userInfo');
    var groupListRouter = require('../routes/groupList');
    var keysRouter = require('../routes/keys');
    var groupALLRouter = require('../routes/groupALL');
    var effectUPRouter = require('../routes/effectUP');
    var scoreDayRouter = require('../routes/scoreDay');
    var scoreMonthRouter = require('../routes/scoreMonth');

    app.use('/', indexRouter);
    app.use('/api/GetVerifyCode', svgCaptchaRouter);
    app.use('/api/Login', LoginRouter);
    app.use('/api/UserInfo', userInfoRouter);
    app.use('/api/group_list', groupListRouter);
    app.use('/api/keys', keysRouter);
    app.use('/api/GroupALL', groupALLRouter);
    app.use('/api/EffectUP', effectUPRouter);
    app.use('/api/stat_score_day', scoreDayRouter);
    app.use('/api/stat_score_month', scoreMonthRouter);
}

module.exports = routers;
