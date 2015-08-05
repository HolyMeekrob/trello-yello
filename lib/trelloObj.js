const Promise = require('bluebird');
const R = require('ramda');
const hasValidPath = require('./util').hasValidPath;
const removeNonAutoProperties = require('./util').removeNonAutoProperties;

/**
 * Base object for Trello objects.
 *
 * @class trelloObj
 * @constructor
 * @param {Object} params the constructor parameters object
 * @param {Object} params.maps the container for all Trello object
 * property mappings. Please refer to its documentation for details.
 * @param {String} params.objType the type of Trello object. Please refer to
 * other documentation for the list of allowed types.
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
const trelloObj = function (cParams) {
	'use strict';

	const { maps, objType, config, id, net, initialVals, objConstructor } = cParams;

	if (R.any(R.isNil, [config, id, net])) {
		throw new Error('Configuration, id, and network service are required.');
	}

	if (typeof objConstructor !== 'function') {
		throw new Error('objConstructor function is required.');
	}

	/**
	 * Pointer to the mapping entity for this Trello object type. This mapping
	 * contains all allowable property names and operations for this object type.
	 *
	 * @private
	 * @property trelloPropertyNames
	 * @type Object
	 * @final
	 */
	const trelloPropertyNames = maps[objType].props;

	if (trelloPropertyNames === undefined) {
		throw new Error('Invalid object type: ' + objType);
	}

	/**
	 * Stores all of the object's Trello properties internally.
	 *
	 * @private
	 * @property trelloProps
	 * @type Object
	 */
	let trelloProps = { id: id };

	// Remove all fields that are themselves Trello objects so that we can
	// construct them properly. Everything else should be copied into this object
	// so as to reduce future network connections.
	trelloProps = R.merge(trelloProps,
			removeNonAutoProperties(initialVals, trelloPropertyNames));

	/**
	 * Expires local data. The next time a get() operation is called, new data
	 * will be retrieved over the network.
	 *
	 * @private
	 * @method expireData
	 * @return {void}
	 */
	const expireData = () => {
		trelloProps = { id: id };
	};

	/**
	 * Retrieves all of the auto-properties for the Trello object. auto-properties
	 * are properties that can be retrieved as part of the GET operation on the
	 * object itself, and are not themselves Trello objects.
	 *
	 * @private
	 * @method getAutoProperties
	 * @return {Object} a Promise that resolves to an object containing all of the
	 * auto-properties and their values.
	 */
	const getAutoProperties = () => {
		return net.get(config, objType, trelloProps.id,
				maps[objType].defaultArgs)
				.then(response => {
					const rawObj = JSON.parse(response.body);
					return removeNonAutoProperties(rawObj, trelloPropertyNames);
				});
	};

	/**
	 * Retrieves a Trello property on this object that is itselfg a Trello object.
	 *
	 * @private
	 * @method getSubTypeProperty
	 * @param {String} prop the property to retrieve
	 * @param {Object} propData the property mappings for this Trello object
	 * @return either a trelloObj object or an array of trelloObj objects.
	 */
	const getSubTypeProperty = (prop, propData) => {
		const trelloType = propData.trelloType;
		const parameters = propData.get;

		return net.get(config, objType, trelloProps.id, parameters, prop)
			.then(response => {
				const sub = JSON.parse(response.body);

				if (Array.isArray(sub)) {
					return sub.map(subObj =>
						objConstructor({
							maps,
							objType: trelloType,
							config,
							id: subObj.id,
							net,
							initialVals: subObj,
							objConstructor
						})
					);
				}
				else {
					return objConstructor({
						maps,
						objType: trelloType,
						config,
						id: sub.id,
						net,
						initialVals: sub,
						objConstructor
					});
				}
			});
	};

	/**
	 * Retrieves a property from the network.
	 *
	 * @private
	 * @method getUnretrievedProperty
	 * @param {String} prop the property to retrieve
	 * @return a Promise that resolves to the retrieved property.
	 */
	const getUnretrievedProperty = (prop) => {
		// If the property does not exist in the Trello API
		if (!trelloPropertyNames.hasOwnProperty(prop)) {
			return Promise.reject(new Error(
					'Trello Property ' + objType + '/' + prop + ' is not valid.'
			));
		}

		if (!trelloPropertyNames[prop].hasOwnProperty('get')) {
			return Promise.reject(new Error(
					'Trello Property ' + objType + '/' + prop + ' is not gettable.'
			));
		}

		const propData = trelloPropertyNames[prop];
		if (propData.isAutoProp) {
			return getAutoProperties()
					.then(response => {
						trelloProps = R.merge(trelloProps, response);
						return trelloProps[prop];
					});
		}

		else if (R.isNil(propData.trelloType)) {
			return net.get(config, objType, trelloProps.id, propData.get, prop)
					.then(response => {
						trelloProps[prop] = JSON.parse(response.body);
						return trelloProps[prop];
					});
		}

		else {
			return getSubTypeProperty(prop, propData)
					.then(subObj => {
						trelloProps[prop] = subObj;
						return trelloProps[prop];
					});
		}
	};

	/**
	 * Sets properties on the object with the given values.
	 *
	 * @private
	 * @method
	 * @param {Object} values the values to set on the object. This object is
	 * a mapping of properties supported by the Trello API and their new values.
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const setObject = (values) => {
		if (maps[objType].allowEmptyPut) {
			return net.put(config, objType, trelloProps.id, values);
		}

		return Promise.reject(new Error(
				'Cannot set values on Trello object type ' + objType
		));
	};

	/**
	 * Sets values on a property of the Trello object.
	 *
	 * @private
	 * @method setProperty
	 * @param {Object} values the new values
	 * @param {String} propPath the path to the property. This is a series
	 * of property names and identifiers split by forward slashes (/). This
	 * path must match a mapping in the Trello object property maps, otherwise
	 * this method will resolve to an error.
	 * @param {Boolean} [params.preferNonIdempotence=false] only relevant if
	 * the property can be set in both an idempotent and non-idempotent manner.
	 * If this value is set to true, then the non-idempotent operation will be
	 * used. Otherwise, the operation will be idempotent.
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const setProperty = (value, propPath, preferNonIdempotence) => {
		const path = propPath.split('/').filter(str => str !== '');

		if (path.length === 0) {
			return Promise.reject(new Error('Malformed property path: ' + propPath));
		}

		if (!trelloPropertyNames.hasOwnProperty(path[0])) {
			return Promise.reject(new Error(
				'Trello Property ' + objType + '/' + propPath + ' is not valid.'
			));
		}

		const property = trelloPropertyNames[path[0]];

		let firstVerb;
		let secondVerb;
		if (preferNonIdempotence) {
			firstVerb = 'post';
			secondVerb = 'put';
		}
		else {
			firstVerb = 'put';
			secondVerb = 'post';
		}

		const remainingPath = path.slice(1);

		if(property.hasOwnProperty(firstVerb)
				&& hasValidPath(property[firstVerb], remainingPath)) {
			expireData();
			return net[firstVerb](config, objType, trelloProps.id, value, propPath);
		}

		if (property.hasOwnProperty(secondVerb)
				&& hasValidPath(property[secondVerb], remainingPath)) {
			expireData();
			return net[secondVerb](config, objType, trelloProps.id, value, propPath);
		}

		return Promise.reject(new Error(
				'Trello Property ' + objType + '/' + propPath + ' is not settable.'
		));
	};

	/**
	 * Deletes the Trello object.
	 *
	 * @private
	 * @method deleteObj
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const deleteObj = () => {
		if (!maps[objType].allowDeletion) {
			return Promise.reject(new Error(
					'Object type ' + objType + ' does not allow deletion.'
			));
		}

		return net.delete(config, objType, trelloProps.id);
	};

	/**
	 * Deletes a property on the Trello object.
	 *
	 * @private
	 * @method deleteProperty
	 * @param {String} propPath the path to the property. This is a series
	 * of property names and identifiers split by forward slashes (/). This
	 * path must match a mapping in the Trello object property maps, otherwise
	 * this method will resolve to an error.
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const deleteProperty = (propPath) => {
		const path = propPath.split('/').filter(str => str !== '');

		if (path.length === 0) {
			return Promise.reject(new Error('Malformed property path: ' + propPath));
		}

		const property = trelloPropertyNames[path[0]];

		if (!property.hasOwnProperty('delete')) {
			return Promise.reject(new Error(
					'Trello property ' + propPath + ' does not allow deletion.'
			));
		}

		if (!hasValidPath(property.delete, path.slice(1))) {
			return Promise.reject(new Error(
					'Trello property ' + propPath + ' does not allow deletion.'
			));
		}

		return net.delete(config, objType, trelloProps.id, propPath);
	};

	////////////////////////////////////////////////////////////////////////////
	//															PUBLIC METHODS														//
	////////////////////////////////////////////////////////////////////////////

	/**
	 * Asynchronously retrieves a property value from Trello. If the property
	 * hasn't yet been populated, or it is dirty, then a network call to Trello
	 * is made. Otherwise, the property is returned from memory. An error will
	 * be returned if the property doesn't exist or is not a gettable property.
	 *
	 * @method get
	 * @param {String} params.propName the name of the property to retrieve
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to the property value
	 */
	const get = (params) => {
		const { propName, callback } = params;

		if (trelloProps[propName] === undefined) {
			return getUnretrievedProperty(propName).nodeify(callback);
		}

		return Promise.resolve(trelloProps[propName]).nodeify(callback);
	};

	/**
	 * Gets the id of the Trello object.
	 *
	 * @method getId
	 * @param {Function} [callback] the callback function once the operation is
	 * complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to the id
	 */
	const getId = (callback) => {
		const args = {
			propName: 'id',
			callback
		};
		return get(args);
	};


	/**
	 * Sets the given property using the new values passed in. If a property name
	 * is not included, then the object itself is set using the new values.
	 *
	 * @method set
	 * @param {Object} params the parameters object
	 * @param {Object} params.values the new values
	 * @param {String} params.propName the name of the property you are setting.
	 * If propName isn't included, then params.values is set on the object itself.
	 * @param {Boolean} [params.preferNonIdempotence=false] only relevant when
	 * the given property name can be modified both in an idempotent and a
	 * non-idempotent way. In that case, we default to the idempotent operation.
	 * As an example, if you set the labels on a card in an idempotent way, then
	 * it will replace all of the existing labels with the labels that were
	 * passed in. If you do it in a non-idempotent way, then the passed in labels
	 * will be added to the card, but existing labels will not be modified.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to a truthy value. The exact
	 * nature of this value is currently undefined and may change in the future.
	 */
	const set = (params) => {
		const { values, propName, preferNonIdempotence, callback } = params;

		if (R.isNil(values) || (typeof values) !== 'object') {
			return Promise.reject(new Error('Value must be an object.'))
					.nodeify(callback);
		}

		if (R.isNil(propName)) {
			return setObject(values).nodeify(callback);
		}
		else {
			return setProperty(values, propName, !!preferNonIdempotence)
					.nodeify(callback);
		}
	};

	/**
	 * Deletes the given property. If no property is given, then the Trello
	 * object itself gets deleted.
	 *
	 * @method delete
	 * @param {Object} params the method parameters object
	 * @param {String} [params.propName] the property to delete. If this is not
	 * included, then the object itself will be deleted.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to a truthy value. The exact
	 * nature of this value is currently undefined and may change in the future
	 */
	const del = (params) => {
		const { propName, callback } = params;

		if (R.isNil(propName)) {
			return deleteObj().nodeify(callback);
		}

		return deleteProperty(propName).nodeify(callback);
	};

	return Object.freeze({
		get,
		getId,
		set,
		delete: del
	});
};

module.exports = trelloObj;
