let express = require('express');
let path = require('path');
let crypto = require('crypto');
let app = express();
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
let index = require('./routes/index');
let pages = require('./routes/pages');
app.use('/',index);
app.use('/pages',pages);
app.listen(8080)