// charging models
var Nerd = require('./models/nerd');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/nerds', function(req, res) {

		// use mongoose to get all nerds in the database
		Nerd.find(function(err, nerds) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(nerds); // return all nerds in JSON format
		});
	});

	app.get('/api/nerds/:nerd_id', function(req, res) {

		// use mongoose to get all nerds in the database
		Nerd.findById(req.params.nerd_id, function(err, nerd) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(nerd); // return all nerds in JSON format
		});
	});

	app.post('/api/nerds', function(req, res) {

		// create a new instance of the Nerd model
		var nerd = new Nerd(req.body);

		// save the nerd and check for errors
		nerd.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Nerd created!' });
		});

	});

	app.put('/api/nerds/:nerd_id', function(req, res) {

		// use mongoose to get all nerds in the database
		Nerd.findById(req.params.nerd_id, function(err, nerd) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			// update the nerds info
			nerd.name = req.body.name;
			nerd.language = req.body.language;

			// save the bear
			nerd.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Nerd updated!' });
			});
			
		});
	});


	app.delete('/api/nerds/:nerd_id', function(req, res) {

		// use mongoose to get all nerds in the database
		Nerd.remove({
				_id: req.params.nerd_id
			}, function(err, nerd) {

				// if there is an error retrieving, send the error. nothing after res.send(err) will execute
				if (err)
					res.send(err);

				res.json({ message: 'Nerd removed!' });
				
		});
	});

	// route to handle creating (app.post)
	// route to handle delete (app.delete)

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});

};