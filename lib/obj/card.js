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
 * @param {Object} [params.initialVals] the initial values of the Trello
 * object
 */
const constructor = function (cParams) {
	'use strict';

	cParams.objType = 'card';
	const obj = trelloObj(cParams);

	const { get, set, del } = { get: obj.get, set: obj.set, delete: obj.delete };

	//////////////////////////////////////////////////////////////////////////////
	//															PUBLIC METHODS															//
	//////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////
//																		READS																		//
	//////////////////////////////////////////////////////////////////////////////

	const getActions = (callback) => {
		const args = {
			propName: 'actions',
			callback
		};
		return obj.get(args);
	};

	const getAttachments = (callback) => {
		const args = {
			propName: 'attachments',
			callback
		};
		return obj.get(args);
	};

	const getBoard = (callback) => {
		const args = {
			propName: 'board',
			callback
		};
		return obj.get(args);
	};

	const getCheckItemStates = (callback) => {
		const args = {
			propName: 'checkItemStates',
			callback
		};
		return obj.get(args);
	};

	const getChecklists = (callback) => {
		const args = {
			propName: 'checklists',
			callback
		};
		return obj.get(args);
	};

	const getLabels = (callback) => {
		const args = {
			propName: 'labels',
			callback
		};
		return obj.get(args);
	};

	const getList = (callback) => {
		const args = {
			propName: 'list',
			callback
	};
		return obj.get(args);
	};

	const getMembers = (callback) => {
		const args = {
			propName: 'members',
			callback
	};
		return obj.get(args);
	};

	const getMembersVoted = (callback) => {
		const args = {
			propName: 'membersVoted',
			callback
	};
		return obj.get(args);
	};

	const getStickers = (callback) => {
		const args = {
			propName: 'stickers',
			callback
	};
		return obj.get(args);
	};

	//////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																	//
	//////////////////////////////////////////////////////////////////////////////

	const archive = (callback) => {
		const args = {
			values: { value: true },
			propName: 'closed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	const unarchive = (callback) => {
		const args = {
			values: { value: false },
			propName: 'closed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

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

	const setDue = (params) => {
		const { due, callback } = params;
		const args = {
			values: { value: due },
			propName: 'due',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

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

	const removeCover = (callback) => {
		const args = {
			values: {},
			propName: 'idAttachmentCover',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	// Without listId it goes to first list
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

	// top: number, higher you go, farther down it moves
	// left: number, higher you go, farther right it moves
	// zIndex: number
	// rotate: number
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

	const subscribe = (callback) => {
		const args = {
			values: { value: true },
			propName: 'subscribed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	const unsubscribe = (callback) => {
		const args = {
			values: { value: false },
			propName: 'subscribed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

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

	const addChecklist = (params) => {
		const { checklistId, name, sourceId, callback } = params;
		const args = {
			values: {
				value: checklistId,
				name,
				idChecklistSource: sourceId,
				callback
			},
			propName: 'checklists',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

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

	const markNotificationsRead = (callback) => {
		const args = {
			values: {},
			propName: 'markAssociatedNotificationsRead',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	const setMemberVoted = (params) => {
		const { memberId, callback } = params;
		const args = {
			values: { value: memberId },
			propName: 'membersVoted',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	// TODO: How does this work?
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

	//////////////////////////////////////////////////////////////////////////////
	//																	DELETES																	//
	//////////////////////////////////////////////////////////////////////////////

	const removeComment = (params) => {
		const { actionId, callback } = params;
		const args = {
			propName: `actions/${actionId}/comments`,
			callback
		};

		return obj.delete(args);
	};

	const removeAttachment = (params) => {
		const { attachmentId, callback } = params;
		const args = {
			propName: `attachments/${attachmentId}`,
			callback
		};

		return obj.delete(args);
	};

	const removeLabelById = (params) => {
		const { labelId, callback } = params;
		const args = {
			propName: `idLabels/${labelId}`,
			callback
		};

		return obj.delete(args);
	};

	const removeLabelByColor = (params) => {
		const { color, callback } = params;
		const args = {
			propName: `labels/${color}`,
			callback
		};

		return obj.delete(args);
	};

	const removeMember = (params) => {
		const { memberId, callback } = params;
		const args = {
			propName: `idMembers/${memberId}`,
			callback
		};

		return obj.delete(args);
	};

	const removeMemberVoted = (params) => {
		const { memberId, callback } = params;
		const args = {
			propName: `membersVoted/${memberId}`,
			callback
		};

		return obj.delete(args);
	};

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
		set,
		delete: del,
		getActions,
		getAttachments,
		getBoard,
		getCheckItemStates,
		getChecklists,
		getLabels,
		getList,
		getMembers,
		getMembersVoted,
		getStickers,
		archive,
		unarchive,
		setDescription,
		setDue,
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
		setMemberVoted,
		addSticker,
		removeComment,
		removeAttachment,
		removeLabelById,
		removeLabelByColor,
		removeMember,
		removeMemberVoted,
		removeSticker
	});
};

module.exports = constructor;
