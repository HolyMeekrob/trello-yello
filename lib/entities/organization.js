const organization = {
	allowCreation: true,
	allowDeletion: true,
	allowEmptyPut: true,
	defaultArgs: {
		memberships: 'all',
		memberships_member: 'true',
		memberships_member_fields: 'all',
		fields: 'all'
	},
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
		billableMemberCount: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		boards: {
			trelloType: 'action',
			isAutoProp: false,
			get: {
				fields: 'all',
				filter: 'all'
			}
		},
		desc: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		descData: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		displayName: {
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
		idBoards: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		invitations: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		invited: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		logo: {
			delete: { allowEmpty: true, allowId: [], allowNext: [] },
			post: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		logoHash: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		members: {
			trelloType: 'member',
			isAutoProp: false,
			delete: {
				allowEmpty: false,
				allowId: ['', 'all'],
				allowNext: [],
				all: { allowEmpty: true, allowId: [], allowNext: [] }
			},
			get: {
				fields: 'all',
				filter: 'all'
			},
			put: {
				allowEmpty: true,
				allowId: ['', 'deactivated'],
				allowNext: [],
				deactivated: { allowEmpty: true, allowId: [], allowNext: [] }
			}
		},
		membersInvited: {
			trelloType: 'member',
			isAutoProp: false,
			get: {
				fields: 'all'
			}
		},
		memberships: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: false, allowId: [''], allowNext: [] }
		},
		name: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		},
		powerUps: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		prefs: {
			trelloType: null,
			isAutoProp: true,
			delete: {
				allowEmpty: false,
				allowId: [],
				allowNext: ['associatedDomain', 'orgInviteRestrict'],
				associatedDomain: { allowEmpty: true, allowId: [], allowNext: [] },
				orgInviteRestrict: { allowEmpty: true, allowId: [], allowNext: [] }
			},
			get: {},
			put: {
				allowEmpty: false,
				allowId: [],
				allowNext: [
					'associatedDomain',
					'boardVisibilityRestrict',
					'externalMembersDisabled',
					'googleAppsVersion',
					'orgInviteRestrict',
					'permissionLevel'
				],
				associatedDomain: { allowEmpty: true, allowId: [], allowNext: [] },
				boardVisibilityRestrict: {
					allowEmpty: false,
					allowId: [],
					allowNext: ['org', 'private', 'public'],
					org: { allowEmpty: true, allowId: [], allowNext: [] },
					private: { allowEmpty: true, allowId: [], allowNext: [] },
					public: { allowEmpty: true, allowId: [], allowNext: [] }
				},
				externalMembersDisabled: {
					allowEmpty: true,
					allowId: [],
					allowNext: []
				},
				googleAppsVersion: { allowEmpty: true, allowId: [], allowNext: [] },
				orgInviteRestrict: { allowEmpty: true, allowId: [], allowNext: [] },
				permissionLevel: { allowEmpty: true, allowId: [], allowNext: [] }
			}
		},
		premiumFeatures: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		products: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		url: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		website: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true, allowId: [], allowNext: [] }
		}
	}
};

module.exports = organization;
