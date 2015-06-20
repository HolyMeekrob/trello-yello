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
};

Trello.prototype.get = function (objType, id) {
	'use strict';

	if (!id) {
		throw new Error('Must supply a valid object type and id.');
	}
	return new TrelloObj(objType, this.getConfig(), id, this.getNetworkService());
};

Trello.prototype.search = function (searchQuery) {
	'use strict';

	const parameters = {
		query: searchQuery,
		idBoards: 'mine',
		modelTypes: 'all',
		board_fields: 'all', // eslint-disable-line camelcase
		boards_limit: '1000', // eslint-disable-line camelcase
		card_fields: 'all', // eslint-disable-line camelcase
		cards_limit: '1000', // eslint-disable-line camelcase
		card_board: 'true', // eslint-disable-line camelcase
		card_list: 'true', // eslint-disable-line camelcase
		card_members: 'true', // eslint-disable-line camelcase
		card_stickers: 'true', // eslint-disable-line camelcase
		card_attachments: 'true', // eslint-disable-line camelcase
		organization_fields: 'all', // eslint-disable-line camelcase
		organizations_limit: '1000', // eslint-disable-line camelcase
		member_fields: 'all', // eslint-disable-line camelcase
		members_limit: '1000', // eslint-disable-line camelcase
		partial: 'false'
	};

	return this.getNetworkService().get(this.getConfig(), 'search', null, parameters)
		.then(response => JSON.parse(response.body));
};

module.exports = Trello;
