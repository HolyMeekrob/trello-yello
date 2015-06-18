"use strict";

const list = {
	actions: { trelloType: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	board: { trelloType: 'board', fields: 'all' },
	cards: { trelloType: 'card', fields: 'all', filter: 'all' },
	id: 'default',
	name: 'default',
	closed: 'default',
	idBoard: 'default',
	pos: 'default',
	subscribed: 'default'
};

module.exports = list;
