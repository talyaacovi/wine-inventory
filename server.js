'use strict'

var express = require('express');
var app = express();
var path = __dirname + "/app/static/";

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.use('/', express.static(path));

app.listen(3000, function() {
	console.log('listening on port 3000!');
});