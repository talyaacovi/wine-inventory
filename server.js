'use strict'

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
var db = require('./config/db');
var path = require('path');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
})); 

// MongoClient.connect(db.url, (err, database) => {
mongoose.connect(db.url, (err, database) => {
	if (err) return console.log(err)
	// db = database.db('wine')
	require('./app/routes')(app, database);

	app.listen(3000, () => {
	console.log('listening on port 3000!');
	});

// app.use('/', express.static(__dirname + "/app/static/"));
// app.use('/wine', express.static(__dirname + "/app/build/"));

app.get('/app/build*', (req, res) => {
	res.sendFile(path.join(__dirname, 'app/build/transformed.js'))
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'app/index.html'));
	console.log(path.join(__dirname, 'app/index.html'));
});


});