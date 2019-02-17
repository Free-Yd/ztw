var express = require('express');
var svgCaptcha = require('svg-captcha');
var router = express.Router();

/* GET svgCaptcha listing. */
router.get('/', function (req, res, next) {
  var captcha = svgCaptcha.create({
    size: 5, // 验证码长度
    ignoreChars: '0o1i', // 验证码字符中排除 0o1i
    noise: 4, // 干扰线条的数量
    height: 40
  });
  req.session.captcha = captcha.text.toLowerCase(); //存session用于验证获取文字码
  req.session.save();

  res.type('svg');
  res.status(200).send(captcha.data);
  console.log(captcha.text)
});

module.exports = router;
