// app.js
var express = require('express');
//var $ = require('jQuery');

var app = express();

var server = require('http').createServer(app);

app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

//-- local
//var routes = require('./routes.js')(app);

//-- 
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/js'));

server.listen(80, function(){
	console.log('Server started on 8080...dddd');
});