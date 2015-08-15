const card = {
	allowCreation: true,
	allowDeletion: true,
	allowEmptyPut: true,
	defaultArgs: {
		attachments: 'true',
		attachment_fields: 'all',
		checkItemStates: 'true',
		checkItemState_fields: 'all',
		stickers: 'true',
		sticker_fields: 'all',
		fields: 'all'
	},
	props: {
		actions: {
			trelloType: 'action',
			isAutoProp: false,
			delete: {
				allowEmpty: false,
				allowId: ['comments'],
				allowNext: [],
				comments: { allowEmpty: true, allowId: [], allowNext: [] }
			},
			get: {
				fields: 'all',
				filter: 'all',
				limit: '1000',
				member: 'false',
				memberCreator: 'false'
			},
			post: {
				allowEmpty: false,
				allowId: [],
				allowNext: ['comments'],
				comments: { allowEmpty: true, allowId: [] }
			},
			put: {
				allowEmpty: false,
				allowId: ['comments'],
				allowNext: [],
				comments: { allowEmpty: true, allowId: [] }
			}
		},
		attachments: {
			trelloType: null,
			isAutoProp: false,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		badges: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		board: {
			trelloType: 'board',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		checkItemStates: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		checklist: {
			delete: {
				allowEmpty: false,
				allowId: ['checkItem'],
				allowNext: [],
				checkItem: { allowEmpty: false, allowId: [''], allowNext: [] }
			},
			post: {
				allowEmpty: false,
				allowId: ['checkItem'],
				allowNext: [],
				checkItem: {
					allowEmpty: true,
					allowId: ['convertToCard'],
					allowNext: [],
					convertToCard: { allowEmpty: true, allowId: [], allowNext: [] }
				}
			},
			put: {
				allowEmpty: false,
				allowId: ['checkItem'],
				allowNext: [],
				checkItem: {
					allowEmpty: true,
					allowId: ['', 'name', 'pos', 'state'],
					allowNext: [],
					name: { allowEmpty: true, allowId: [], allowNext: [] },
					pos: { allowEmpty: true, allowId: [], allowNext: [] },
					state: { allowEmpty: true, allowId: [], allowNext: [] }
				}
			}
		},
		checklists: {
			trelloType: 'checklist',
			isAutoProp: false,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: { checkItem_fields: 'all', fields: 'all', filter: 'all' },
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
		due: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		email: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idAttachmentCover: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		idBoard: {
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		idChecklists: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idLabels: {
			trelloType: null,
			isAutoProp: true,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		idList: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		idMembers: {
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			post: { allowEmpty: true, allowId: [], allowNext: [] },
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		idMembersVoted: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idShort: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		labels: {
			trelloType: 'label',
			isAutoProp: false,
			delete: {
				allowEmpty: false,
				allowId: [],
				allowNext: ['blue', 'green', 'orange', 'purple', 'red', 'yellow'],
				blue: { allowEmpty: true, allowId: [], allowNext: [] },
				green: { allowEmpty: true, allowId: [], allowNext: [] },
				orange: { allowEmpty: true, allowId: [], allowNext: [] },
				purple: { allowEmpty: true, allowId: [], allowNext: [] },
				red: { allowEmpty: true, allowId: [], allowNext: [] },
				yellow: { allowEmpty: true, allowId: [], allowNext: [] }
			},
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] },
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		list: {
			trelloType: 'list',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		manualCoverAttachment: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		markAssociatedNotificationsRead: {
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		members: {
			trelloType: 'member',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		membersVoted: {
			trelloType: 'member',
			isAutoProp: false,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: { fields: 'all' },
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		name: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		pos: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
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
		stickers: {
			trelloType: null,
			isAutoProp: false,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] },
			put: { allowEmpty: false, allowId: [''], allowNext: []	}
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

module.exports = card;
