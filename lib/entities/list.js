const list = {
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
			}
		},
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		name: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: {}
		},
		closed: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idBoard: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		pos: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		subscribed: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		}
	}
};

module.exports = list;
