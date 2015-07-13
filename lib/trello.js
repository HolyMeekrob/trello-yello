const Config = require('./config');
const TrelloObj = require('./trelloObj');

const Trello = function (key, token, netService) {
	'use strict';

	if (!netService) {
		throw new Error('Key, token, and network service are required.');
	}

	const config = new Config(key, token, 1);

	this.getConfig = () => config;
	this.getNetworkService = () => netService;


	this.get = (objType, id) => {
		if (!id) {
			throw new Error('Must supply a valid object type and id.');
		}
		return new TrelloObj(objType, this.getConfig(), id, this.getNetworkService());
	};

	this.search = (searchQuery) => {
		const parameters = {
			'query': searchQuery,
			'idBoards': 'mine',
			'modelTypes': 'all',
			'board_fields': 'all',
			'boards_limit': '1000',
			'card_fields': 'all',
			'cards_limit': '1000',
			'card_board': 'true',
			'card_list': 'true',
			'card_members': 'true',
			'card_stickers': 'true',
			'card_attachments': 'true',
			'organization_fields': 'all',
			'organizations_limit': '1000',
			'member_fields': 'all',
			'members_limit': '1000',
			'partial': 'false'
		};

		return this.getNetworkService().get(this.getConfig(), 'search', null, parameters)
			.then(response => JSON.parse(response.body));
	};
};

module.exports = Trello;
