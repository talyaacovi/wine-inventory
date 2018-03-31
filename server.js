'use strict'

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var path = __dirname + "/app/static/";

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/test.html');
});

app.get('/test', function(req, res) {
	res.json({user: 'tobi'})
});

app.use('/', express.static(path));

// app.use('/api', router);

app.listen(3000, function() {
	console.log('listening on port 3000!');
});