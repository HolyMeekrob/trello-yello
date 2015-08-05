const R = require('ramda');
const trelloObj = require('../trelloObj');

/**
 * A class representing the Card Trello object.
 *
 * @class card
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
const card = function (cParams) {
	'use strict';

	cParams.objType = 'card';
	const obj = trelloObj(cParams);

	const { get, getId, set, del } = {
		get: obj.get,
		getId: obj.getId,
		set: obj.set,
		delete: obj.delete
	};

	////////////////////////////////////////////////////////////////////////////
	//															PUBLIC METHODS														//
	////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////
	//																	CREATE																//
	////////////////////////////////////////////////////////////////////////////

	// TODO: Function to create a new card

	////////////////////////////////////////////////////////////////////////////
	//																		READS																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method getAmISubscribed
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the user is subscribed
	 * to the card
	 */
	const getAmISubscribed = (callback) => {
		const args = {
			propName: 'subscribed',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getActions
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the card's actions. This is an
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
	 * @method getAddCommentEmail
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the email address which, when
	 * new emails are received, will add a comment to the card
	 */
	const getAddCommentEmail = (callback) => {
		const args = {
			propName: 'email',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getAttachmentCoverId
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the id of the attachment used
	 * as the card's cover
	 */
	const getAttachmentCoverId = (callback) => {
		const args = {
			propName: 'idAttachmentCover',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getAttachments
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the card's attachments
	 */
	const getAttachments = (callback) => {
		const args = {
			propName: 'attachments',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getBadges
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the card's badges
	 */
	const getBadges = (callback) => {
		const args = {
			propName: 'badges',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getBoard
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the board the card belongs to.
	 * This is a board object.
	 */
	const getBoard = (callback) => {
		const args = {
			propName: 'board',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getCheckItemStates
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the state of the card's
	 * checklist items
	 */
	const getCheckItemStates = (callback) => {
		const args = {
			propName: 'checkItemStates',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getChecklists
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the card's checklists. This
	 * is an array of checklist objects.
	 */
	const getChecklists = (callback) => {
		const args = {
			propName: 'checklists',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getDescription
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the card's description
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
	 * @return {Object} a Promise that resolves to the card's description data
	 */
	const getDescriptionData = (callback) => {
		const args = {
			propName: 'descData',
			callback
		};
		return obj.get(args);
	};


	/**
	 * @method getDueDate
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the card's dueDate,
	 * or null if it doesn't have one
	 */
	const getDueDate = (callback) => {
		const args = {
			propName: 'due',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getIsArchived
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the card has been
	 * archived
	 */
	const getIsArchived = (callback) => {
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
	 * @return {Object} a Promise that resolves to the timestamp of the last
	 * activity performed on the card
	 */
	const getLastActivityDate = (callback) => {
		const args = {
			propName: 'dateLastActivity',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getLabels
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the card's labels
	 */
	const getLabels = (callback) => {
		const args = {
			propName: 'labels',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getList
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to list that the card belongs to.
	 * This is a list object.
	 */
	const getList = (callback) => {
		const args = {
			propName: 'list',
			callback
	};
		return obj.get(args);
	};


	/**
	 * @method getLongUrl
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to card's longform url
	 */
	const getLongUrl = (callback) => {
		const args = {
			propName: 'url',
			callback
		};
		return obj.get(args);
	};


	/**
	 * @method getMembers
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the card's members. This is
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
	 * @method getMembersVoted
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the members who have voted for
	 * this card. This is an array of member objects.
	 */
	const getMembersVoted = (callback) => {
		const args = {
			propName: 'membersVoted',
			callback
	};
		return obj.get(args);
	};

	/**
	 * @method getName
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the card's name
	 */
	const getName = (callback) => {
		const args = {
			propName: 'name',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getPosition
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to card's position
	 */
	const getPosition = (callback) => {
		const args = {
			propName: 'pos',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getShortId
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to shortform version of the
	 * card's id
	 */
	const getShortId = (callback) => {
		const args = {
			propName: 'idShort',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getShortLink
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to shortform version of the
	 * card's link
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
	 * @return {Object} a Promise that resolves to shortform version of the
	 * card's url
	 */
	const getShortUrl = (callback) => {
		const args = {
			propName: 'shortUrl',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getStickers
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to objects representing the
	 * card's stickers
	 */
	const getStickers = (callback) => {
		const args = {
			propName: 'stickers',
			callback
	};
		return obj.get(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * Archives the card.
	 *
	 * @method archive
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const archive = (callback) => {
		const args = {
			values: { value: true },
			propName: 'closed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Unarchives the card.
	 *
	 * @method unarchive
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const unarchive = (callback) => {
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
	 * @param {String} description the new description
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
	 * @method setDueDate
	 * @param params the method parameters object
	 * @param {Date} params.dueDate the due date or null to remove the due date
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setDueDate = (params) => {
		const { dueDate, callback } = params;
		const args = {
			values: { value: dueDate },
			propName: 'due',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setCover
	 * @param params the method parameters object
	 * @param {String} params.attachmentCoverId the id of the attachment to use
	 * as the card's cover
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setCover = (params) => {
		const { attachmentCoverId, callback } = params;
		const args = {
			values: { value: attachmentCoverId },
			propName: 'idAttachmentCover',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Removes the cover from the card.
	 *
	 * @method removeCover
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeCover = (callback) => {
		const args = {
			values: {},
			propName: 'idAttachmentCover',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setBoard
	 * @param params the method parameters object
	 * @param {String} params.boardId the board to move the card to
	 * @param {String} [params.listId] the list to move the card to. If this isn't
	 * included, then the card will be moved to the board's first list.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setBoard = (params) => {
		const { boardId, listId, callback } = params;
		const args = {
			values: { value: boardId, idList: listId },
			propName: 'idBoard',
			preferNonIdempotence: false,
			callback
		};
		args.values = R.pickBy((val) => !R.isNil(val), args.values);

		return obj.set(args);
	};


	/**
	 * @method setList
	 * @param params the method parameters object
	 * @param {String} params.listId the list to move the card to
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setList = (params) => {
		const { listId, callback } = params;
		const args = {
			values: { value: listId },
			propName: 'idList',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setMembers
	 * @param params the method parameters object
	 * @param {String} params.memberIds a comma separated list of member id's.
	 * The card will have these members and no others.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setMembers = (params) => {
		const { memberIds, callback } = params;
		const args = {
			values: { value: memberIds },
			propName: 'idMembers',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setLabels
	 * @param params the method parameters object
	 * @param {String} params.colors a comma separated list of colors, or 'all'
	 * for all colors. The card will have these label colors and no others.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setLabels = (params) => {
		const { colors, callback } = params;
		const args = {
			values: { value: colors },
			propName: 'labels',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setName
	 * @param params the method parameters object
	 * @param {String} params.name the new name of the card
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
	 * @method setPosition
	 * @param params the method parameters object
	 * @param {Number} params.position the new position of the card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setPosition = (params) => {
		const { position, callback } = params;
		const args = {
			values: { value: position },
			propName: 'pos',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Edits the sticker using the given values.
	 *
	 * @method updateSticker
	 * @param params the method parameters object
	 * @param {String} params.stickerId the id of the sticker to edit
	 * @param {Number} [params.top] the top coordinate of the sticker
	 * @param {Number} [params.left] the left coordinate of the sticker
	 * @param {Number} [params.zIndex] the z-index of the sticker
	 * @param {Number} [params.rotate] the rotation value of the sticker
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const updateSticker = (params) => {
		const { stickerId, top, left, zIndex, rotate, callback } = params;
		const args = {
			values: { idSticker: stickerId, top, left, zIndex, rotate },
			propName: `stickers/${stickerId}`,
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Subscribe the user to the card.
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
	 * Unsubscribe the user from the card.
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
	 * @method addComment
	 * @param params the method parameters object
	 * @param {String} params.comment the comment to add to the card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addComment = (params) => {
		const { comment, callback } = params;
		const args = {
			values: { text: comment },
			propName: 'actions/comments',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Adds an attachment to the card. You can either add a file using form data
	 * or a url.
	 *
	 * @method addAttachment
	 * @param params the method parameters object
	 * @param {String} [params.file] the file data to add
	 * @param {String} [params.url] the url of the file to add
	 * @param {String} [params.name] the name of the file
	 * @param {String} [params.mimeType] the mime type of the file. This is only used if
	 * params.file is set.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addAttachment = (params) => {
		const { file, url, name, mimeType, callback } = params;
		const args = {
			values: { file, url, name, mimeType },
			propName: 'attachments',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};


	/**
	 * @method convertChecklistItemToCard
	 * @param params the method parameters object
	 * @param {String} params.checklistId the id of the checklist item's parent
	 * checklist
	 * @param {String} params.checklistItemId the id of the checklist item
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const convertChecklistItemToCard = (params) => {
		const { checklistId, checklistItemId, callback } = params;
		const args = {
			values: {
				idChecklist: checklistId,
				idCheckItem: checklistItemId
			},
			propName: `checklist/${checklistId}/checkItem/` +
					`${checklistItemId}/convertToCard`,
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method addChecklist
	 * @param params the method parameters object
	 * @param {String} [params.checklistId] the id of the checklist to move to
	 * the card. If this is null or not included, then a new checklist is
	 * created.
	 * @param {String} [params.name] the name of the checklist
	 * @param {String} [params.cloneId] the id of the checklist to clone
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addChecklist = (params) => {
		const { checklistId, name, cloneId, callback } = params;
		const args = {
			values: {
				value: checklistId,
				name,
				idChecklistSource: cloneId,
				callback
			},
			propName: 'checklists',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method addLabelById
	 * @param params the method parameters object
	 * @param {String} params.labelId the label to add to the card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addLabelById = (params) => {
		const { labelId, callback } = params;
		const args = {
			values: { value: labelId },
			propName: 'idLabels',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	// If name doesn't exist for that color, it adds
	// another label with that color to the board, and gives it
	// the given name. Otherwise, it reuses the label with that
	// color and name combination

	/**
	 * @method addLabelByColor
	 * @param params the method parameters object
	 * @param {String} params.color the color of the label to add
	 * @param {String} [params.name] the name on the label. If the color and name
	 * combination already exist on the board, then that label is used. If not, a
	 * new label is created with the given color and name combination.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addLabelByColor = (params) => {
		const { color, name, callback } = params;
		const args = {
			values: { color, name },
			propName: 'labels',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method addMember
	 * @param params the method parameters object
	 * @param {String} params.memberId the id of the member to add to the card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addMember = (params) => {
		const { memberId, callback } = params;
		const args = {
			values: { value: memberId },
			propName: 'idMembers',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Mark all notifications related to the card as read.
	 *
	 * @method addmarkNotificationsRead
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const markNotificationsRead = (callback) => {
		const args = {
			values: {},
			propName: 'markAssociatedNotificationsRead',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setMemberVoteToYes
	 * @param params the method parameters object
	 * @param {String} params.memberId the id of the member who will give a yes
	 * vote on the card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setMemberVoteToYes = (params) => {
		const { memberId, callback } = params;
		const args = {
			values: { value: memberId },
			propName: 'membersVoted',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method addSticker
	 * @param params the method parameters object
	 * @param {String} params.image the sticker image to add
	 * @param {Number} [params.top] the top coordinate of the sticker
	 * @param {Number} [params.left] the left coordinate of the sticker
	 * @param {Number} [params.zIndex] the z-index of the sticker
	 * @param {Number} [params.rotate] the rotation value of the sticker
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const addSticker = (params) => {
		const { image, top, left, zIndex, rotate, callback } = params;
		const args = {
			values: { image, top, left, zIndex, rotate },
			propName: 'stickers',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	DELETES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method removeComment
	 * @param params the method parameters object
	 * @param {String} params.actionId the id of the comment action to remove
	 * from the card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeComment = (params) => {
		const { actionId, callback } = params;
		const args = {
			propName: `actions/${actionId}/comments`,
			callback
		};

		return obj.delete(args);
	};

	/**
	 * @method removeAttachment
	 * @param params the method parameters object
	 * @param {String} params.attachmentId the id of the attachment to remove
	 * from the card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeAttachment = (params) => {
		const { attachmentId, callback } = params;
		const args = {
			propName: `attachments/${attachmentId}`,
			callback
		};

		return obj.delete(args);
	};

	/**
	 * @method removeLabelId
	 * @param params the method parameters object
	 * @param {String} params.labelId the id of the label to remove from the card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeLabelById = (params) => {
		const { labelId, callback } = params;
		const args = {
			propName: `idLabels/${labelId}`,
			callback
		};

		return obj.delete(args);
	};

	/**
	 * @method removeLabelByColor
	 * @param params the method parameters object
	 * @param {String} params.color the name of the cold to remove from the card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeLabelByColor = (params) => {
		const { color, callback } = params;
		const args = {
			propName: `labels/${color}`,
			callback
		};

		return obj.delete(args);
	};

	/**
	 * @method removeMember
	 * @param params the method parameters object
	 * @param {String} params.memberId the id of the member to remove from the
	 * card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeMember = (params) => {
		const { memberId, callback } = params;
		const args = {
			propName: `idMembers/${memberId}`,
			callback
		};

		return obj.delete(args);
	};

	/**
	 * @method setMemberVoteToNo
	 * @param params the method parameters object
	 * @param {String} params.memberId the id of the member who will have their
	 * vote rescinded
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setMemberVoteToNo = (params) => {
		const { memberId, callback } = params;
		const args = {
			propName: `membersVoted/${memberId}`,
			callback
		};

		return obj.delete(args);
	};

	/**
	 * @method removeSticker
	 * @param params the method parameters object
	 * @param {String} params.stickerId the id of the sticker to remove from the
	 * card
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeSticker = (params) => {
		const { stickerId, callback } = params;
		const args = {
			propName: `stickers/${stickerId}`,
			callback
		};

		return obj.delete(args);
	};

	return Object.freeze({
		get,
		getId,
		set,
		delete: del,
		getAmISubscribed,
		getActions,
		getAddCommentEmail,
		getAttachmentCoverId,
		getAttachments,
		getBadges,
		getBoard,
		getCheckItemStates,
		getChecklists,
		getDescription,
		getDescriptionData,
		getDueDate,
		getIsArchived,
		getLastActivityDate,
		getLabels,
		getList,
		getLongUrl,
		getMembers,
		getMembersVoted,
		getName,
		getPosition,
		getShortId,
		getShortLink,
		getShortUrl,
		getStickers,
		archive,
		unarchive,
		setDescription,
		setDueDate,
		setCover,
		removeCover,
		setBoard,
		setList,
		setMembers,
		setLabels,
		setName,
		setPosition,
		updateSticker,
		subscribe,
		unsubscribe,
		addComment,
		addAttachment,
		convertChecklistItemToCard,
		addChecklist,
		addLabelById,
		addLabelByColor,
		addMember,
		markNotificationsRead,
		setMemberVoteToYes,
		addSticker,
		removeComment,
		removeAttachment,
		removeLabelById,
		removeLabelByColor,
		removeMember,
		setMemberVoteToNo,
		removeSticker
	});
};

module.exports = card;
