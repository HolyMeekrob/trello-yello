const organization = {
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
			put: { allowEmpty: true }
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
			put: { allowEmpty: true }
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
		logoHash: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		members: {
			trelloType: 'member',
			isAutoProp: false,
			get: {
				fields: 'all',
				filter: 'all'
			},
			put: {
				allowEmpty: true,
				allowId: true
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
			get: {}
		},
		name: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: { allowEmpty: true }
		},
		powerUps: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		},
		prefs: {
			trelloType: null,
			isAutoProp: true,
			get: {},
			put: {
				allowEmpty: false,
				associatedDomain: { allowEmpty: true },
				boardVisibilityRestrict: {
					allowEmpty: false,
					org: { allowEmpty: true },
					private: { allowEmpty: true },
					public: { allowEmpty: true }
				},
				externalMembersDisabled: { allowEmpty: true },
				googleAppsVersion: { allowEmpty: true },
				orgInviteRestrict: { allowEmpty: true },
				permissionLevel: { allowEmpty: true }
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
			put: { allowEmpty: true }
		}
	}
};

module.exports = organization;
