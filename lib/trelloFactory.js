const R = require('ramda');
const trelloObj = require('./trelloObj');
const card = require('./obj/card');

const trelloFactory = (() => {
	'use strict';

	const constructors = {
		card
	};

	const getConstructorForObjectType = (objType) => {
		const constructor = constructors[objType];
		return R.isNil(constructor) ? trelloObj : constructor;
	};

	const createTrelloObject = (params) => {
		const constructor = getConstructorForObjectType(params.objType);
		return constructor(params);
	};

	return Object.freeze({
		createTrelloObject
	});
})();

module.exports = trelloFactory;
