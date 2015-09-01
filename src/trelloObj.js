import Promise from 'bluebird';
import { any, isNil, merge } from 'ramda';
import { hasValidPath, removeNonAutoProperties } from './util.js';

/**
 * Base object for Trello objects. All Trello objects inherit from this.
 * Do not use this class directly.
 *
 * @class trelloObj
 * @constructor
 * @private
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
export default (cParams) => {
	const { maps, objType, config, id, net, initialVals, objConstructor } = cParams;

	if (any(isNil, [config, id, net])) {
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
		throw new Error(`Invalid object type: ${objType}`);
	}

	/**
	 * Stores all of the object's Trello properties internally.
	 *
	 * @private
	 * @property trelloProps
	 * @type Object
	 */
	let trelloProps = { id };

	// Remove all fields that are themselves Trello objects so that we can
	// construct them properly. Everything else should be copied into this object
	// so as to reduce future network connections.

	trelloProps = merge(trelloProps,
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
		trelloProps = { id };
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
				.then((response) => {
					const rawObj = JSON.parse(response.body);
					return Promise.resolve(
							removeNonAutoProperties(rawObj, trelloPropertyNames));
				});
	};

	/**
	 * Retrieves a Trello property on this object that is itselfg a Trello object.
	 *
	 * @private
	 * @method getSubTypeProperty
	 * @param {String} prop the property to retrieve
	 * @param {Object} propData the property mappings for this Trello object
	 * @return {Object} a Promise that resolves to either a trelloObj object or
	 * an array of trelloObj objects
	 */
	const getSubTypeProperty = (prop, propData) => {
		const trelloType = propData.trelloType;
		const parameters = propData.get;

		return net.get(config, objType, trelloProps.id, parameters, prop)
			.then((response) => {
				const sub = JSON.parse(response.body);

				if (Array.isArray(sub)) {
					return Promise.resolve(sub.map((subObj) =>
						objConstructor({
							maps,
							objType: trelloType,
							config,
							id: subObj.id,
							net,
							initialVals: subObj,
							objConstructor
						})
					));
				}
				return Promise.resolve(objConstructor({
					maps,
					objType: trelloType,
					config,
					id: sub.id,
					net,
					initialVals: sub,
					objConstructor
				}));
			});
	};

	/**
	 * Retrieves a property from the network.
	 *
	 * @private
	 * @method getUnretrievedProperty
	 * @param {String} prop the property to retrieve
	 * @param {Boolean} [skipValidation=false] if true, skips local
	 * validation of the property path
	 * @return a Promise that resolves to the retrieved property.
	 */
	const getUnretrievedProperty = (prop, skipValidation) => {
		const propExists = trelloPropertyNames.hasOwnProperty(prop);
		const propIsGettable = propExists
				&& trelloPropertyNames[prop].hasOwnProperty('get');

		if (skipValidation && !propExists && !propIsGettable) {
			return net.get(config, objType, trelloProps.id, {}, prop)
					.then((response) => {
						trelloProps[prop] = JSON.parse(response.body);
						return Promise.resolve(trelloProps[prop]);
					});
		}

		// If the property does not exist in the Trello API
		if (!propExists) {
			return Promise.reject(new Error(
					`Trello Property ${objType}/${prop} is not valid.`
			));
		}

		if (!propIsGettable) {
			return Promise.reject(new Error(
					`Trello Property ${objType}/${prop} is not gettable.`
			));
		}

		const propData = trelloPropertyNames[prop];
		if (propData.isAutoProp) {
			return getAutoProperties()
					.then((response) => {
						trelloProps = merge(trelloProps, response);
						return Promise.resolve(trelloProps[prop]);
					});
		}

		else if (isNil(propData.trelloType)) {
			return net.get(config, objType, trelloProps.id, propData.get, prop)
					.then((response) => {
						trelloProps[prop] = JSON.parse(response.body);
						return Promise.resolve(trelloProps[prop]);
					});
		}

		return getSubTypeProperty(prop, propData)
				.then((subObj) => {
					trelloProps[prop] = subObj;
					return Promise.resolve(trelloProps[prop]);
				});
	};

	/**
	 * Sets properties on the object with the given values.
	 *
	 * @private
	 * @method
	 * @param {Object} values the values to set on the object. This object is
	 * a mapping of properties supported by the Trello API and their new values.
	 * @param {Boolean} [skipValidation=false] if true, skips local
	 * validation of the property path
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const setObject = (values, skipValidation) => {
		if (skipValidation || maps[objType].allowEmptyPut) {
			return net.put(config, objType, trelloProps.id, values)
					.then((res) => {
						expireData();
						return res;
					});
		}

		return Promise.reject(new Error(
				`Cannot set values on Trello object type ${objType}`
		));
	};

	/**
	 * Sets values on a property of the Trello object. Skips local path
	 * validation.
	 *
	 * @private
	 * @method setPropertySkipValidation
	 * @param {Object} values the new values
	 * @param {String} path the path to the property
	 * @param {Boolean} [params.preferNonIdempotence=false] only relevant if
	 * the property can be set in both an idempotent and non-idempotent manner.
	 * If this value is set to true, then the non-idempotent operation will be
	 * used. Otherwise, the operation will be idempotent.
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const setPropertySkipValidation = (values, path, preferNonIdempotence) => {
		if (preferNonIdempotence) {
			return net.post(config, objType, trelloProps.id, values, path)
					.then((res) => {
						expireData();
						return res;
					});
		}
		return net.put(config, objType, trelloProps.id, values, path)
					.then((res) => {
						expireData();
						return res;
					});
	};

	/**
	 * Sets values on a property of the Trello object.
	 *
	 * @private
	 * @method setProperty
	 * @param {Object} values the new values
	 * @param {String} path the path to the property. This is a series
	 * of property names and identifiers split by forward slashes (/). If
	 * skipValidation is false, this path must match a mapping in the Trello
	 * object property maps, otherwise this method will resolve to an error.
	 * @param {Boolean} [params.preferNonIdempotence=false] only relevant if
	 * the property can be set in both an idempotent and non-idempotent manner.
	 * If this value is set to true, then the non-idempotent operation will be
	 * used. Otherwise, the operation will be idempotent.
	 * @param {Boolean} [skipValidation=false] if true, skips local
	 * validation of the property path
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const setProperty = (values, path, preferNonIdempotence, skipValidation) => {
		if (skipValidation) {
			return setPropertySkipValidation(values, path, preferNonIdempotence);
		}

		const pathElems = path.split('/').filter((str) => str !== '');

		if (pathElems.length === 0) {
			return Promise.reject(new Error(`Malformed property path: ${path}`));
		}

		if (!trelloPropertyNames.hasOwnProperty(pathElems[0])) {
			return Promise.reject(new Error(
				`Trello Property ${objType}/${path} is not valid.`
			));
		}

		const property = trelloPropertyNames[pathElems[0]];

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

		const remainingPath = pathElems.slice(1);

		if (property.hasOwnProperty(firstVerb)
				&& hasValidPath(property[firstVerb], remainingPath)) {
			expireData();
			return net[firstVerb](config, objType, trelloProps.id, values, path)
					.then((res) => {
						expireData();
						return res;
					});
		}

		if (property.hasOwnProperty(secondVerb)
				&& hasValidPath(property[secondVerb], remainingPath)) {
			return net[secondVerb](config, objType, trelloProps.id, values, path)
					.then((res) => {
						expireData();
						return res;
					});
		}

		return Promise.reject(new Error(
				`Trello Property ${objType}/${path} is not settable.`
		));
	};

	/**
	 * Deletes the Trello object.
	 *
	 * @private
	 * @method deleteObj
	 * @param {Boolean} [skipValidation=false] if true, skips local validation of
	 * the property path
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const deleteObj = (skipValidation) => {
		if (skipValidation || maps[objType].allowDeletion) {
			return net.del(config, objType, trelloProps.id);
		}

		return Promise.reject(new Error(
				`Object type ${objType} does not allow deletion.`
		));
	};

	/**
	 * Deletes a property on the Trello object. Skips local path validation.
	 *
	 * @private
	 * @method deleteProperty
	 * @param {String} path the path to the property
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const deletePropertySkipValidation = (path) => {
		return net.del(config, objType, trelloProps.id, path)
				.then((res) => {
					expireData();
					return res;
				});
	};

	/**
	 * Deletes a property on the Trello object.
	 *
	 * @private
	 * @method deleteProperty
	 * @param {String} path the path to the property. This is a series
	 * of property names and identifiers split by forward slashes (/). If
	 * skipValidation is false, this path must match a mapping in the Trello
	 * object property maps, otherwise this method will resolve to an error.
	 * @return {Object} a Promise that resolves to a truthy value
	 */
	const deleteProperty = (path, skipValidation) => {
		if (skipValidation) {
			return deletePropertySkipValidation(path);
		}

		const pathElems = path.split('/').filter((str) => str !== '');

		if (pathElems.length === 0) {
			return Promise.reject(new Error(`Malformed property path: ${path}`));
		}

		const property = trelloPropertyNames[pathElems[0]];

		if (!property.hasOwnProperty('delete')) {
			return Promise.reject(new Error(
					`Trello property ${path} does not allow deletion.`
			));
		}

		if (!hasValidPath(property.delete, pathElems.slice(1))) {
			return Promise.reject(new Error(
					`Trello property ${path} does not allow deletion.`
			));
		}

		return deletePropertySkipValidation(path);
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
	 * @param {Boolean} [params.skipValidation=false] if true, skips local
	 * validation of the property path
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to the property value
	 */
	const get = (params) => {
		const { propName, callback } = params;

		if (trelloProps[propName] === undefined) {
			return getUnretrievedProperty(propName, params.skipValidation)
					.nodeify(callback);
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
	 * @param {Object} [params.values={}] the new values
	 * @param {String} params.propName the name of the property you are setting.
	 * If propName isn't included, then params.values is set on the object itself.
	 * @param {Boolean} [params.preferNonIdempotence=false] only relevant when
	 * the given property name can be modified both in an idempotent and a
	 * non-idempotent way. In that case, we default to the idempotent operation.
	 * As an example, if you set the labels on a card in an idempotent way, then
	 * it will replace all of the existing labels with the labels that were
	 * passed in. If you do it in a non-idempotent way, then the passed in labels
	 * will be added to the card, but existing labels will not be modified.
	 * @param {Boolean} [params.skipValidation=false] if true, skips local
	 * validation of the property path
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @return {Object} a Promise that resolves to a truthy value. The exact
	 * nature of this value is currently undefined and may change in the future.
	 */
	const set = (params) => {
		const { propName, preferNonIdempotence, callback } = params;
		let values = params.values;

		if (isNil(values)) {
			values = {};
		}

		if ((typeof values) !== 'object') {
			return Promise.reject(new Error('Value must be an object.'))
					.nodeify(callback);
		}

		if (isNil(propName)) {
			return setObject(values, params.skipValidation).nodeify(callback);
		}

		return setProperty(
				values, propName, !!preferNonIdempotence, params.skipValidation)
				.nodeify(callback);
	};

	/**
	 * Deletes the given property. If no property is given, then the Trello
	 * object itself gets deleted.
	 *
	 * @method del
	 * @param {Object} params the method parameters object
	 * @param {String} [params.propName] the property to delete. If this is not
	 * included, then the object itself will be deleted.
	 * @param {Function} [params.callback] the callback function once the
	 * operation is complete. This is optional, as a Promise is returned.
	 * @param {Boolean} [params.skipValidation=false] if true, skips local
	 * validation of the property path
	 * @return {Object} a Promise that resolves to a truthy value. The exact
	 * nature of this value is currently undefined and may change in the future
	 */
	const del = (params) => {
		let propName;
		let callback;

		if (!isNil(params)) {
			propName = params.propName;
			callback = params.callback;
		}

		if (isNil(propName)) {
			return deleteObj(params.skipValidation).nodeify(callback);
		}

		return deleteProperty(propName, params.skipValidation).nodeify(callback);
	};

	return Object.freeze({
		get,
		getId,
		set,
		del
	});
};
