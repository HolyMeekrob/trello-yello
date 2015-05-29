var Config = require('./config');
var Card = require('./card');

var config;
var net;

var objTypes = {
	card: Card
};

//var _myKey = 'cc1c7ac7033e68645a146dfc53c01b40';
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
	return new objTypes[objType](config, id, net);
};

module.exports = Trello;
