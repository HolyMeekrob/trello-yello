const card = {
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
		attachments: {
			trelloType: null,
			isAutoProp: false,
			get: {}
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
		checklists: {
			trelloType: 'checklist',
			isAutoProp: false,
			get: {
				'checkItem_fields': 'all',
				fields: 'all',
				filter: 'all'
			}
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
		due: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
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
			put: { allowEmpty: true }
		},
		idBoard: {
			put: { allowEmpty: true }
		},
		idChecklists: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idLabels: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idList: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
		},
		idMembers: {
			put: { allowEmpty: true }
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
			get: {},
			put: { allowEmpty: true }
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
			get: {
				fields: 'all'
			}
		},
		name: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
		},
		pos: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
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
			get: {},
			put: {
				allowEmpty: false,
				allowId: true
			}
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

module.exports = card;
