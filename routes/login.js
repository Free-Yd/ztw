var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let username = req.body.username,
        password = req.body.password,
        checkCode = req.body.checkCode,
        sessionCaptcha = req.session.captcha;
    if (sessionCaptcha != checkCode) {
        res.send('3')
    } else {
        res.send('1|yaoda')
        // res.send({
        //     status: 200,
        //     ok: true,
        //     body: '1',
        //     msg: `登录成功，用户名为${username}，密码为${password}，验证码为${checkCode}`
        // });
    }

});

module.exports = router;
