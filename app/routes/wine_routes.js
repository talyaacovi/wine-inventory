const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var path = require('path');
var User = require('../schema.js');

module.exports = function(app, db) {
	app.get('/wines/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		db.collection('wine').findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(item);
			}
		});
	});

	app.post('/add-wine', (req, res) => {
		const wine = { name: req.body.name };
		db.collection('wine').insert(wine, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});


	app.post('/add-user', (req, res) => {
		let email = { email: req.body.email };
		let password = { password: req.body.password };

		let newUser = new User(req.body);

		newUser.save((err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred.' });
			} else {
				res.send({ 'msg': 'User successfully saved!' });
			}
		});
	});

	app.post('/login', (req, res) => {
		let email = req.body.email;
		let password = req.body.password;

		User.findOne({ email: email }, 'password', (err, response) => {
			if (err || response === null) {
				res.send({ 'error': 'This email address does not have an account.' });
			} else {
				db_password = response.password;
				if (db_password === password) {
					res.send({ 'msg': 'Password correct!'});
				} else {
					res.send({ 'msg': 'Incorrect password!'});
				}

			}
		});
	});

	app.post('/update', function(req, res) {
		var item = req.body.item;
		listitems.data.push(item);
		res.json({ 'data': 'success' });
	});

	app.get('/get-inventory', (req, res) => {
		db.collection('wine').find({}).toArray(function(err, result) {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.json({ 'data': result });
			}
		});
	});

}