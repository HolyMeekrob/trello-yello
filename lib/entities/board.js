"use strict";

const board = {
	actions: { trelloType: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	boardStars: { },
	cards: { trelloType: 'card', fields: 'all', filter: 'all' },
	checklists: { trelloType: 'checklist', checkItem_fields: 'all', filter: 'all' },
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
	labels: { trelloType: 'label', fields: 'all', limit: '1000' },
	lists: { trelloType: 'list', fields: 'all',  filter: 'all' },
	members: { trelloType: 'member', fields: 'all', filter: 'all' },
	membersInvited: { trelloType: 'member', fields: 'all' },
	memberships: 'default',
	myPrefs: { },
	name: 'default',
	organization: { trelloType: 'organization', fields: 'all' },
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
