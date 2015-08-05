const R = require('ramda');
const trelloObj = require('./trelloObj');

const action = require('./obj/action');
const card = require('./obj/card');

const trelloFactory = (() => {
	'use strict';

	const creators = {
		action,
		card
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
