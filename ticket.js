let getData = require('./request');
let {appID, appsecret, Token} = require('./config');
var cache = require('memory-cache');
let getToken = require('./token');
const TICKET = 'TICKET';
let getTicket = async () => {
    let ticket = cache.get(TICKET);
    if (!ticket) {
        let token = await getToken();
        let url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${token}&type=jsapi`;
        let ticketObj = await getData(url);
        ticket = ticketObj.ticket;
    }
    return ticket;
}
module.exports = getTicket;
