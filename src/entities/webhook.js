const webhook = {
	allowCreation: true,
	allowDeletion: true,
	allowEmptyPut: true,
	defaultArgs: {},
	props: {
		active: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		callbackURL: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		description: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idModel: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		}
	}
};

module.exports = webhook;
