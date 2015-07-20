const action = {
	allowCreation: false,
	allowDeletion: true,
	allowEmptyPut: true,
	props: {
		board: {
			trelloType: 'board',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		card: {
			trelloType: 'card',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		data: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		date: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		display: {
			trelloType: null,
			isAutoProp: false,
			get: {}
		},
		entities: {
			trelloType: null,
			isAutoProp: false,
			get: {}
		},
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		idMemberCreator: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		list: {
			trelloType: 'list',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		member: {
			trelloType: 'member',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		memberCreator: {
			trelloType: 'member',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		organization: {
			trelloType: 'organization',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		text: {
			put: { allowEmpty: true }
		},
		type: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		}
	}
};

module.exports = action;
