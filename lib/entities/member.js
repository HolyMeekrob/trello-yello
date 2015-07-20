const member = {
	allowCreation: false,
	allowDeletion: false,
	allowEmptyPut: true,
	props: {
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
		avatar: {
			post: { allowEmpty: true }
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
			get: {},
			post: { allowEmpty: true }
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
			get: {},
			post: { allowEmpty: true },
			put: {
				allowEmpty: false,
				allowId: true
			}
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
			get: {},
			post: { allowEmpty: true },
			put: {
				allowEmpty: false,
				allowId: true
			}
		},
		customEmoji: {
			trelloType: null,
			isAutoProp: false,
			get: { filter: 'all' },
			post: { allowEmpty: true }
		},
		customStickers: {
			trelloType: null,
			isAutoProp: false,
			get: { filter: 'all' },
			post: { allowEmpty: true }
		},
		email: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		fullName: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
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
			get: {},
			put: { allowEmpty: true }
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
			get: {},
			post: { allowEmpty: true }
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
			get: {},
			put: {
				allowEmpty: false,
				colorBlind: { allowEmpty: true },
				local: { allowEmpty: true },
				minutesBetweenSummaries: { allowEmpty: true }
			}
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
			get: {},
			post: { allowEmpty: true },
			put: {
				allowEmpty: false,
				allowId: true
			}
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
			get: {},
			put: { allowEmpty: true }
		}
	}
};

module.exports = member;
