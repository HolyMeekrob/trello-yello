const member = {
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
	avatarHash: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	avatarSource: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	boardBackgrounds: {
		trelloType: null,
		isAutoProp: false,
		get: {}
	},
	boards: {
		trelloType: 'board',
		isAutoProp: false,
		get: {
			fields: 'all',
			filter: 'all'
		}
	},
	boardsInvited: {
		trelloType: null,
		isAutoProp: false,
		get: {}
	},
	boardStars: {
		trelloType: null,
		isAutoProp: false,
		get: {}
	},
	bio: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	bioData: {
		trelloType: null,
		isAutoProp: true,
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
	confirmed: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	customBoardBacgkrounds: {
		trelloType: null,
		isAutoProp: false,
		get: {}
	},
	email: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	fullName: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	gravatarHash: {
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
	idBoardsPinned: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	idOrganizations: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	idPremOrgsAdmin: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	initials: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	loginTypes: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	memberType: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	notifications: {
		trelloType: 'notification',
		isAutoProp: false,
		get: {
			fields: 'all',
			filter: 'all',
			limit: '1000',
			memberCreator: 'false',
			'read_filter': 'all'
		}
	},
	oneTimeMessagesDismissed: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	organizations: {
		trelloType: 'organization',
		isAutoProp: false,
		get: {
			fields: 'all',
			filter: 'all'
		}
	},
	organizationsInvited: {
		trelloType: 'organization',
		isAutoProp: false,
		get: {
			fields: 'all',
			filter: 'all'
		}
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
	savedSearches: {
		trelloType: null,
		isAutoProp: false,
		get: {}
	},
	status: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	tokens: {
		trelloType: 'token',
		isAutoProp: false,
		get: {
			filter: 'all'
		}
	},
	trophies: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	uploadedAvatarHash: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	url: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	username: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	}
};

module.exports = member;
