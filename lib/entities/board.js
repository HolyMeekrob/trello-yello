const board = {
	allowCreation: true,
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
		boardStars: {
			trelloType: null,
			isAutoProp: false,
			get: {}
		},
		calendarKey: {
			post: {
				allowEmpty: false,
				generate: { allowEmpty: true }
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
				'checkItem_fields': 'all',
				filter: 'all'
			},
			post: { allowEmpty: true }
		},
		closed: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
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
			put: { allowEmpty: true }
		},
		descData: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		emailKey: {
			post: {
				allowEmpty: false,
				generate: { allowEmpty: true }
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
			put: { allowEmpty: true }
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
				blue: { allowEmpty: true },
				green: { allowEmpty: true },
				orange: { allowEmpty: true },
				purple: { allowEmpty: true },
				red: { allowEmpty: true },
				yellow: { allowEmpty: true }
			}
		},
		labels: {
			trelloType: 'label',
			isAutoProp: false,
			get: {
				fields: 'all',
				limit: '1000'
			},
			post: { allowEmpty: true }
		},
		lists: {
			trelloType: 'list',
			isAutoProp: false,
			get: {
				fields: 'all',
				filter: 'all'
			},
			post: { allowEmpty: true }
		},
		markAsViewed: {
			post: { allowEmpty: true }
		},
		members: {
			trelloType: 'member',
			isAutoProp: false,
			get: {
				fields: 'all',
				filter: 'all'
			},
			put: {
				allowEmpty: true,
				allowId: true
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
			get: {},
			put: {
				allowEmpty: false,
				allowId: true
			}
		},
		myPrefs: {
			trelloType: null,
			isAutoProp: false,
			get: {},
			put: {
				allowEmpty: false,
				emailPosition: { allowEmpty: true },
				idEmailList: { allowEmpty: true },
				showListGuide: { allowEmpty: true },
				showSidebar: { allowEmpty: true },
				showSidebarActivity: { allowEmpty: true },
				showSidebarBoardActions: { allowEmpty: true },
				showSidebarMembers: { allowEmpty: true }
			}
		},
		name: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
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
			get: {},
			post: { allowEmpty: true }
		},
		prefs: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: {
				allowEmpty: false,
				background: { allowEmpty: true },
				calendarFeedEnabled: { allowEmpty: true },
				cardAging: { allowEmpty: true },
				cardCovers: { allowEmpty: true },
				commentns: { allowEmpty: true },
				invitations: { allowEmpty: true },
				permissionLevel: { allowEmpty: true },
				selfJoin: { allowEmpty: true },
				voting: { allowEmpty: true }
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
			put: { allowEmpty: true }
		},
		url: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		}
	}
};

module.exports = board;
