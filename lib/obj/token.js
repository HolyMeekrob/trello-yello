const Promise = require('bluebird');
const trelloObj = require('../trelloObj');
const adaptParams =	require('./objUtil').adaptConstructorParameters;

/**
 * A class representing the Token Trello object.
 *
 * @class token
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
const token = (cParams) => {
	'use strict';

	cParams.objType = 'token';
	const obj = trelloObj(cParams);

	const { get, getId, set, del } = obj;

	////////////////////////////////////////////////////////////////////////////
	//																		READS																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method getDateCreated
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the timestamp that the token
	 * was created
	 */
	const getDateCreated = (callback) => {
		const args = {
			propName: 'dateCreated',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getDateExpires
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the timestamp that the token
	 * expires
	 */
	const getDateExpires = (callback) => {
		const args = {
			propName: 'dateExpires',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getIdentifier
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the name of the app that
	 * requested the token
	 */
	const getIdentifier = (callback) => {
		const args = {
			propName: 'identifier',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getMember
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the member that the token
	 * belongs to. This is a member object.
	 */
	const getMember = (callback) => {
		const args = {
			propName: 'member',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getPermissions
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the token's permissions
	 */
	const getPermissions = (callback) => {
		const args = {
			propName: 'permissions',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getWebhooks
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the webhooks associated with
	 * this token. This is an array of webhook objects.
	 */
	const getWebhooks = (callback) => {
		const args = {
			propName: 'webhooks',
			callback
		};
		return obj.get(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method addWebhook
	 * @param params the method parameters object
	 * @param {String} params.watchId the id of the model to watch
	 * @param {String} params.callbackUrl the url of the webhook's callback
	 * @param {String} [params.description] the description of the webhook
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to the new webhook object
	 */
	const addWebhook = (params) => {
		const { watchId, callbackUrl, description, callback } = params;
		const args = {
			values: { idModel: watchId, callbackURL: callbackUrl, description },
			propName: 'webhooks',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args).then(res => {
			const objParams = adaptParams(res, 'webhook')(cParams);
			return Promise.resolve(cParams.objConstructor(objParams))
					.nodeify(callback);
		});
	};

	////////////////////////////////////////////////////////////////////////////
	//																	DELETES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method removeWebhook
	 * @param params the method parameters object
	 * @param {String} params.webhookId the webhook to delete
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const removeWebhook = (params) => {
		const { webhookId, callback } = params;
		const args = {
			propName: `webhooks/${webhookId}`,
			callback
		};

		return obj.del(args);
	};

	return Object.freeze({
		get,
		getId,
		set,
		del,
		getDateCreated,
		getDateExpires,
		getIdentifier,
		getMember,
		getPermissions,
		getWebhooks,
		addWebhook,
		removeWebhook
	});
};

module.exports = token;
