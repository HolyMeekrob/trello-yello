const webhook = {
	allowEmptyPut: true,
	props: {
		active: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
		},
		callbackURL: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
		},
		description: {
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
		idModel: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
		}
	}
};

module.exports = webhook;
