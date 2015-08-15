const checklist = {
	allowCreation: true,
	allowDeletion: true,
	allowEmptyPut: true,
	defaultArgs: {
		checkItems: 'all',
		checkItem_fields: 'all',
		fields: 'all'
	},
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
			get: { fields: 'all', filter: 'all' }
		},
		checkItems: {
			trelloType: null,
			isAutoProp: true,
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] }
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
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
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
		}
	}
};

module.exports = checklist;
