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

Trello.prototype.search = function (searchQuery) {
	const parameters = {
		query: searchQuery,
		idBoards: 'mine',
		modelTypes: 'all',
		board_fields: 'all',
		boards_limit: '1000',
		card_fields: 'all',
		cards_limit: '1000',
		card_board: 'true',
		card_list: 'true',
		card_members: 'true',
		card_stickers: 'true',
		card_attachments: 'true',
		organization_fields: 'all',
		organizations_limit: '1000',
		member_fields: 'all',
		members_limit: '1000',
		partial: 'false'
	};

	return net.get(config, 'search', null, parameters)
		.then(response => JSON.parse(response.body));
};

module.exports = Trello;
