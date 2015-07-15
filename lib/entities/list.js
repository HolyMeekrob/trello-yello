const list = {
	allowCreation: true,
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
		archiveAllCards: {
			post: { allowEmpty: true }
		},
		board: {
			trelloType: 'board',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		cards: {
			trelloType: 'card',
			isAutoProp: false,
			get: {
				fields: 'all',
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
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idBoard: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
		},
		moveAllCards: {
			post: { allowEmpty: true }
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
		subscribed: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
		}
	}
};

module.exports = list;
