'use strict';
var router = require('express').Router();
module.exports = router;

var mongoose = require('mongoose');
var genre = mongoose.model('Genre')

router.get('/', function(req, res) {
	genre.find({}).exec()
		.then(function(data) {
			res.json(data);
		})
		.then(null, function(err) {
			res.json(err)
		})
})

router.get('/:genre', function(req, res) {
	genre.find({
			name: req.params.genre
		}).exec()
		.then(function(data) {
			res.json(data);
		})
		.then(null, function(err) {
			res.json(err)
		})
})