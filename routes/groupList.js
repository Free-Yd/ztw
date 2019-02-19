var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let userid = req.body.userid;
    if (userid) {
        res.send({
            data: [{
                UserID: '23',
                ID: '14',
                GroupName: '优化1',
                RndClickPer: 50
            }, {
                UserID: '45',
                ID: '6',
                GroupName: '优化2',
                RndClickPer: 100
            }, {
                UserID: '22',
                ID: '66',
                GroupName: '优化3',
                RndClickPer: 70
            }, {
                UserID: '8',
                ID: '49',
                GroupName: '优化4',
                RndClickPer: 0
            }]
        })
    }
});

module.exports = router;
