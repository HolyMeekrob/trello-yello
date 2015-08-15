const trelloObj = require('../trelloObj');

/**
 * A class representing the Action Trello object.
 *
 * @class action
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
 const action = (cParams) => {
	'use strict';

	cParams.objType = 'action';
	const obj = trelloObj(cParams);

	const { get, getId, set, del } = obj;

	////////////////////////////////////////////////////////////////////////////
	//																		READS																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method getBoard
	 * @param {Function} [callback] the callback function once the operation is complete
	 * @return {Object} a Promise that resolves to the action's board. This is a
	 * board object.
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
	 * @return {Object} a Promise that resolves to the action's card. This is a
	 * card object.
	 */
	const getCard = (callback) => {
		const args = {
			propName: 'card',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getData
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to action data
	 */
	const getData = (callback) => {
		const args = {
			propName: 'data',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getDate
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to action's date
	 */
	const getDate = (callback) => {
		const args = {
			propName: 'date',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getDisplay
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to action's display values
	 */
	const getDisplay = (callback) => {
		const args = {
			propName: 'display',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getEntities
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to action's entities
	 */
	const getEntities = (callback) => {
		const args = {
			propName: 'entities',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getList
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the action's list. This is a
	 * list object.
	 */
	const getList = (callback) => {
		const args = {
			propName: 'list',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getMember
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to action's member. This is a
	 * member object.
	 */
	const getMember = (callback) => {
		const args = {
			propName: 'member',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getCreator
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member who created the
	 * action. This is a member object.
	 */
	const getCreator = (callback) => {
		const args = {
			propName: 'memberCreator',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getOrganization
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to action's organization. This is
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
	 * @method getType
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to action's type
	 */
	const getType = (callback) => {
		const args = {
			propName: 'type',
			callback
		};

		return obj.get(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method setText
	 * @param params the method parameters object
	 * @param {String} params.text the action text
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setText = (params) => {
		const { text, callback } = params;
		const args = {
		values: { value: text },
			propName: 'text',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};



	return Object.freeze({
		get,
		getId,
		set,
		del,
		getBoard,
		getCard,
		getData,
		getDate,
		getDisplay,
		getEntities,
		getList,
		getMember,
		getCreator,
		getOrganization,
		getType,
		setText
	});
 };

 module.exports = action;
