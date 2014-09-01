var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NerdSchema   = new Schema({
	name: String,
	language: String
});

module.exports = mongoose.model('Nerd', NerdSchema);