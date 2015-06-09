"use strict";

const action = require('./entities/action');
const board = require('./entities/board');
const card = require('./entities/card');
const checklist = require('./entities/checklist');
const label = require('./entities/label');
const list = require('./entities/list');
const member = require('./entities/member');
const notification = require('./entities/notification');
const organization = require('./entities/organization');
const token = require('./entities/token');
const webhook = require('./entities/webhook');

module.exports = {
  action: action,
	board: board,
	card: card,
	checklist: checklist,
	label: label,
	list: list,
	member: member,
	notification: notification,
	organization: organization,
	token: token,
	webhook: webhook
};
