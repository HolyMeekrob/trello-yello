var Config = require('./config'); 
var Card = require('./card');
 
var config;

//var _myKey = 'cc1c7ac7033e68645a146dfc53c01b40';
var Trello = function (key, token) {
	config = new Config (key, token, 1);
};

Trello.prototype.getCard = function (id) {
	if (!id) {
		throw new Error('Must supply an id.');
	}
	return new Card(config, id);
};

module.exports = Trello;