var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let userid = req.body.userid;
    if (userid) {
        res.send({
            data: [{
                ID: 1,
                KeyValue: '算法分',
                GroupID: 1,
                WebID: '百度PC',
                Address: 'www.baidu.com',
                BaiduIndex: 50,
                Price: 5,
                TodayPrice: 2,
                StatusHtml: '优化中',
                UpdateTime: '2019-02-04',
                StartRank: 4,
                NewRank: 2,
                EffectValue: 2,
                CreateTime: '2019-02-02',
                SuccessTime: '2019-02-03',
                PayQty: 1,
            }]
        })
    }
});

module.exports = router;
