const trelloObj = require('../trelloObj');

/**
 * A class representing the Label Trello object.
 *
 * @class label
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
const label = (cParams) => {
	'use strict';

	cParams.objType = 'label';
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
	 * the label's board
	 */
	const getBoard = (callback) => {
		const args = {
			propName: 'board',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getColor
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to color of the label
	 */
	const getColor = (callback) => {
		const args = {
			propName: 'color',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getName
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to name of the label
	 */
	const getName = (callback) => {
		const args = {
			propName: 'name',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getUses
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to number of times the label is
	 * used
	 */
	const getUses = (callback) => {
		const args = {
			propName: 'uses',
			callback
		};
		return obj.get(args);
	};



	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method setColor
	 * @param params the method parameters object
	 * @param {String} params.color the color of the label
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setColor = (params) => {
		const { color, callback } = params;
		const args = {
			values: { value: color },
			propName: 'color',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setName
	 * @param params the method parameters object
	 * @param {String} params.name the name of the label
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

	return Object.freeze({
		get,
		getId,
		set,
		del,
		getBoard,
		getColor,
		getName,
		getUses,
		setColor,
		setName
	});
};

module.exports = label;
