"use strict";

const organization = {
	actions: { type: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	billableMemberCount: 'default',
	boards: { type: 'action', fields: 'all', filter: 'all' },
	desc: 'default',
	descData: 'default',
	displayName: 'default',
	id: 'default',
	idBoards: 'default',
	invitations: 'default',
	invited: 'default',
	logoHash: 'default',
	members: { type: 'member', fields: 'all', filter: 'all' },
	membersInvited: { type: 'member', fields: 'all' },
	memberships: 'default',
	name: 'default',
	powerUps: 'default',
	prefs: 'default',
	premiumFeatures: 'default',
	products: 'default',
	url: 'default',
	website: 'default'
};

module.exports = organization;
