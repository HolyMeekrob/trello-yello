const trelloObj = require('../trelloObj');

/**
 * A class representing the Organization Trello object.
 *
 * @class organization
 * @extends trelloObj
 * @constructor
 * @private
 * @param {Object} params the constructor parameters object
 * @param {Object} params.objMaps the container for all Trello object
 * property mappings. Please refer to its documentation for details.
 * @param {Object} params.config configuration object
 * @param {String} params.config.key the application key for accessing Trello
 * @param {String} params.config.token a valid Trello API token
 * @param {Number} params.config.version the Trello API version Number
 * @param {String} params.id the ID of the Trello object
 * @param {Object} params.net the network service. Please refer to its
 * documentation for specifics.
 * @param {Function} params.objConstructor the factory method for creating new
 * Trello objects. Using an injected factory method allows us to use higher
 * level object classes while still maximizing reuse with this base object.
 * @param {Object} [params.initialVals] the initial values of the Trello
 * object
 */
const organization = (cParams) => {
	'use strict';

	cParams.objType = 'organization';
	const obj = trelloObj(cParams);

	const { get, getId, set, del } = obj;

	////////////////////////////////////////////////////////////////////////////
	//																		READS																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method getActions
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's actions.
	 * This is an array of action objects.
	 */
	const getActions = (callback) => {
		const args = {
			propName: 'actions',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getBillableMemberCount
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the number of billable members
	 * in the organization
	 */
	const getBillableMemberCount = (callback) => {
		const args = {
			propName: 'billableMemberCount',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getBoards
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's boards.
	 * This is an array of board objects.
	 */
	const getBoards = (callback) => {
		const args = {
			propName: 'boards',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getDescription
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's description
	 */
	const getDescription = (callback) => {
		const args = {
			propName: 'desc',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getDescriptionData
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's description
	 * data
	 */
	const getDescriptionData = (callback) => {
		const args = {
			propName: 'descData',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getDisplayName
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's display name
	 */
	const getDisplayName = (callback) => {
		const args = {
			propName: 'displayName',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getLogoHash
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to organization's logo's hash
	 */
	const getLogoHash = (callback) => {
		const args = {
			propName: 'logoHash',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getMembers
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's members.
	 * This is an array of member objects.
	 */
	const getMembers = (callback) => {
		const args = {
			propName: 'members',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getInvitedMembers
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the members that are invited
	 * to the organization. This is an array of member objects.
	 */
	const getInvitedMembers = (callback) => {
		const args = {
			propName: 'membersInvited',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getMemberships
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to organization's memberships
	 */
	const getMemberships = (callback) => {
		const args = {
			propName: 'memberships',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getName
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's name
	 */
	const getName = (callback) => {
		const args = {
			propName: 'name',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getPowerUps
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's powerUps
	 */
	const getPowerUps = (callback) => {
		const args = {
			propName: 'powerUps',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getPreferences
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization-wide
	 * preferences
	 */
	const getPreferences = (callback) => {
		const args = {
			propName: 'prefs',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getPremiumFeatures
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the premium features accesible
	 * to the organization
	 */
	const getPremiumFeatures = (callback) => {
		const args = {
			propName: 'premiumFeatures',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getProducts
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's products
	 */
	const getProducts = (callback) => {
		const args = {
			propName: 'products',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getUrl
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the url for the organization's
	 * profile
	 */
	const getUrl = (callback) => {
		const args = {
			propName: 'url',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getWebsite
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organization's website
	 */
	const getWebsite = (callback) => {
		const args = {
			propName: 'website',
			callback
		};
		return obj.get(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method setDescription
	 * @param {Object} params the method parameters object
	 * @param {String} params.description the organization's description
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setDescription = (params) => {
		const { description, callback } = params;
		const args = {
			values: { value: description },
			propName: 'desc',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setDisplayName
	 * @param {Object} params the method parameters object
	 * @param {String} params.displayName the organization's display name
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setDisplayName = (params) => {
		const { displayName, callback } = params;
		const args = {
			values: { value: displayName },
			propName: 'displayName',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Sets the member type for the given member. The member is added to the
	 * organization if they weren't already in it.
	 *
	 * @method setMemberType
	 * @param {Object} params the method parameters object
	 * @param {String} params.memberId the id of the member to update
	 * @param {String} params.memberType the type of member to set. Valid values
	 * are 'admin', 'normal', or 'observer'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setMemberType = (params) => {
		const { memberId, memberType, callback } = params;
		const args = {
			values: { type: memberType },
			propName: `members/${memberId}`,
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};


	/**
	 * @method addNonMember
	 * @param {Object} params the method parameters object
	 * @param {String} params.email email address to invite
	 * @param {String} params.fullName full name of invitee
	 * @param {String} [params.memberType='normal'] member type to assign to the
	 * user. Valid values are 'admin', 'normal', or 'observer'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addNonMember = (params) => {
		const { email, fullName, memberType, callback } = params;
		const args = {
			values: { email, fullName, type: memberType },
			propName: 'members',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};



	/**
	 * Activates the member within the organization.
	 *
	 * @method activateMember
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const activateMember = (params) => {
		const { memberId, callback } = params;
		const args = {
			values: { value: false },
			propName: `members/${memberId}/deactivated`,
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Deactivates the member within the organization.
	 *
	 * @method deactivate
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const deactivateMember = (params) => {
		const { memberId, callback } = params;
		const args = {
			values: { value: true },
			propName: `members/${memberId}/deactivated`,
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setName
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the name of the organization. Must be at least
	 * three characters long and contain only lowercase letters, numbers, and
	 * underscores.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setName = (params) => {
		const { name, callback } = params;
		const args = {
			values: { value: name },
			propName: 'name',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setAssociatedDomain
	 * @param {Object} params the method parameters object
	 * @param {String} params.domain the Google Apps domain to link this
	 * organization to.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setAssociatedDomain = (params) => {
		const { domain, callback } = params;
		const args = {
			values: { value: domain },
			propName: 'prefs/associatedDomain',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Sets the visibility of organization-visibile boards owned by the
	 * organization.
	 *
	 * @method setOrgBoardVisibilityLevel
	 * @param {Object} params the method parameters object
	 * @param {String} params.visibilityLevel the visibility level of the boards.
	 * Valid values are 'admin', 'none', or 'org'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setOrgBoardVisibilityLevel = (params) => {
		const { visibilityLevel, callback } = params;
		const args = {
			values: { value: visibilityLevel },
			propName: 'prefs/boardVisibilityRestrict/org',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Sets the visibility of private-visibile boards owned by the organization.
	 *
	 * @method setPrivateBoardVisibilityLevel
	 * @param {Object} params the method parameters object
	 * @param {String} params.visibilityLevel the visibility level of the boards.
	 * Valid values are 'admin', 'none', or 'org'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setPrivateBoardVisibilityLevel = (params) => {
		const { visibilityLevel, callback } = params;
		const args = {
			values: { value: visibilityLevel },
			propName: 'prefs/boardVisibilityRestrict/private',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Sets the visibility of public-visibile boards owned by the organization.
	 *
	 * @method setPublicBoardVisibilityLevel
	 * @param {Object} params the method parameters object
	 * @param {String} params.visibilityLevel the visibility level of the boards.
	 * Valid values are 'admin', 'none', or 'org'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setPublicBoardVisibilityLevel = (params) => {
		const { visibilityLevel, callback } = params;
		const args = {
			values: { value: visibilityLevel },
			propName: 'prefs/boardVisibilityRestrict/public',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Disables external members for the organization.
	 *
	 * @method disableExternalMembers
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const disableExternalMembers = (callback) => {
		const args = {
			values: { value: true },
			propName: 'prefs/externalMembersDisabled',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Enables external members for the organization.
	 *
	 * @method enableExternalMembers
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const enableExternalMembers = (callback) => {
		const args = {
			values: { value: true },
			propName: 'prefs/externalMembersDisabled',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setGoogleAppsVersion
	 * @param {Object} params the method parameters object
	 * @param {Number} params.version the Google Apps version. Valid values are
	 * 1 or 2.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setGoogleAppsVersion = (params) => {
		const { version, callback } = params;
		const args = {
			values: { value: version },
			propName: 'prefs/googleAppsVersion',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setVisibilityLevel
	 * @param {Object} params the method parameters object
	 * @param {String} params.visibilityLevel the visibility level of the
	 * organization. Valid values are 'private' or 'public'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setVisibilityLevel = (params) => {
		const { visibilityLevel, callback } = params;
		const args = {
			values: { value: visibilityLevel },
			propName: 'prefs/permissionLevel',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setWebsite
	 * @param {Object} params the method parameters object
	 * @param {String} params.website the organization's website
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setWebsite = (params) => {
		const { website, callback } = params;
		const args = {
			values: { value: website },
			propName: 'website',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	const addLogo = (params) => {
		const { file, callback } = params;
		const args = {
			values: { file },
			propName: 'logo',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	DELETES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method removeLogo
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeLogo = (callback) => {
		const args = {
			propName: 'logo',
			callback
		};

		return obj.del(args);
	};

	/**
	 * @method removeMember
	 * @param {Object} params the method parameters object
	 * @param {String} params.memberId the member to remove. This can also be
	 * a username or organization name.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeMember = (params) => {
		const { memberId, callback } = params;
		const args = {
			propName: `members/${memberId}`,
			callback
		};

		return obj.del(args);
	};

	/**
	 * @method removeAssociatedDomain
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeAssociatedDomain = (callback) => {
		const args = {
			propName: 'prefs/associatedDomain',
			callback
		};

		return obj.del(args);
	};

	return Object.freeze({
		get,
		getId,
		set,
		del,
		getActions,
		getBillableMemberCount,
		getBoards,
		getDescription,
		getDescriptionData,
		getDisplayName,
		getLogoHash,
		getMembers,
		getInvitedMembers,
		getMemberships,
		getName,
		getPowerUps,
		getPreferences,
		getPremiumFeatures,
		getProducts,
		getUrl,
		getWebsite,
		setDescription,
		setDisplayName,
		setMemberType,
		addNonMember,
		activateMember,
		deactivateMember,
		setName,
		setAssociatedDomain,
		setOrgBoardVisibilityLevel,
		setPrivateBoardVisibilityLevel,
		setPublicBoardVisibilityLevel,
		disableExternalMembers,
		enableExternalMembers,
		setGoogleAppsVersion,
		setVisibilityLevel,
		setWebsite,
		addLogo,
		removeLogo,
		removeMember,
		removeAssociatedDomain
	});
};

module.exports = organization;
