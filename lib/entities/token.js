const token = {
	allowCreation: false,
	allowDeletion: true,
	allowEmptyPut: false,
	defaultArgs: { fields: 'all' },
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
			delete: { allowEmpty: false, allowId: [''], allowNext: [] },
			get: {},
			post: { allowEmpty: true, allowId: [], allowNext: [] },
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		}
	}
};

module.exports = token;
