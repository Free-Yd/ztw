var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let userid = req.body.userid;
    if (userid) {
        res.send([{
            ID: 2,
            GroupName: '优化中',
        }, {
            ID: 1,
            GroupName: '暂停',
        }])
    }
});

module.exports = router;
