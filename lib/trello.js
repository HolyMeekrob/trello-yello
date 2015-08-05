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
const trello = function (cParams) {
	'use strict';

	const { key, token } = cParams;

	if (R.isNil(key) || R.isNil(token)) {
		throw new Error('Key, token, and network service are required.');
	}

	const config = new Config(key, token, 1);

	////////////////////////////////////////////////////////////////////////////
	//															PUBLIC METHODS														//
	////////////////////////////////////////////////////////////////////////////

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
					return trelloFactory.createTrelloObject({
						maps,
						objType,
						config,
						id: rawObj.id,
						net,
						initialVals: rawObj,
						objConstructor: trelloFactory.createTrelloObject
					});
				}).nodeify(callback);
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
				.then(response => JSON.parse(response.body))
				.nodeify(callback);
	};

	return Object.freeze({
		create,
		get,
		search
	});
};

module.exports = trello;
