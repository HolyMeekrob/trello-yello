const Promise = require('bluebird');
const R = require('Ramda');
const Config = require('./config');
const maps = require('./trelloPropertyMaps');
const net = require('../net/networkService');
const trelloFactory = require('./trelloFactory');

/**
 * Trello Yello's entry point for accessing the Trello API. It serves as both an
 * object factory for Trello objects as well as a platform for performing
 * operations that aren't associated with specific Trello objects, such as
 * queries against the Trello search engine.
 *
 * @class trello
 * @constructor
 * @param {Object} params the constructor parameters object
 * @param {String} params.key the application key for accessing Trello
 * @param {String} params.token a valid Trello API token
 */
const trello = (cParams) => {
	'use strict';

	const { key, token } = cParams;

	if (R.isNil(key) || R.isNil(token)) {
		throw new Error('Key, token, and network service are required.');
	}

	const config = new Config(key, token, 1);

	/**
	 * Creates a new Trello object for the given type. If the object type is
	 * invalid or if the object type does not allow creation through the API,
	 * then this method resolves to an error.
	 *
	 * @method create
	 * @param {Object} params the method parameters object
	 * @param {String} params.objType the type of Trello object. Please refer to
	 * other documentation for the list of allowed types.
	 * @param {Object} params.initialVals the initial values of the Trello
	 * object
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to the newly created trelloObj
	 * object
	 * @private
	 */
	const create = (params) => {
		const { objType, initialVals, callback } = params;

		if (maps[objType] === undefined) {
			return Promise.reject(new Error(
					'Object type ' + objType + ' does not exist.'
			)).nodeify(callback);
		}

		if (!maps[objType].allowCreation) {
			return Promise.reject(new Error(
					'Object type ' + objType + ' does not allow creation.'
			)).nodeify(callback);
		}

		return net.post(config, objType, null, initialVals)
				.then(response => {
					const rawObj = JSON.parse(response.body);
					return Promise.resolve(trelloFactory.createTrelloObject({
						maps,
						objType,
						config,
						id: rawObj.id,
						net,
						initialVals: rawObj,
						objConstructor: trelloFactory.createTrelloObject
					})).nodeify(callback);
				});
	};

	/**
	 * Retrieves an existing Trello object.
	 *
	 * @method get
	 * @param {Object} params the method parameters object
	 * @param {String} params.objType the type of Trello object. Please refer to other
	 * documentation for the list of allowed types.
	 * @param {String} params.id the ID of the Trello object
	 * @return {Object} the retrieved trelloObj object
	 */
	const get = (params) => {
		const { objType, id } = params;
		if (R.isNil(id)) {
			throw new Error('Must supply a valid object type and id.');
		}
		return trelloFactory.createTrelloObject({
			maps,
			objType,
			config,
			id,
			net,
			objConstructor: trelloFactory.createTrelloObject
		});
	};

	////////////////////////////////////////////////////////////////////////////
	//															PUBLIC METHODS														//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method createBoard
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the board's name
	 * @param {String} [params.description] the board's description
	 * @param {String} [params.organizationId] the board's organization
	 * @param {String} [params.cloneId] the id of the existing board to clone
	 * @param {String} [params.keepFromSource='all'] a comma-separated list of
	 * properties to keep from the source board, or 'all'
	 * @param {String} [params.powerUps] the powerUps to give the new board. This
	 * is a comma separated list of values that can include 'calendar',
	 * 'cardAging', 'recap', and 'voting'.
	 * @param {String} [params.permissionLevel='default'] the permissions level
	 * of the board. Valid values are 'org', 'private', and 'public'.
	 * @param {String} [params.voting='disabled'] the board permissions for
	 * voting. Valid values are 'disabled', 'members', 'observers', 'org', and
	 * 'public'.
	 * @param {String} [params.comments='members'] the board permissions for
	 * commenting. Valid values are 'disabled', 'members', 'observers', 'org',
	 * and 'public'.
	 * @param {String} [params.invitations='members'] the board permissions for
	 * sending invitations. Valid values are 'admins' and 'members'.
	 * @param {Boolean} [params.selfJoin=true] the board permissions for allowing
	 * members to self join
	 * @param {Boolean} [params.cardCovers=true] the board setting for card
	 * covers.
	 * @param {String} [params.background='blue'] the board's background
	 * @param {String} [params.cardAging='regular'] the board's card aging
	 * setting. Valid values are 'regular' and 'pirate'.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to the new board
	 */
	const createBoard = (params) => {
		const initialVals = {
			name: params.name,
			desc: params.description,
			idOrganization: params.organizationId,
			idBoardSource: params.cloneId,
			keepFromSource: params.keepFromSource,
			powerUp: params.powerUps,
			prefs_permissionLevel: params.permissionLevel,
			prefs_voting: params.voting,
			prefs_comments: params.comments,
			prefs_invitations: params.invitations,
			prefs_selfJoin: params.selfJoin,
			prefs_cardCovers: params.cardCovers,
			prefs_background: params.background,
			prefs_cardAging: params.cardAging
		};

		const args = {
			objType: 'board',
			initialVals,
			callback: params.callback
		};

		return create(args);
	};

	/**
	 * @method createCard
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the card's name
 	 * @param {String} params.listId the id of the list the card will be added to
	 * @param {String} [params.description] the card's description
	 * @param {String | Number} [params.position='bottom'] the card's position.
	 * This can be 'top', 'bottom', or a positive number.
	 * @param {Date} [params.dueDate] the card's due date. If not included, it won't
	 * have a due date.
	 * @param {String} [params.labels] a comma-separated list of colors, or 'all'
	 * @param {String} [params.memberIds] a comma-separated list of member id's
	 * that will be assigned to the card
	 * @param {String} [params.labelIds] a comma-separated list of label id's
	 * that will be assigned to the card
	 * @param {String} [params.urlSource] if included, a URL starting with
	 * http:// or https://
	 * @param {File} [params.fileSource] a file
	 * @param {String} [params.sourceCardId] the id of the card to clone
	 * @param {String} [params.keepFromSource='all'] a comma-separated list of
	 * properties to keep from the source card, or 'all'
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to the new card
	 */
	const createCard = (params) => {
		const initialVals = {
			name: params.name,
			desc: params.description,
			pos: params.position,
			due: params.dueDate,
			labels: params.labels,
			idList: params.listId,
			idMembers: params.memberIds,
			idLabels: params.labelIds,
			urlSource: params.urlSource,
			fileSource: params.fileSource,
			idCardSource: params.sourceCardId,
			keepFromSource: params.keepFromSource
		};

		const args = {
			objType: 'card',
			initialVals,
			callback: params.callback
		};

		return create(args);
	};

	/**
	 * @method createChecklist
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the checklist's name
	 * @param {String} [params.boardId] the id of the checklist's board
	 * @param {String} [params.cardId] the id of the checklist's card
	 * @param {String | Number} [params.position='bottom'] the checklist's
	 * position. Valid values are 'top', 'bottom', or a positive number.
	 * @param {String} [params.cloneId] the id of a checklist to clone
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to the new checklist
	 */
	const createChecklist = (params) => {
		const initialVals = {
			name: params.name,
			idBoard: params.boardId,
			idCard: params.cardId,
			pos: params.position,
			idChecklistSource: params.cloneId
		};

		const args = {
			objType: 'checklist',
			initialVals,
			callback: params.callback
		};

		return create(args);
	};

	/**
	 * @method createLabel
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the label's name
 	 * @param {String} params.color the label's color
	 * @param {String} params.boardId the id of the label's board
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to the new label
	 */
	const createLabel = (params) => {
		const initialVals = {
			name: params.name,
			color: params.color,
			idBoard: params.boardId
		};

		const args = {
			objType: 'label',
			initialVals,
			callback: params.callback
		};

		return create(args);
	};

	/**
	 * @method createList
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the list's name
	 * @param {String} params.boardId the id of the list's board
	 * @param {String} [params.cloneId] the id of the list to clone
	 * @param {String | Number} [params.position='top'] the position of the list.
	 * Valid values are 'top', 'bottom', or a positive number.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to the new list
	 */
	const createList = (params) => {
		const initialVals = {
			name: params.name,
			idBoard: params.boardId,
			idListSource: params.cloneId,
			pos: params.position
		};

		const args = {
			objType: 'list',
			initialVals,
			callback: params.callback
		};

		return create(args);
	};

	/**
	 * @method createOrganization
	 * @param {Object} params the method parameters object
	 * @param {String} [params.name] the organization's name
	 * @param {String} [params.displayName] the organization's display name
	 * @param {String} [params.description] the organization's description
	 * @param {String} [params.website] the organization's website. Must be a
	 * valid URL starting with 'http://', 'https://', or null.
	 * @return {Object} a Promise that resolves to the new organization
	 */
	const createOrganization = (params) => {
		const initialVals = {
			name: params.name,
			displayName: params.displayName,
			desc: params.description,
			website: params.website
		};

		const args = {
			objType: 'organization',
			initialVals,
			callback: params.callback
		};

		return create(args);
	};

	/**
	 * @method createWebhook
	 * @param params the method parameters object
	 * @param {String} params.watchId the id of the model to watch
	 * @param {String} params.callbackUrl the url of the webhook's callback
	 * @param {String} [params.description] the description of the webhook
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the new webhook object
	 */
	const createWebhook = (params) => {
		const initialVals = {
			idModel: params.watchId,
			callbackURL: params.callbackUrl,
			description: params.description
		};

		const args = {
			objType: 'webhook',
			initialVals,
			callback: params.callback
		};

		return create(args);
	};

	/**
	 * @method getAction
	 * @param {String} actionId the id of the action
	 * @return {Object} the action object
	 */
	const getAction = (actionId) => {
		return get({ objType: 'action', id: actionId });
	};

	/**
	 * @method getBoard
	 * @param {String} boardId the id of the board
	 * @return {Object} the board object
	 */
	const getBoard = (boardId) => {
		return get({ objType: 'board', id: boardId });
	};

	/**
	 * @method getCard
	 * @param {String} cardId the id of the card
	 * @return {Object} the card object
	 */
	const getCard = (cardId) => {
		return get({ objType: 'card', id: cardId });
	};

	/**
	 * @method getChecklist
	 * @param {String} checklistId the id of the checklist
	 * @return {Object} the checklist object
	 */
	const getChecklist = (checklistId) => {
		return get({ objType: 'checklist', id: checklistId });
	};

	/**
	 * @method getLabel
	 * @param {String} labelId the id of the label
	 * @return {Object} the label object
	 */
	const getLabel = (labelId) => {
		return get({ objType: 'label', id: labelId });
	};

	/**
	 * @method getList
	 * @param {String} listId the id of the list
	 * @return {Object} the list object
	 */
	const getList = (listId) => {
		return get({ objType: 'list', id: listId });
	};

	/**
	 * @method getMember
	 * @param {String} memberId the id of the member
	 * @return {Object} the member object
	 */
	const getMember = (memberId) => {
		return get({ objType: 'member', id: memberId });
	};

	/**
	 * @method getNotification
	 * @param {String} notificationId the id of the notification
	 * @return {Object} the notification object
	 */
	const getNotification = (notificationId) => {
		return get({ objType: 'notification', id: notificationId });
	};

	/**
	 * @method getOrganization
	 * @param {String} organizationId the id of the organization
	 * @return {Object} the organization object
	 */
	const getOrganization = (organizationId) => {
		return get({ objType: 'organization', id: organizationId });
	};

	/**
	 * @method getToken
	 * @param {String} tokenId the id of the token
	 * @return {Object} the token object
	 */
	const getToken = (tokenId) => {
		return get({ objType: 'token', id: tokenId });
	};

	/**
	 * @method getWebhook
	 * @param {String} webhookId the id of the webhook
	 * @return {Object} the webhook object
	 */
	const getWebhook = (webhookId) => {
		return get({ objType: 'webhook', id: webhookId });
	};

	/**
	 * @method getCurrentUser
	 * @return {Object} the member object for the current user
	 */
	const getCurrentUser = () => {
		return getMember('me');
	};

	/**
	 * Marks all notifications read by the user.
	 *
	 * @method markAllNotificationsRead
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const markAllNotificationsRead = (callback) => {
		return net.post(config, 'notification', 'all', {}, 'read').nodeify(callback);
	};

	/**
	 * Runs a query against the Trello search engine.
	 *
	 * @method
	 * @param {Object} params the method parameters object
	 * @param {string} params.query the search query to run
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} the query result
	 */
	const search = (params) => {
		const { query, callback } = params;
		const parameters = {
			query,
			idBoards: 'mine',
			modelTypes: 'all',
			board_fields: 'all',
			boards_limit: '1000',
			card_fields: 'all',
			cards_limit: '1000',
			card_board: 'true',
			card_list: 'true',
			card_members: 'true',
			card_stickers: 'true',
			card_attachments: 'true',
			organization_fields: 'all',
			organizations_limit: '1000',
			member_fields: 'all',
			members_limit: '1000',
			partial: 'false'
		};

		return net.get(config, 'search', null, parameters)
				.then(response => Promise.resolve(JSON.parse(response.body))
						.nodeify(callback));
	};

	return Object.freeze({
		createBoard,
		createCard,
		createChecklist,
		createLabel,
		createList,
		createOrganization,
		createWebhook,
		getAction,
		getBoard,
		getCard,
		getChecklist,
		getLabel,
		getList,
		getMember,
		getNotification,
		getOrganization,
		getToken,
		getWebhook,
		getCurrentUser,
		markAllNotificationsRead,
		search
	});
};

module.exports = trello;
