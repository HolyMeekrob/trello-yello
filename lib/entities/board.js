"use strict";

const board = {
	actions: { type: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	cards: { type: 'card', fields: 'all', filter: 'all' },
	checklists: { type: 'checklist', checkItem_fields: 'all', filter: 'all' },
	closed: 'default',
	dateLastActivity: 'default',
	dateLastView: 'default',
	desc: 'default',
	descData: 'default',
	id: 'default',
	idOrganization: 'default', // Create organization
	invitations: 'default', // Array of what? Members?
	invited: 'default',
	labelNames: 'default',
	labels: { type: 'label', fields: 'all', limit: '1000' },
	lists: { type: 'list', fields: 'all',  filter: 'all' },
	members: { type: 'member', fields: 'all', filter: 'all' },
	membersInvited: { type: 'member', fields: 'all' },
	memberships: 'default',
	name: 'default',
	organization: { type: 'organization', fields: 'all' },
	pinned: 'default',
	powerUps: 'default',
	prefs: 'default',
	shortLink: 'default',
	shortUrl: 'default',
	starred: 'default',
	subscribed: 'default',
	url: 'default'
};

module.exports = board;
