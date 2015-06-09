"use strict";

const list = {
	actions: { type: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	board: { type: 'board', fields: 'all' },
	cards: { type: 'card', fields: 'all', filter: 'all' },
	id: 'default',
	name: 'default',
	closed: 'default',
	idBoard: 'default',
	pos: 'default',
	subscribed: 'default'
};

module.exports = list;
