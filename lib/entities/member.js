const member = {
	allowCreation: false,
	allowDeletion: false,
	allowEmptyPut: true,
	defaultArgs: {
		boardsInvited: 'all',
		boardsInvited_fields: 'all',
		boardStars: 'true',
		savedSearches: 'true',
		organizationsInvited: 'all',
		organizationsInvited_fields: 'all',
		boardBackgrounds: 'all',
		customBoardBackgrounds: 'all',
		customStickers: 'all',
		customEmoji: 'all',
		fields: 'all'
	},
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
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		avatarHash: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		avatarSource: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		bio: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		bioData: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		boardBackgrounds: {
			trelloType: null,
			isAutoProp: false,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] },
			put: { allowEmpty: false, allowId: [''], allowNext: [] }
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
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] },
			put: {
				allowEmpty: false,
				allowId: ['', 'idBoard', 'pos'],
				allowNext: [],
				idBoard: { allowEmpty: true, allowId: [], allowNext: [] },
				pos: { allowEmpty: false, allowId: [], allowNext: [] }
			}
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
		customBoardBackgrounds: {
			trelloType: null,
			isAutoProp: false,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] },
			put: { allowEmpty: false, allowId: [''], allowNext: [] }
		},
		customEmoji: {
			trelloType: null,
			isAutoProp: false,
			get: { filter: 'all' },
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		customStickers: {
			trelloType: null,
			isAutoProp: false,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: { filter: 'all' },
			post: { allowEmpty: true, allowId: [], allowNext: [] }
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
			put: { allowEmpty: true, allowId: [], allowNext: [] }
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
			put: { allowEmpty: true, allowId: [], allowNext: [] }
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
				read_filter: 'all'
			}
		},
		oneTimeMessagesDismissed: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] }
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
				allowId: [],
				allowNext: ['colorBlind', 'locale', 'minutesBetweenSummaries'],
				colorBlind: { allowEmpty: true, allowId: [], allowNext: [] },
				locale: { allowEmpty: true, allowId: [], allowNext: [] },
				minutesBetweenSummaries: {
					allowEmpty: true,
					allowId: [],
					allowNext: []
				}
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
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] },
			put: {
				allowEmpty: false,
				allowId: ['', 'name', 'pos', 'query'],
				allowNext: [],
				name: { allowEmpty: true, allowId: [] },
				pos: { allowEmpty: true, allowId: [] },
				query: { allowEmpty: true, allowId: [] }
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
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		}
	}
};

module.exports = member;
