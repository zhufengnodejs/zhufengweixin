let getData =  (url)=>{
    return new Promise(function(resolve,reject){
        require('request')({url,json:true},function(err,response,body){
            if(err){
                reject(err);
            }else{
                resolve(body);
            }
        })
    });
}
module.exports = getData;