const R = require('Ramda');
const Config = require('./config');
const TrelloObj = require('./trelloObj');
const maps = require('./trelloPropertyMaps');
const netService = require('../net/networkService');

const Trello = function (key, token) {
	'use strict';

	if (R.isNil(key) || R.isNil(token)) {
		throw new Error('Key, token, and network service are required.');
	}

	const config = new Config(key, token, 1);

	this.getConfig = () => config;

	this.create = (objType, initialVals) => {
		if (maps[objType] === undefined) {
			throw new Error('Object type ' + objType + ' does not exist.');
		}

		if (!maps[objType].allowCreation) {
			throw new Error('Object type ' + objType + ' does not allow creation.');
		}

		return netService.post(config, objType, null, initialVals)
				.then(response => {
					const rawObj = JSON.parse(response.body);
					return new TrelloObj(maps, objType, config, rawObj.id, netService, rawObj);
				});
	};

	this.get = (objType, id) => {
		if (R.isNil(id)) {
			throw new Error('Must supply a valid object type and id.');
		}
		return new TrelloObj(maps, objType, config, id, netService);
	};

	this.search = (searchQuery) => {
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

		return netService.get(config, 'search', null, parameters)
				.then(response => JSON.parse(response.body));
	};
};

module.exports = Trello;
