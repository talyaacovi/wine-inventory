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
		const email = { email: req.body.email };
		const password = { password: req.body.password };

		let newUser = new User({
			_id: new mongoose.Types.ObjectId(),
			email: email,
			password: password
		});

		newUser.save((err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				console.log('User successfully saved!');
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