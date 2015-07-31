'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	// these products are only available on this store
 	songs: [{
 		type: mongoose.Schema.Types.ObjectId,
 		ref: 'Song'
 	}],
 	albums: [{
 		type: mongoose.Schema.Types.ObjectId,
 		ref: 'Album'
 	}],
	date: {
		created: {
			type: Date, 
			default: Date.now
		}
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	name: {
		type: String,
		required: true,
		minlength: 3
	}
});

mongoose.model('Store', schema);
