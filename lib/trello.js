var Config = require('./config');
var TrelloObj = require('./trelloObj');

var config;
var net;

var Trello = function (key, token, netService) {
	if (!netService) {
		throw new Error('Key, token, and network service are required.');
	}
	config = new Config (key, token, 1);
	net = netService;
};

Trello.prototype.get = function (objType, id) {
	if (!id) {
		throw new Error('Must supply a valid object type and id.');
	}
	return new TrelloObj(objType, config, id, net);
};

module.exports = Trello;
