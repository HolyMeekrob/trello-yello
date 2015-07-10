const organization = {
	actions: {
		trelloType: 'action',
		isAutoProp: false,
		get: {
			fields: 'all',
			filter: 'all',
			limit: '1000',
			member: 'false',
			memberCreator: 'false'
		}
	},
	billableMemberCount: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	boards: {
		trelloType: 'action',
		isAutoProp: false,
		get: {
			fields: 'all',
			filter: 'all'
		}
	},
	desc: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	descData: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	displayName: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	id: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	idBoards: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	invitations: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	invited: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	logoHash: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	members: {
		trelloType: 'member',
		isAutoProp: false,
		get: {
			fields: 'all',
			filter: 'all'
		}
	},
	membersInvited: {
		trelloType: 'member',
		isAutoProp: false,
		get: {
			fields: 'all'
		}
	},
	memberships: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	name: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	powerUps: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	prefs: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	premiumFeatures: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	products: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	url: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	website: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	}
};

module.exports = organization;
