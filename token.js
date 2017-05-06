let request = require('request');
let {appID,appsecret,Token} = require('./config');
let url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appsecret}`;
var cache = require('memory-cache');
const ACCESS_TOKEN = 'access_token';
let requestToken =  ()=>{
    return new Promise(function(resolve,reject){
        request({url,json:true},function(err,response,body){
            if(err){
                reject(err);
            }else{
                resolve(body);
            }
        })
    });
}
let getToken = async ()=>{
    let access_token = cache.get(ACCESS_TOKEN);
    if (!access_token) {
        let tokenObj = await requestToken();
        access_token = tokenObj['access_token'];
    }
    return access_token;
}
module.exports = getToken;
