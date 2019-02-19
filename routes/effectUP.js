var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let userid = req.body.userid;
    if (userid) {
        res.send({
            data: [{
                ID: 1,
                Title: 1,
                count: 10,
                p: 50
            },{
                ID: 1,
                Title: 2,
                count: 20,
                p: 0
            },{
                ID: 1,
                Title: 3,
                count: 30,
                p: 100
            }]
        })
    }
});

module.exports = router;
