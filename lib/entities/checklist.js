const checklist = {
	allowEmptyPut: true,
	props: {
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
		checkItems: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idBoard: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idCard: {
			trelloType: null,
			isAutoProp: true,
			get: {}
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
		}
	}
};

module.exports = checklist;
