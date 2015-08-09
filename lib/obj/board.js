const Promise = require('bluebird');
const trelloObj = require('../trelloObj');
const adaptParams =	require('./objUtil').adaptConstructorParameters;

/**
 * A class representing the Board Trello object.
 *
 * @class board
 * @constructor
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
const board = (cParams) => {
	'use strict';

	cParams.objType = 'board';
	const obj = trelloObj(cParams);

	const { get, getId, set, del } = obj;

	////////////////////////////////////////////////////////////////////////////
	//																		READS																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method getActions
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board's actions. This is an
	 * array of action objects.
	 */
	const getActions = (callback) => {
		const args = {
			propName: 'actions',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getAmISubscribed
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the user is subscribed
	 * to the board
	 */
	const getAmISubscribed = (callback) => {
		const args = {
			propName: 'subscribed',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getBoardStars
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board's stars
	 */
	const getBoardStars = (callback) => {
		const args = {
			propName: 'boardStars',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getCards
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board's cards. This is
	 * an array of card objects.
	 */
	const getCards = (callback) => {
		const args = {
			propName: 'cards',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getChecklists
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to all of the board's checklists.
	 * This is an array of checklist objects.
	 */
	const getChecklists = (callback) => {
		const args = {
			propName: 'checklists',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method isClosed
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the board is closed
	 */
	const isClosed = (callback) => {
		const args = {
			propName: 'closed',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getLastActivityDate
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the timestamp of the board's
	 * last activity
	 */
	const getLastActivityDate = (callback) => {
		const args = {
			propName: 'dateLastActivity',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getLastViewedDate
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the timestamp of the board's
	 * last viewing
	 */
	const getLastViewedDate = (callback) => {
		const args = {
			propName: 'dateLastView',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getDescription
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board's descrsiption
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
	 * @return {Object} a Promise that resolves to the board's description data
	 */
	const getDescriptionData = (callback) => {
		const args = {
			propName: 'descData',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getInvitations
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to a list of the board's current
	 * invitations
	 */
	const getInvitations = (callback) => {
		const args = {
			propName: 'invitations',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getInvited
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the current user has
	 * an invitation to the board
	 */
	const getInvited = (callback) => {
		const args = {
			propName: 'invited',
			callback
		};

		return obj.get(args);
	};


	/**
	 * @method getLabels
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board's labels. This is
	 * an array of label objects.
	 */
	const getLabels = (callback) => {
		const args = {
			propName: 'labels',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getLabelNames
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to board's label names
	 */
	const getLabelNames = (callback) => {
		const args = {
			propName: 'labelNames',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getLists
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board's lists. This is an
	 * array of list objects.
	 */
	const getLists = (callback) => {
		const args = {
			propName: 'lists',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getMembers
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board's members. This is
	 * an array of member objects.
	 */
	const getMembers = (callback) => {
		const args = {
			propName: 'members',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getMembersInvited
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the members that are invited
	 * to the board. This is an array of member objects.
	 */
	const getMembersInvited = (callback) => {
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
	 * @return {Object} a Promise that resolves to board's memberships
	 */
	const getMemberships = (callback) => {
		const args = {
			propName: 'memberships',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getMyPreferences
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the user's preferences for the
	 * board
	 */
	const getMyPreferences = (callback) => {
		const args = {
			propName: 'myPrefs',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getName
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to board's name
	 */
	const getName = (callback) => {
		const args = {
			propName: 'name',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getOrganization
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to board's organization. This is
	 * an organization object.
	 */
	const getOrganization = (callback) => {
		const args = {
			propName: 'organization',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getPinned
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the board has been
	 * pinned
	 */
	const getPinned = (callback) => {
		const args = {
			propName: 'pinned',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getPreferences
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board's settings
	 */
	const getPreferences = (callback) => {
		const args = {
			propName: 'prefs',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getPowerUps
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board's power ups
	 */
	const getPowerUps = (callback) => {
		const args = {
			propName: 'powerUps',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getShortLink
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the shortform version of the
	 * board's link
	 */
	const getShortLink = (callback) => {
		const args = {
			propName: 'shortLink',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getShortUrl
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the shortform version of the
	 * board's url
	 */
	const getShortUrl = (callback) => {
		const args = {
			propName: 'shortUrl',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method isStarred
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the board is starred
	 * by the current user
	 */
	const isStarred = (callback) => {
		const args = {
			propName: 'starred',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getUrl
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the longform version of the
	 * board's url
	 */
	const getUrl = (callback) => {
		const args = {
			propName: 'url',
			callback
		};

		return obj.get(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * Closes the board.
	 *
	 * @method close
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const close = (callback) => {
		const args = {
			values: { value: true },
			propName: 'closed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Reopens the board.
	 *
	 * @method reopen
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const reopen = (callback) => {
		const args = {
			values: { value: false },
			propName: 'closed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setDescription
	 * @param params the method parameters object
	 * @param {String} params.description the new description
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
	 * @method setOrganization
	 * @param params the method parameters object
	 * @param {String} params.organizationId the id of the organization
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setOrganization = (params) => {
		const { organizationId, callback } = params;
		const args = {
			values: { value: organizationId },
			propName: 'idOrganization',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Sets the name for the label of the given color.
	 *
	 * @method setLabelName
	 * @param params the method parameters object
	 * @param {String} params.color the color for the name change
	 * @param {String} params.name the new name for the color
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setLabelName = (params) => {
		const { color, name, callback } = params;
		const args = {
			values: { value: name },
			propName: `labelNames/${color}`,
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};


	/**
	 * Sets the member type for a member with the given information. If they are
	 * not already a member on the board, they are added as one.
	 *
	 * @method addMemberAndSetType
	 * @param params the method parameters object
	 * @param {String} params.email the email address of the member
	 * @param {String} params.fullName the full name of the member
	 * @param {String} [params.memberType='normal'] the member type to set for the
	 * user. Valid values are 'admin', 'normal', and 'observer'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addMemberAndSetType = (params) => {
		const { email, fullName, memberType, callback } = params;
		const args = {
			values: { email, fullName, type: memberType },
			propName: 'members',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setMemberType
	 * @param params the method parameters object
	 * @param {String} params.memberId the member's id
	 * @param {String} params.memberType the member type to set for the user.
	 * Valid values are 'admin', 'normal', and 'observer'.
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
	 * @method setMembershipType
	 * @param params the method parameters object
	 * @param {String} params.membershipId the membershipId
	 * @param {String} params.membershipType the membership type to set for the
	 * user. Valid values are 'admin', 'normal', and 'observer'.
	 * @param {String} [params.memberFields='fullName,username'] a
	 * comma-separated list of member fields for the membership. Can be 'all' or
	 * any collection of the following: 'avatarHash', 'bio', 'bioData',
	 * 'confirmed', 'fullName', 'idPremOrgsAdmin', 'initials', 'memberType',
	 * 'products', 'status', 'url', 'username'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setMembershipType = (params) => {
		const { membershipId, memberType, callback } = params;
		const args = {
			values: {
				idMembership: membershipId,
				type: memberType,
				member_fields: 'all'
			},
			propName: `memberships/${membershipId}`,
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};


	/**
	 * @method setEmailPosition
	 * @param params the method parameters object
	 * @param {String} params.emailPosition The position on a list that emailed
	 * cards will be set to. Valid values are 'top' and 'bottom'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setEmailPosition = (params) => {
		const { emailPosition, callback } = params;
		const args = {
			values: { value: emailPosition },
			propName: 'myPrefs/emailPosition',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setEmailList
	 * @param params the method parameters object
	 * @param {String} params.emailListId the list Id that emailed cards will
	 * appear on
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setEmailList = (params) => {
		const { emailListId, callback } = params;
		const args = {
			values: { value: emailListId },
			propName: 'myPrefs/idEmailList',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Shows the list guide.
	 *
	 * @method showListGuide
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const showListGuide = (callback) => {
		const args = {
			values: { value: true },
			propName: 'myPrefs/showListGuide',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};


	/**
	 * Hides the list guide.
	 *
	 * @method hideListGuide
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const hideListGuide = (callback) => {
		const args = {
			values: { value: false },
			propName: 'myPrefs/showListGuide',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Shows the sidebar.
	 *
	 * @method showSidebar
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const showSidebar = (callback) => {
		const args = {
			values: { value: true },
			propName: 'myPrefs/showSidebar',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Hides the sidebar.
	 *
	 * @method hideSidebar
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const hideSidebar = (callback) => {
		const args = {
			values: { value: false },
			propName: 'myPrefs/showSidebar',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Shows the activity section of the sidebar.
	 *
	 * @method showSidebarActivity
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const showSidebarActivity = (callback) => {
		const args = {
			values: { value: true },
			propName: 'myPrefs/showSidebarActivity',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Hide the activity section of the sidebar.
	 *
	 * @method hideSidebarActivity
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const hideSidebarActivity = (callback) => {
		const args = {
			values: { value: false },
			propName: 'myPrefs/showSidebarActivity',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Shows the board actions section of the sidebar.
	 *
	 * @method showSidebarActions
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const showSidebarActions = (callback) => {
		const args = {
			values: { value: true },
			propName: 'myPrefs/showSidebarBoardActions',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

/**
	 * Hides the board actions section of the sidebar.
	 *
	 * @method hideSidebarActions
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const hideSidebarActions = (callback) => {
		const args = {
			values: { value: false },
			propName: 'myPrefs/showSidebarBoardActions',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Shows the members section of the sidebar.
	 *
	 * @method showSidebarMembers
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const showSidebarMembers = (callback) => {
		const args = {
			values: { value: true },
			propName: 'myPrefs/showSidebarMembers',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

/**
	 * Hides the members section of the sidebar.
	 *
	 * @method hideSidebarMembers
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const hideSidebarMembers = (callback) => {
		const args = {
			values: { value: false },
			propName: 'myPrefs/showSidebarMembers',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setName
	 * @param params the method parameters object
	 * @param {String} params.name the new name for the board
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
	 * @method setBackground
	 * @param params the method parameters object
	 * @param {String} params.background the new background. This must be a
	 * standard background name or the id of a custom background.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setBackground = (params) => {
		const { background, callback } = params;
		const args = {
			values: { value: background },
			propName: 'prefs/background',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Enables the board's calendar feed feature.
	 *
	 * @method enableCalendarFeed
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const enableCalendarFeed = (callback) => {
		const args = {
			values: { value: true },
			propName: 'prefs/calendarFeedEnabled',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Disables the board's calendar feed feature.
	 *
	 * @method disableCalendarFeed
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const disableCalendarFeed = (callback) => {
		const args = {
			values: { value: false },
			propName: 'prefs/calendarFeedEnabled',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setCardAging
	 * @param params the method parameters object
	 * @param {String} params.cardAgingType the card aging type. Valid values
	 * are 'regular' and 'pirate'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setCardAging = (params) => {
		const { cardAgingType, callback } = params;
		const args = {
			values: { value: cardAgingType },
			propName: 'prefs/cardAging',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Enables card covers for the board.
	 *
	 * @method enableCardCovers
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const enableCardCovers = (callback) => {
		const args = {
			values: { value: true },
			propName: 'prefs/cardCovers',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Disables card covers for the board.
	 *
	 * @method disableCardCovers
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const disableCardCovers = (callback) => {
		const args = {
			values: { value: false },
			propName: 'prefs/cardCovers',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setCommentsPermissions
	 * @param params the method parameters object
	 * @param {String} params.permissionsLevel the permissions level for the board's
	 * comments. Allowed values are disabled, members, observers, org, public.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setCommentsPermissions = (params) => {
		const { permissionsLevel, callback } = params;
		const args = {
			values: { value: permissionsLevel },
			propName: 'prefs/comments',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setInvitationsPermissions
	 * @param params the method parameters object
	 * @param {String} params.memberLevel the level of member that can send
	 * invitations to the board. Allowed values are admins and members.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setInvitationsPermissions = (params) => {
		const { memberLevel, callback } = params;
		const args = {
			values: { value: memberLevel },
			propName: 'prefs/invitations',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setVisibility
	 * @param params the method parameters object
	 * @param {string} params.visibility the group that a member must belong
	 * to in order to be invited to the board. Valid values are 'org', 'private',
	 * and 'public'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setVisibility = (params) => {
		const { visibility, callback } = params;
		const args = {
			values: { value: visibility },
			propName: 'prefs/permissionLevel',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Allows a member to join without invitation.
	 *
	 * @method enableSelfJoin
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const enableSelfJoin = (callback) => {
		const args = {
			values: { value: true },
			propName: 'prefs/selfJoin',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Disallows members to join without invitation.
	 *
	 * @method disableSelfJoin
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const disableSelfJoin = (callback) => {
		const args = {
			values: { value: false },
			propName: 'prefs/selfJoin',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setVotingPermissions
	 * @param params the method parameters object
	 * @param {String} params.permissionLevel the level of member that is allowed
	 * to vote on cards. Valid values are 'disabled', 'members', 'observers',
	 * 'org', and 'public'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setVotingPermissions = (params) => {
		const { permissionLevel, callback } = params;
		const args = {
			values: { value: permissionLevel },
			propName: 'prefs/voting',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Subscribes the user to the board.
	 *
	 * @method subscribe
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const subscribe = (callback) => {
		const args = {
			values: { value: true },
			propName: 'subscribed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Unsubscribes the user from the board.
	 *
	 * @method unsubscribe
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const unsubscribe = (callback) => {
		const args = {
			values: { value: false },
			propName: 'subscribed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Generates a calendar key.
	 *
	 * @method generateCalendarKey
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the new calendar key
	 */
	const generateCalendarKey = (callback) => {
		const args = {
			propName: 'calendarKey/generate',
			preferNonIdempotence: true
		};

		return obj.set(args).then(res => {
			const rawObj = JSON.parse(res.body);
			return Promise.resolve(rawObj.myPrefs.calendarKey)
					.nodeify(callback);
		});
	};

	/**
	 * Generates an email key.
	 *
	 * @method generateEmailKey
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the new email key
	 */
	const generateEmailKey = (callback) => {
		const args = {
			propName: 'emailKey/generate',
			preferNonIdempotence: true
		};

		return obj.set(args).then(res => {
			const rawObj = JSON.parse(res.body);
			return Promise.resolve(rawObj.myPrefs.emailKey)
					.nodeify(callback);
		});
	};

	/**
	 * Adds a new label to the board with the given name.
	 *
	 * @method addLabel
	 * @param params the method parameters object
	 * @param {String} params.name the name of the label
	 * @param {String} params.color the color of the label
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a label object for the
	 * new label
	 */
	const addLabel = (params) => {
		const { name, color, callback } = params;
		const args = {
			values: { name, color },
			propName: 'labels',
			preferNonIdempotence: true
		};

		return obj.set(args).then(res => {
			const objParams = adaptParams(res, 'label')(cParams);
			return Promise.resolve(cParams.objConstructor(objParams))
					.nodeify(callback);
		});
	};

	/**
	 * @method addList
	 * @param params the method parameters object
	 * @param {String} params.name the name of the new list
	 * @param {String | Number} [params.position='top'] the position of the list. Valid
	 * value are 'top', 'bottom', or a positive number.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a list object for the new list
	 */
	const addList = (params) => {
		const { name, position, callback } = params;
		const args = {
			values: { name, pos: position },
			propName: 'lists',
			preferNonIdempotence: true
		};

		return obj.set(args).then(res => {
			const objParams = adaptParams(res, 'list')(cParams);
			return Promise.resolve(cParams.objConstructor(objParams))
					.nodeify(callback);
		});
	};

	/**
	 * Mark the board as viewed by the user.
	 *
	 * @method markAsViewed
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const markAsViewed = (callback) => {
		const args = {
			propName: 'markAsViewed',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method addPowerUp
	 * @param params the method parameters object
	 * @param {String} params.powerUp the powerUp to add to the board. Valid
	 * values are 'calendar', 'cardAging', 'recap', and 'voting'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addPowerUp = (params) => {
		const { powerUp, callback } = params;
		const args = {
			values: { value: powerUp },
			propName: 'powerUps',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	DELETES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method removeMember
	 * @param params the method parameters object
	 * @param {String} params.memberId member to remove from the board
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
	 * @method removePowerUp
	 * @param params the method parameters object
	 * @param {String} params.powerUp the powerUp to remove from the board. Valid
	 * values are 'calendar', 'cardAging', 'recap', and 'voting'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removePowerUp = (params) => {
		const { powerUp, callback } = params;
		const args = {
			propName: `powerUps/${powerUp}`,
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
		getAmISubscribed,
		getBoardStars,
		getCards,
		getChecklists,
		isClosed,
		getLastActivityDate,
		getLastViewedDate,
		getDescription,
		getDescriptionData,
		getInvitations,
		getInvited,
		getLabels,
		getLabelNames,
		getLists,
		getMembers,
		getMembersInvited,
		getMemberships,
		getMyPreferences,
		getName,
		getOrganization,
		getPinned,
		getPreferences,
		getPowerUps,
		getShortLink,
		getShortUrl,
		isStarred,
		getUrl,
		close,
		reopen,
		setDescription,
		setOrganization,
		setLabelName,
		addMemberAndSetType,
		setMemberType,
		setMembershipType,
		setEmailPosition,
		setEmailList,
		showListGuide,
		hideListGuide,
		showSidebar,
		hideSidebar,
		showSidebarActivity,
		hideSidebarActivity,
		showSidebarActions,
		hideSidebarActions,
		showSidebarMembers,
		hideSidebarMembers,
		setName,
		setBackground,
		enableCalendarFeed,
		disableCalendarFeed,
		setCardAging,
		enableCardCovers,
		disableCardCovers,
		setCommentsPermissions,
		setInvitationsPermissions,
		setVisibility,
		enableSelfJoin,
		disableSelfJoin,
		setVotingPermissions,
		subscribe,
		unsubscribe,
		generateCalendarKey,
		generateEmailKey,
		addLabel,
		addList,
		markAsViewed,
		addPowerUp,
		removeMember,
		removePowerUp
	});
};

module.exports = board;
