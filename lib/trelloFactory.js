const R = require('ramda');
const trelloObj = require('./trelloObj');

const action = require('./obj/action');
const board = require('./obj/board');
const card = require('./obj/card');
const checklist = require('./obj/checklist');
const label = require('./obj/label');
const list = require('./obj/list');
const member = require('./obj/member');
const notification = require('./obj/notification');
const organization = require('./obj/organization');
const token = require('./obj/token');
const webhook = require('./obj/webhook');

const trelloFactory = (() => {
	'use strict';

	const creators = {
		action,
		board,
		card,
		checklist,
		label,
		list,
		member,
		notification,
		organization,
		token,
		webhook
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
