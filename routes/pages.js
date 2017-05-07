let express = require('express');
let uuid = require('uuid');
let crypto = require('crypto');
let {appID,appsecret,Token} = require('../config');
let router = express.Router();
let getTicket = require('../ticket');
router.get('/record', async function (req, res) {
    let ticket = await getTicket();
    let nonceStr = Math.random().toString(36).substr(2,15);
    let timestamp = parseInt(Date.now()/1000);
    //注意参数名全是小写
    let str = [`noncestr=${nonceStr}`,`jsapi_ticket=${ticket}`,`timestamp=${timestamp}`,`url=http://work.zhufengpeixun.cn/pages/record`].sort().join('&');
    let signature  =  crypto.createHash('sha1').update(str).digest('hex');
    res.render('record',{
        appId:appID,
        timestamp,
        nonceStr,
        signature
    });
});


router.get('/demo', async function (req, res) {
    let ticket = await getTicket();
    let nonceStr = Math.random().toString(36).substr(2,15);
    let timestamp = parseInt(Date.now()/1000);
    //注意参数名全是小写
    let str = [`noncestr=${nonceStr}`,`jsapi_ticket=${ticket}`,`timestamp=${timestamp}`,`url=http://work.zhufengpeixun.cn/pages/demo`].sort().join('&');
    let signature  =  crypto.createHash('sha1').update(str).digest('hex');
    res.render('demo',{
        appId:appID,
        timestamp,
        nonceStr,
        signature
    });
});
module.exports = router;