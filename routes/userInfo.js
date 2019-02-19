var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let userid = req.body.userid;
    if(userid){
        res.send({
            Account:'A会员',
            gradeName:'星钻会员',
            Amount:'1000',
            KeyCount:'50',
            Mobile:'11111111111'
        })
    }
});

module.exports = router;
