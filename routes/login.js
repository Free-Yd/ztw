var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let username = req.body.username,
        password = req.body.password,
        checkCode = req.body.checkCode,
        sessionCaptcha = req.session.captcha;
    if (sessionCaptcha != checkCode) {
        res.send({
            code: 500,
            error: '验证码不正确'
        })
    } else {
        res.send({
            code: 200,
            msg: "操作成功",
            item: {
                name: username,
                password: password,
                checkCode: checkCode
            },
            error: ''
        });
    }

});

module.exports = router;