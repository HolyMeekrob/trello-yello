const label = {
	allowEmptyPut: true,
	props: {
		board: {
			trelloType: 'board',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		color: {
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
			get: {}
		},
		name: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
		},
		uses: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		}
	}
};

module.exports = label;
