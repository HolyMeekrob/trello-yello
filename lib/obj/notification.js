const trelloObj = require('../trelloObj');

/**
 * A class representing the Notification Trello object.
 *
 * @class notification
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
const notification = (cParams) => {
	'use strict';

	cParams.objType = 'notification';
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
	 * the notification's board
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
	 * @return {Object} a Promise that resolves to a card object representing the
	 * notification's card
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
	 * @return {Object} a Promise that resolves to the notification's data
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
	 * @return {Object} a Promise that resolves to notification's date
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
	 * @return {Object} a Promise that resolves to the notification's display
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
	 * @return {Object} a Promise that resolves to the notification's entities
	 */
	const getEntities = (callback) => {
		const args = {
			propName: 'entities',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getCreator
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to a member object representing
	 * the notification's creator
	 */
	const getCreator = (callback) => {
		const args = {
			propName: 'memberCreator',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getOrganizations
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to an organization object
	 * representing the notification's organization
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
	 * @return {Object} a Promise that resolves to the type of the notification
	 */
	const getType = (callback) => {
		const args = {
			propName: 'type',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method isUnread
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the notification is
	 * unread
	 */
	const isUnread = (callback) => {
		const args = {
			propName: 'unread',
			callback
		};
		return obj.get(args);
	};

	////////////////////////////////////////////////////////////////////////////
	//																	UPDATES																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * Marks the notification as read.
	 *
	 * @method markAsRead
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const markAsRead = (callback) => {
		const args = {
			values: { value: false },
			propName: 'unread',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Marks the notification as unread.
	 *
	 * @method markAsRead
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const markAsUnread = (callback) => {
		const args = {
			values: { value: true },
			propName: 'unread',
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
		getCreator,
		getOrganization,
		getType,
		isUnread,
		markAsRead,
		markAsUnread
	});
};

module.exports = notification;
