'use strict'

let listitems = {'data': ['Grenache', 'Trousseau', 'Carignane']};

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var path = __dirname + "/app/static/";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
})); 

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/test.html');
});

app.get('/test', function(req, res) {
	res.json(listitems)
});

app.post('/update', function(req, res) {
	var item = req.body.item;
	listitems.data.push(item);
	res.json({ 'data': 'success' });
});

app.use('/', express.static(path));

// app.use('/api', router);

app.listen(3000, function() {
	console.log('listening on port 3000!');
});