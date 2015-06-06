"use strict";

const Config = require('./config');
const TrelloObj = require('./trelloObj');

let config;
let net;

const Trello = function (key, token, netService) {
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
