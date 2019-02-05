// app.js
var express = require('express');
//var enforce = require('express-sslify');
var session = require('express-session');
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var fs = require('fs');
var $ = require('jQuery');




//var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
var server = require('http').createServer(app);

/*
var app = express();
app.use(enforce.HTTPS());

//-- 
var options = {
    key: fs.readFileSync('cert/PrivateKey.txt'),
    cert: fs.readFileSync( 'cert/PrimaryCert.cer' )
};
var server = require('https').createServer(options, app);
*/

//--
var io = require('socket.io')(server);

//-- local
var routes = require('./routes.js')(app);
var sockets = require('./sockets.js')(io);
var mongo = require('./mongo.js')(app, fs);
var fu = require('./fileupload.js')(app, fileUpload);
var filesystem = require('./filesystem.js')(app, fs);

//-- 
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/models'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/render'));
app.use(express.static(__dirname + '/render/models'));
app.use(express.static(__dirname + '/render/images'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/js'));


//var key = fs.readFileSync('encryption/private.key');
//var cert = fs.readFileSync( 'encryption/primary.crt' );
//var ca = fs.readFileSync( 'encryption/intermediate.crt' );

//var key = fs.readFileSync('cert/PrivateKey.txt');
//var cert = fs.readFileSync( 'cert/PrimaryCert.cer' );
//var ca = fs.readFileSync( 'cert/IntermediateCert.cer' );

//var options = {
//    key: fs.readFileSync('cert/PrivateKey.txt'),
//    cert: fs.readFileSync( 'cert/PrimaryCert.cer' )
//};

////https.createServer(sslOptions, server).listen(8443)

//var server = require('https').createServer(options, app);

server.listen(4200, function(){
	console.log('Server started on 4200...dddd');
});