'use strict'

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = __dirname + "/app/static/";
const MongoClient = require('mongodb').MongoClient;
var db = require('./config/db');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
})); 

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/test.html');
});


app.use('/', express.static(path));

MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err)
	db = database.db('wine')
	require('./app/routes')(app, db);

	app.listen(3000, () => {
	console.log('listening on port 3000!');
	});
});