const card = {
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
		put: { value: 'boolean' }
	},
	dateLastActivity: {
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
	due: {
		trelloType: null,
		isAutoProp: true,
		get: {}
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
		get: {}
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
		get: {}
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
		get: {}
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
		get: {}
	},
	pos: {
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
	stickers: {
		trelloType: null,
		isAutoProp: false,
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

module.exports = card;
