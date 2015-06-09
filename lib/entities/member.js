"use strict";

const member = {
	actions: { type: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	avatarHash: 'default',
	avatarSource: 'default',
	boards: { type: 'board', fields: 'all', filter: 'all' },
	bio: 'default',
	bioData: 'default',
	cards: { type: 'card', fields: 'all', filter: 'all' },
	confirmed: 'default',
	email: 'default',
	fullName: 'default',
	gravatarHash: 'default',
	id: 'default',
	idBoards: 'default',
	idBoardsPinned: 'default',
	idOrganizations: 'default',
	idPremOrgsAdmin: 'default',
	initials: 'default',
	loginTypes: 'default',
	memberType: 'default',
	notifications: { type: 'notification', fields: 'all', filter: 'all', limit: '1000', memberCreator: 'false', read_filter: 'all' },
	oneTimeMessagesDismissed: 'default',
	organizations: { type: 'organization', fields: 'all', filter: 'all' },
	organizationsInvited: { type: 'organization', fields: 'all', filter: 'all' },
	prefs: 'default',
	premiumFeatures: 'default',
	products: 'default',
	status: 'default',
	tokens: { type: 'token', filter: 'all' },
	trophies: 'default',
	uploadedAvatarHash: 'default',
	url: 'default',
	username: 'default'
};

module.exports = member;
