const R = require('ramda');
const trelloObj = require('./trelloObj');

const action = require('./obj/action');
const board = require('./obj/board');
const card = require('./obj/card');
const checklist = require('./obj/checklist');
const label = require('./obj/label');
const list = require('./obj/list');

const trelloFactory = (() => {
	'use strict';

	const creators = {
		action,
		board,
		card,
		checklist,
		label,
		list
	};

	const getCreatorForObjectType = (objType) => {
		const creator = creators[objType];
		return R.isNil(creator) ? trelloObj : creator;
	};

	const createTrelloObject = (params) => {
		const creator = getCreatorForObjectType(params.objType);
		return creator(params);
	};

	return Object.freeze({
		createTrelloObject
	});
})();

module.exports = trelloFactory;
