const board = {
	allowCreation: true,
	allowDeletion: false,
	allowEmptyPut: true,
	defaultArgs: {
		boardStars: 'mine',
		memberships: 'all',
		memberships_member: 'true',
		memberships_member_fields: 'all',
		myPrefs: 'true',
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
		boardStars: {
			trelloType: null,
			isAutoProp: false,
			get: {}
		},
		calendarKey: {
			post: {
				allowEmpty: false,
				allowId: [],
				allowNext: ['generate'],
				generate: { allowEmpty: true, allowId: [], allowNext: [] }
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
		checklists: {
			trelloType: 'checklist',
			isAutoProp: false,
			get: {
				checkItem_fields: 'all',
				filter: 'all'
			},
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		closed: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
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
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		descData: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		emailKey: {
			post: {
				allowEmpty: false,
				allowId: [],
				allowNext: ['generate'],
				generate: { allowEmpty: true, allowId: [], allowNext: [] }
			}
		},
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idOrganization: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
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
			get: {},
			put: {
				allowEmpty: false,
				allowId: [],
				allowNext: ['blue', 'green', 'orange', 'purple', 'red', 'yellow'],
				blue: { allowEmpty: true, allowId: [] },
				green: { allowEmpty: true, allowId: [] },
				orange: { allowEmpty: true, allowId: [] },
				purple: { allowEmpty: true, allowId: [] },
				red: { allowEmpty: true, allowId: [] },
				yellow: { allowEmpty: true, allowId: [] }
			}
		},
		labels: {
			trelloType: 'label',
			isAutoProp: false,
			get: { fields: 'all', limit: '1000' },
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		lists: {
			trelloType: 'list',
			isAutoProp: false,
			get: { fields: 'all', filter: 'all' },
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		markAsViewed: {
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		members: {
			trelloType: 'member',
			isAutoProp: false,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: { fields: 'all', filter: 'all' },
			put: { allowEmpty: true, allowId: [''], allowNext: [] }
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
			get: {},
			put: { allowEmpty: false, allowId: [''], allowNext: [] }
		},
		myPrefs: {
			trelloType: null,
			isAutoProp: false,
			get: {},
			put: {
				allowEmpty: false,
				allowId: [],
				allowNext: [
					'emailPosition',
					'idEmailList',
					'showListGuid',
					'showSidebar',
					'showSidebarActivity',
					'showSidebarBoardActions',
					'showSidebarMembers'
				],
				emailPosition: { allowEmpty: true, allowId: [] },
				idEmailList: { allowEmpty: true, allowId: [] },
				showListGuide: { allowEmpty: true, allowId: [] },
				showSidebar: { allowEmpty: true, allowId: [] },
				showSidebarActivity: { allowEmpty: true, allowId: [] },
				showSidebarBoardActions: { allowEmpty: true, allowId: [] },
				showSidebarMembers: { allowEmpty: true, allowId: [] }
			}
		},
		name: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
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
			delete: {
				allowEmpty: false,
				allowId: [],
				allowNext: ['calendar', 'cardAging', 'recap', 'voting'],
				calendar: { allowEmpty: true, allowId: [], allowNext: [] },
				cardAging: { allowEmpty: true, allowId: [], allowNext: [] },
				recap: { allowEmpty: true, allowId: [], allowNext: [] },
				voting: { allowEmpty: true, allowId: [], allowNext: [] }
			},
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		prefs: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: {
				allowEmpty: false,
				allowId: [],
				allowNext: [
					'background',
					'calendarFeedEnabled',
					'cardAging',
					'cardCovers',
					'comments',
					'invitations',
					'permissionLevel',
					'selfJoin',
					'voting'
				],
				background: { allowEmpty: true, allowId: [] },
				calendarFeedEnabled: { allowEmpty: true, allowId: [] },
				cardAging: { allowEmpty: true, allowId: [] },
				cardCovers: { allowEmpty: true, allowId: [] },
				comments: { allowEmpty: true, allowId: [] },
				invitations: { allowEmpty: true, allowId: [] },
				permissionLevel: { allowEmpty: true, allowId: [] },
				selfJoin: { allowEmpty: true, allowId: [] },
				voting: { allowEmpty: true, allowId: [] }
			}
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
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		url: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		}
	}
};

module.exports = board;
