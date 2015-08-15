const trelloObj = require('../trelloObj');

/**
 * A class representing the webhook Trello object.
 *
 * @class webhook
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
const webhook = (cParams) => {
	'use strict';

	cParams.objType = 'webhook';
	const obj = trelloObj(cParams);

	const { get, getId, set, del } = obj;

	////////////////////////////////////////////////////////////////////////////
	//																		READS																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method isActive
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the webhook is active
	 */
	const isActive = (callback) => {
		const args = {
			propName: 'active',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getCallbackUrl
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the webhook's callback URL
	 */
	const getCallbackUrl = (callback) => {
		const args = {
			propName: 'callbackURL',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getDescription
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the webhook's description
	 */
	const getDescription = (callback) => {
		const args = {
			propName: 'description',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getWatchId
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the id of the model that the
	 * webhook is watching
	 */
	const getWatchId = (callback) => {
		const args = {
			propName: 'idModel',
			callback
		};
		return obj.get(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * Activates the webhook.
	 *
	 * @method activate
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const activate = (callback) => {
		const args = {
			values: { value: true },
			propName: 'active',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Deactivates the webhook.
	 *
	 * @method deactivate
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const deactivate = (callback) => {
		const args = {
			values: { value: false },
			propName: 'active',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setCallbackUrl
	 * @param {Object} params the method parameters object
	 * @param {String} params.callbackUrl the callback URL. Must be a valid URL
	 * that is reachable with a HEAD request
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setCallbackUrl = (params) => {
		const { callbackUrl, callback } = params;
		const args = {
			values: { value: callbackUrl },
			propName: 'callbackURL',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setDescription
	 * @param {Object} params the method parameters object
	 * @param {String} params.description the webhook's description
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setDescription = (params) => {
		const { description, callback } = params;
		const args = {
			values: { value: description },
			propName: 'description',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setWatchId
	 * @param {Object} params the method parameters object
	 * @param {String} params.watchId the id of the model to watch
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setWatchId = (params) => {
		const { watchId, callback } = params;
		const args = {
			values: { value: watchId },
			propName: 'idModel',
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
		isActive,
		getCallbackUrl,
		getDescription,
		getWatchId,
		activate,
		deactivate,
		setCallbackUrl,
		setDescription,
		setWatchId
	});
};

module.exports = webhook;
