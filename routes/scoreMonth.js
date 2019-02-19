var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let userid = req.body.userid;
    if (userid) {
        res.send({
            data: [{
                ID: 1,
                UserID: 66,
                CreateTime: '2019-02-05',
                Money: 100
            }]
        })
    }
});

module.exports = router;
