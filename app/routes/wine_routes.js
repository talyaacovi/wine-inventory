let listitems = {'data': ['Grenache', 'Trousseau', 'Carignane']};

module.exports = function(app, db) {
	const collection = 
	app.post('/wines', (req, res) => {
		const wine = { name: req.body.body, variety: req.body.title };
		db.collection('wine').insert(note, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});
	app.post('/update', function(req, res) {
		var item = req.body.item;
		listitems.data.push(item);
		res.json({ 'data': 'success' });
	});
	app.get('/get-inventory', function(req, res) {
		res.json(listitems)
	});
};

