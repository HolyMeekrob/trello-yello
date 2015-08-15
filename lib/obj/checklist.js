const Promise = require('bluebird');
const trelloObj = require('../trelloObj');

/**
 * A class representing the Checklist Trello object.
 *
 * @class checklist
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
const checklist = (cParams) => {
	'use strict';

	cParams.objType = 'checklist';
	const obj = trelloObj(cParams);

	const { get, getId, set, del } = obj;

	////////////////////////////////////////////////////////////////////////////
	//																		READS																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method getBoard
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to a board object representing
	 * the checklist's board
	 */
	const getBoard = (callback) => {
		const args = {
			propName: 'board',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getCard
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to a an array of card objects
	 * representing the checklist's cards
	 */
	const getCards = (callback) => {
		const args = {
			propName: 'cards',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getCheckItems
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to an array of checklist items
	 */
	const getCheckItems = (callback) => {
		const args = {
			propName: 'checkItems',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getName
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the name of the checklist
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
	 * @return {Object} a Promise that resolves to the checklist's position
	 */
	const getPosition = (callback) => {
		const args = {
			propName: 'pos',
			callback
		};
		return obj.get(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method setCard
	 * @param {Object} params the method parameters object
	 * @param {String} params.cardId the id of the card to move the checklist to
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setCard = (params) => {
		const { cardId, callback } = params;
		const args = {
			values: { value: cardId },
			propName: 'idCard',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setName
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the name of the checklist
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
	 * @param {Object} params the method parameters object
	 * @param {Number} params.position the checklist's position
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
	 * @method addCheckItem
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the name of the checklist item
	 * @param {String | Number} [params.position='bottom'] the position of the
	 * checklist item. Valid values are 'top', 'bottom', or a positive number.
	 * @param {Boolean} [params.checked=false] checked whether or not the
	 * checklist item should be checked
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the id of the new checklist
	 * item
	 */
	const addChecklistItem = (params) => {
		const { name, position, checked, callback } = params;
		const args = {
			values: { name, pos: position, checked },
			propName: 'checkItems',
			preferNonIdempotence: true
		};

		return obj.set(args).then(res => {
			const rawObj = JSON.parse(res.body);
			return Promise.resolve(rawObj.id).nodeify(callback);
		});
	};

	////////////////////////////////////////////////////////////////////////////
	//																	DELETES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method removeChecklistItem
	 * @param {Object} params the method parameters object
	 * @param {String} params.checklistItemId the id of the checklist item to
	 * delete
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeChecklistItem = (params) => {
		const { checklistItemId, callback } = params;
		const args = {
			propName: `checkItems/${checklistItemId}`,
			callback
		};

		return obj.del(args);
	};

	return Object.freeze({
		get,
		getId,
		set,
		del,
		getBoard,
		getCards,
		getCheckItems,
		getName,
		getPosition,
		setCard,
		setName,
		setPosition,
		addChecklistItem,
		removeChecklistItem
	});
};

module.exports = checklist;
