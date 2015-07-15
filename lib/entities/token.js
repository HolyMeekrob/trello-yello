const token = {
	allowEmptyPut: false,
	props: {
		dateCreated: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		dateExpires: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idMember: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		identifier: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		member: {
			trelloType: 'member',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		permissions: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		webhooks: {
			trelloType: 'webhook',
			isAutoProp: false,
			get: {},
			post: { allowEmpty: true },
			put: { allowEmpty: true }
		}
	}
};

module.exports = token;
