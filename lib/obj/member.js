const Promise = require('bluebird');
const trelloObj = require('../trelloObj');

/**
 * A class representing the Member Trello object.
 *
 * @class member
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
const member = (cParams) => {
	'use strict';

	cParams.objType = 'member';
	const obj = trelloObj(cParams);

	const { get, getId, set, del } = obj;

	////////////////////////////////////////////////////////////////////////////
	//																		READS																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method getActions
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's actions. This is an
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
	 * @method getAvatarHash
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's avatar hash
	 */
	const getAvatarHash = (callback) => {
		const args = {
			propName: 'avatarHash',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getAvatarSource
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the source URL for the
	 * member's avatar
	 */
	const getAvatarSource = (callback) => {
		const args = {
			propName: 'avatarSource',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getBio
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to member's bio
	 */
	const getBio = (callback) => {
		const args = {
			propName: 'bio',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getBioData
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to an object containing the
	 * member's bio data
	 */
	const getBioData = (callback) => {
		const args = {
			propName: 'bioData',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getBoardBackgrounds
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to all of the backgrounds the
	 * member is eligible to use
	 */
	const getBoardBackgrounds = (callback) => {
		const args = {
			propName: 'boardBackgrounds',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getBoards
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's boards. This is an
	 * array of board objects.
	 */
	const getBoards = (callback) => {
		const args = {
			propName: 'boards',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getBoardsInvited
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the boards that the member is
	 * invited to. This is an array of board objects.
	 */
	const getBoardsInvited = (callback) => {
		const args = {
			propName: 'boardsInvited',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getBoardStars
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's board stars
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
	 * @return {Object} a Promise that resolves to the member's cards. This is an
	 * array of card objects.
	 */
	const getCards = (callback) => {
		const args = {
			propName: 'cards',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getConfirmed
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the member's account
	 * has been confirmed
	 */
	const getConfirmed = (callback) => {
		const args = {
			propName: 'confirmed',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getCustomBoardBackgrounds
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's custom
	 * backgrounds
	 *
	 */
	const getCustomBoardBackgrounds = (callback) => {
		const args = {
			propName: 'customBoardBackgrounds',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getCustomEmoji
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to member's custom emoji
	 */
	const getCustomEmoji = (callback) => {
		const args = {
			propName: 'customEmoji',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getCustomStickers
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's custom stickers
	 */
	const getCustomStickers = (callback) => {
		const args = {
			propName: 'customStickers',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getEmail
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's email address
	 */
	const getEmail = (callback) => {
		const args = {
			propName: 'email',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getFullName
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to member's full name
	 */
	const getFullName = (callback) => {
		const args = {
			propName: 'fullName',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getGravatarHash
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to member's Gravatar hash
	 */
	const getGravatarHash = (callback) => {
		const args = {
			propName: 'gravatarHash',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getPinnedBoards
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the id's of the boards that
	 * the member has pinned.
	 */
	const getPinnedBoards = (callback) => {
		const args = {
			propName: 'idBoardsPinned',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getInitials
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's initials
	 */
	const getInitials = (callback) => {
		const args = {
			propName: 'initials',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getLoginTypes
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's login types
	 */
	const getLoginTypes = (callback) => {
		const args = {
			propName: 'loginTypes',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getMemberType
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to member's type
	 */
	const getMemberType = (callback) => {
		const args = {
			propName: 'memberType',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getNotifications
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to member's notifications. This
	 * is an array of notification objects.
	 */
	const getNotifications = (callback) => {
		const args = {
			propName: 'notifications',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getOneTimeMessagesDismissed
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the types of messages that
	 * are dismissed for the member
	 */
	const getOneTimeMessagesDismissed = (callback) => {
		const args = {
			propName: 'oneTimeMessagesDismissed',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getOrganizations
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organizations that the
	 * member belongs to. This is an array of organization objects.
	 */
	const getOrganizations = (callback) => {
		const args = {
			propName: 'organizations',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getOrganizationsInvited
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the organizations that the
	 * member is invited to. This is an array of organization objects.
	 */
	const getOrganizationsInvited = (callback) => {
		const args = {
			propName: 'organizationsInvited',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getPreferences
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's preferences
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
	 * @return {Object} a Promise that resolves to the premium features that the
	 * member has available
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
	 * @return {Object} a Promise that resolves to the member's products
	 */
	const getProducts = (callback) => {
		const args = {
			propName: 'products',
			callback
		};
		return obj.get(args);
	};


	/**
	 * @method getSavedSearches
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's saved searches
	 */
	const getSavedSearches = (callback) => {
		const args = {
			propName: 'savedSearches',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getStatus
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's activity status
	 */
	const getStatus = (callback) => {
		const args = {
			propName: 'status',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getTokens
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's active tokens
	 */
	const getTokens = (callback) => {
		const args = {
			propName: 'tokens',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getTrophies
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to member's trophies
	 */
	const getTrophies = (callback) => {
		const args = {
			propName: 'trophies',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getUploadedAvatarHash
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's uploaded avatar
	 * hash
	 */
	const getUploadedAvatarHash = (callback) => {
		const args = {
			propName: 'uploadedAvatarHash',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getUrl
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the url of the member's
	 * profile page
	 */
	const getUrl = (callback) => {
		const args = {
			propName: 'url',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getUsername
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member's username
	 */
	const getUsername = (callback) => {
		const args = {
			propName: 'username',
			callback
		};
		return obj.get(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method setAvatarSource
	 * @param {Object} params the method parameters object
	 * @param {String} params.source the source of the avatar. Valid values are
	 * 'gravatar', 'upload', or 'none'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setAvatarSource = (params) => {
		const { source, callback } = params;
		const args = {
			values: { value: source },
			propName: 'avatarSource',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setBio
	 * @param {Object} params the method parameters object
	 * @param {String} params.bio the member's bio
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setBio = (params) => {
		const { bio, callback } = params;
		const args = {
			values: { value: bio },
			propName: 'bio',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method updateBoardStar
	 * @param {Object} params the method parameters object
	 * @param {String} params.boardStarId the board star to update
	 * @param {String} [params.boardId] the board id to move the board star to
	 * @param {String | Number} [params.position] the position of the board star.
	 * Valid values are 'top', 'bottom', or a positive number.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const updateBoardStar = (params) => {
		const { boardStarId, boardId, position, callback } = params;
		const args = {
			values: { idBoard: boardId, pos: position },
			propName: `boardStars/${boardStarId}`,
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method updateCustomBoardBackground
	 * @param {Object} params the method parameters object
	 * @param {String} params.boardBackgroundId the board background id
	 * @param {Boolean} [params.tile] whether or not to tile the background
	 * @param {String} [params.brightness] the brightness of the background.
	 * Valid values are 'dark', 'light', or 'unknown'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const updateCustomBoardBackground = (params) => {
		const { boardBackgroundId, tile, brightness, callback } = params;
		const args = {
			values: { tile, brightness },
			propName: `customBoardBackgrounds/${boardBackgroundId}`,
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setFullName
	 * @param {Object} params the method parameters object
	 * @param {String} params.fullName the member's full name
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setFullName = (params) => {
		const { fullName, callback } = params;
		const args = {
			values: { value: fullName },
			propName: 'fullName',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setInitials
	 * @param {Object} params the method parameters object
	 * @param {String} params.initials the member's initials. This must be a
	 * string of length 1-4 that doesn't begin or end with a space.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setInitials = (params) => {
		const { initials, callback } = params;
		const args = {
			values: { value: initials },
			propName: 'initials',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method enableColorBlindMode
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const enableColorBlindMode = (callback) => {
		const args = {
			values: { value: true },
			propName: 'prefs/colorBlind',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method disableColorBlindMode
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const disableColorBlindMode = (callback) => {
		const args = {
			values: { value: false },
			propName: 'prefs/colorBlind',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setLocale
	 * @param {Object} params the method parameters object
	 * @param {String} params.locale the member's locale
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setLocale = (params) => {
		const { locale, callback } = params;
		const args = {
			values: { value: locale },
			propName: 'prefs/locale',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Sets the member's preference for email summaries to hourly.
	 *
	 * @method setEmailSummariesHourly
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setEmailSummariesHourly = (callback) => {
		const args = {
			values: { value: 60 },
			propName: 'prefs/minutesBetweenSummaries',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Sets the member's preference for email summaries to immediately.
	 *
	 * @method setEmailSummariesInstantly
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setEmailSummariesInstantly = (callback) => {
		const args = {
			values: { value: 1 },
			propName: 'prefs/minutesBetweenSummaries',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Turns off email summaries for member.
	 *
	 * @method setEmailSummariesNever
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setEmailSummariesNever = (callback) => {
		const args = {
			values: { value: -1 },
			propName: 'prefs/minutesBetweenSummaries',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method updateSavedSearch
	 * @param {Object} params the method parameters object
	 * @param {String} params.savedSearchId the saved search to update
	 * @param {String} [params.name] the name of the saved search
	 * @param {String} [params.query] the search query
	 * @param {String | Number} the saved search's position. Valid values are
	 * 'top', 'bottom', or a positive number.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const updateSavedSearch = (params) => {
		const { savedSearchId, name, query, position, callback } = params;
		const args = {
			values: { name, query, pos: position },
			propName: `savedSearches/${savedSearchId}`,
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setUsername
	 * @param {Object} params the method parameters object
	 * @param {String} params.username the member's username. Must have a length
	 * of at least three characters. Only lowercase letters, underscores, and
	 * numbers are allowed. Must be unique.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setUsername = (params) => {
		const { username, callback } = params;
		const args = {
			values: { value: username },
			propName: 'username',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};


	/**
	 * @method addAvatar
	 * @param {Object} params the method parameters object
	 * @param {File} params.file the avatar file
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addAvatar = (params) => {
		const { file, callback } = params;
		const args = {
			values: { file },
			propName: 'avatar',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method addBoardStar
	 * @param {Object} params the method parameters object
	 * @param {String} params.boardId the id of the board that is getting the star
	 * @param {String | Number} params.position the position of the board star.
	 * Valid values are 'top', 'bottom', or a positive number.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the id of the new board star
	 */
	const addBoardStar = (params) => {
		const { boardId, position, callback } = params;
		const args = {
			values: { idBoard: boardId, pos: position },
			propName: 'boardStars',
			preferNonIdempotence: true
		};

		return obj.set(args).then(res => {
			const rawObj = res.body;
			return Promise.resolve(JSON.parse(rawObj).id).nodeify(callback);
		});
	};


	/**
	 * @method addCustomBoardBackground
	 * @param {Object} params the method parameters object
	 * @param {File} params.file the image file
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the id of the new custom
	 * board background
	 */
	const addCustomBoardBackground = (params) => {
		const { file, callback } = params;
		const args = {
			values: { file },
			propName: 'customBoardBackgrounds',
			preferNonIdempotence: true
		};

		return obj.set(args).then(res => {
			const rawObj = res.body;
			return Promise.resolve(JSON.parse(rawObj).id).nodeify(callback);
		});
	};

	/**
	 * @method addCustomEmoji
	 * @param {Object} params the method parameters object
	 * @param {File} params.file the image file for the emoji
	 * @param {String} params.name the name of the emojy
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the id of the new custom emoji
	 */
	const addCustomEmoji = (params) => {
		const { file, name, callback } = params;
		const args = {
			values: { file, name },
			propName: 'customEmoji',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args).then(res => {
			const rawObj = res.body;
			return Promise.resolve(JSON.parse(rawObj).id).nodeify(callback);
		});
	};

	/**
	 * @method addCustomSticker
	 * @param {Object} params the method parameters object
	 * @param {File} params.file the image file for the sticker
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the id of the new custom
	 * sticker
	 */
	const addCustomSticker = (params) => {
		const { file, callback } = params;
		const args = {
			values: { file },
			propName: 'customStickers',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args).then(res => {
			const rawObj = res.body;
			return Promise.resolve(JSON.parse(rawObj).id).nodeify(callback);
		});
	};

	/**
	 * @method setOneTimeMessagesDismissed
	 * @param {Object} params the method parameters object
	 * @param {String} params.messageType the type of message to dismiss
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setOneTimeMessagesDismissed = (params) => {
		const { messageType, callback } = params;
		const args = {
			values: { value: messageType },
			propName: 'oneTimeMessagesDismissed',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method addSavedSearch
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the name of the saved search
	 * @param {String} params.query the query to save
	 * @param {String} params.position the position of the search. Valid values
	 * are 'top', 'bottom', or a positive number.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the id of the new saved search
	 */
	const addSavedSearch = (params) => {
		const { name, query, position, callback } = params;
		const args = {
			values: { name, query, pos: position },
			propName: 'savedSearches',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args).then(res => {
			const rawObj = res.body;
			return Promise.resolve(JSON.parse(rawObj).id).nodeify(callback);
		});
	};

	////////////////////////////////////////////////////////////////////////////
	//																	DELETES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method removeBoardStar
	 * @param {Object} params the method parameters object
	 * @param {String} params.boardStarId the board star to remove
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeBoardStar = (params) => {
		const { boardStarId, callback } = params;
		const args = {
			propName: `boardStars/${boardStarId}`,
			callback
		};

		return obj.del(args);
	};

	/**
	 * @method removeCustomBoardBackground
	 * @param {Object} params the method parameters object
	 * @param {String} params.boardBackgroundId the id of the custom board
	 * background to remove
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeCustomBoardBackground = (params) => {
		const { boardBackgroundId, callback } = params;
		const args = {
			propName: `customBoardBackgrounds/${boardBackgroundId}`,
			callback
		};

		return obj.del(args);
	};

	/**
	 * @method removeCustomSticker
	 * @param {Object} params the method parameters object
	 * @param {String} params.customStickerId the id of the custom sticker to
	 * remove
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeCustomSticker = (params) => {
		const { customStickerId, callback } = params;
		const args = {
			propName: `customStickers/${customStickerId}`,
			callback
		};

		return obj.del(args);
	};

	/**
	 * @method removeSavedSearch
	 * @param {Object} params the method parameters object
	 * @param {String} params.savedSearchId the id of the saved search to remove
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeSavedSearch = (params) => {
		const { savedSearchId, callback } = params;
		const args = {
			propName: `savedSearches/${savedSearchId}`,
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
		getAvatarHash,
		getAvatarSource,
		getBio,
		getBioData,
		getBoardBackgrounds,
		getBoards,
		getBoardsInvited,
		getBoardStars,
		getCards,
		getConfirmed,
		getCustomBoardBackgrounds,
		getCustomEmoji,
		getCustomStickers,
		getEmail,
		getFullName,
		getGravatarHash,
		getPinnedBoards,
		getInitials,
		getLoginTypes,
		getMemberType,
		getNotifications,
		getOneTimeMessagesDismissed,
		getOrganizations,
		getOrganizationsInvited,
		getPreferences,
		getPremiumFeatures,
		getProducts,
		getSavedSearches,
		getStatus,
		getTokens,
		getTrophies,
		getUploadedAvatarHash,
		getUrl,
		getUsername,
		setAvatarSource,
		setBio,
		updateBoardStar,
		updateCustomBoardBackground,
		setFullName,
		setInitials,
		enableColorBlindMode,
		disableColorBlindMode,
		setLocale,
		setEmailSummariesHourly,
		setEmailSummariesInstantly,
		setEmailSummariesNever,
		updateSavedSearch,
		setUsername,
		addAvatar,
		addBoardStar,
		addCustomBoardBackground,
		addCustomEmoji,
		addCustomSticker,
		setOneTimeMessagesDismissed,
		addSavedSearch,
		removeBoardStar,
		removeCustomBoardBackground,
		removeCustomSticker,
		removeSavedSearch
	});
};

module.exports = member;
