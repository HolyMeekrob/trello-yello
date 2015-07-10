const board = {
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
	boardStars: {
		trelloType: null,
		isAutoProp: false,
		get: {}
	},
	cards: {
		trelloType: 'card',
		isAutoProp: false,
		get: {
			fields: 'all',
			filter: 'all'
		}
	},
	checklists: {
		trelloType: 'checklist',
		isAutoProp: false,
		get: {
			'checkItem_fields': 'all',
			filter: 'all'
		}
	},
	closed: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	dateLastActivity: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	dateLastView: {
		trelloType: null,
		isAutoProp: true,
		get: {}
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
	id: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	idOrganization: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	idTags: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	invitations: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	}, // Array of what? Members?
	invited: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	labelNames: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	labels: {
		trelloType: 'label',
		isAutoProp: false,
		get: {
			fields: 'all',
			limit: '1000'
		}
	},
	lists: {
		trelloType: 'list',
		isAutoProp: false,
		get: {
			fields: 'all',
			filter: 'all'
		}
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
	myPrefs: {
		trelloType: null,
		isAutoProp: false,
		get: {}
	},
	name: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	organization: {
		trelloType: 'organization',
		isAutoProp: false,
		get: {
			fields: 'all'
		}
	},
	pinned: {
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
	shortLink: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	shortUrl: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	starred: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	subscribed: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	url: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	}
};

module.exports = board;
