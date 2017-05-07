let express = require('express');
let {Token} = require('../config');
let crypto = require('crypto');
let router = express.Router();
router.get('/', function (req, res) {
    let {signature, timestamp, nonce, echostr} = req.query;
    let str = [Token,timestamp, nonce].sort().join('');
    str =  crypto.createHash('sha1').update(str).digest('hex');
    if(signature == str){
        res.send(echostr);
    }else{
        res.send('wrong');
    }
});
module.exports = router;