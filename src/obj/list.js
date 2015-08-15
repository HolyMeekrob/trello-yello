import trelloObj from '../trelloObj';

/**
 * A class representing the List Trello object.
 *
 * @class list
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
export default (cParams) => {
	cParams.objType = 'list';
	const obj = trelloObj(cParams);

	const { get, getId, set, del } = obj;

	////////////////////////////////////////////////////////////////////////////
	//																		READS																//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * @method getActions
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to an array of action objects
	 * representing the list's actions
	 */
	const getActions = (callback) => {
		const args = {
			propName: 'actions',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getAmISubscribed
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the user is subscribed
	 * to the list
	 */
	const getAmISubscribed = (callback) => {
		const args = {
			propName: 'subscribed',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getBoard
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to a board object representing
	 * the list's board
	 */
	const getBoard = (callback) => {
		const args = {
			propName: 'board',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method getCards
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to an array of cards objects
	 * representing the list's cards
	 */
	const getCards = (callback) => {
		const args = {
			propName: 'cards',
			callback
		};
		return obj.get(args);
	};

	/**
	 * @method isArchived
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to true if the list is archived
	 */
	const isArchived = (callback) => {
		const args = {
			propName: 'closed',
			callback
		};

		return obj.get(args);
	};

	/**
	 * @method getName
	 * @param {Function} [callback] the callback function once the operation is
	 * complete
	 * @return {Object} a Promise that resolves to the list's name
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
	 * @return {Object} a Promise that resolves to the list's position
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
	 * Archives the list.
	 *
	 * @method archive
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
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
	 * Unarchives the list.
	 *
	 * @method unarchive
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const unarchive = (callback) => {
		const args = {
			values: {value: false },
			propName: 'closed',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Archives all cards in the list.
	 *
	 * @method archiveAllCards
	 * @param {Function} [callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const archiveAllCards = (callback) => {
		const args = {
			propName: 'archiveAllCards',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * Moves all cards in the list to a new list.
	 *
	 * @method moveAllCards
	 * @param {Object} params the method parameters object
	 * @param {String} params.boardId the id of the board to move the cards to
	 * @param {String} params.listId the id of the list to move the cards to
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const moveAllCards = (params) => {
		const { boardId, listId, callback } = params;
		const args = {
			values: { idBoard: boardId, idList: listId },
			propName: 'moveAllCards',
			preferNonIdempotence: true,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setBoard
	 * @param {Object} params the method parameters object
	 * @param {String} params.boardId the id of the board to move the list to
	 * @param {String | Number} [params.position='top'] the position to move the
	 * list to. Valid values are 'top', 'bottom', or a positive number.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete
	 * @return {Object} a Promise that resolves to a truthy value if successful
	 */
	const setBoard = (params) => {
		const { boardId, position, callback } = params;
		const args = {
			values: { value: boardId, pos: position },
			propName: 'idBoard',
			preferNonIdempotence: false,
			callback
		};

		return obj.set(args);
	};

	/**
	 * @method setName
	 * @param {Object} params the method parameters object
	 * @param {String} params.name the name of the list
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
	 * @param {String} params.position the position of the list on the board
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
	 * Subscribes the user to the list.
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
	 * Unsubscribes the user from the list.
	 *
	 * @method subscribe
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

	return Object.freeze({
		get,
		getId,
		set,
		del,
		getActions,
		getAmISubscribed,
		getBoard,
		getCards,
		isArchived,
		getName,
		getPosition,
		archive,
		unarchive,
		archiveAllCards,
		moveAllCards,
		setBoard,
		setName,
		setPosition,
		subscribe,
		unsubscribe
	});
};
