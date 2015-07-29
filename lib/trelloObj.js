const Promise = require('bluebird');
const R = require('ramda');
const hasValidPath = require('./util').hasValidPath;

// Removes properties from the base object that don't map to
// Trello objects for the given object type. This is useful so
// that we can copy raw data to an object without worrying
// about failing to create the proper Trello objects.
// A possible future improvement is to instantiate the correct Trello
// object for each of these, instead of simply removing them.
const removeNonAutoProperties = (baseObj, maps) => {
	'use strict';

	if (R.isNil(baseObj)) {
		return {};
	}

	const propIsAuto = prop => {
		return (maps[prop] !== undefined && maps[prop].isAutoProp);
	};

	const autos = R.filter(propIsAuto, R.keys(baseObj));
	return R.pick(autos, baseObj);
};

// Accepts a property name and an object and returns true if the object
// does not have its own property with the given name
const doesNotHave = R.complement(R.has);

const TrelloObj = function (objMaps, objType, config, id, net, initialVals) {
	'use strict';

	if (R.any(R.isNil, [config, id, net])) {
		throw new Error('Configuration, id, and network service are required.');
	}

	const trelloPropertyNames = objMaps[objType].props;

	if (trelloPropertyNames === undefined) {
		throw new Error('Invalid object type: ' + objType);
	}

	let trelloProps = { id: id };

	// Remove all fields that are themselves TrelloObjs so that we can construct
	// them properly. Everything else should be copied into this object
	// so as to reduce future network connections.
	trelloProps = R.merge(trelloProps,
			removeNonAutoProperties(initialVals, trelloPropertyNames));

	const expireData = () => {
		trelloProps = { id: id };
	};

	const getAutoProperties = () => {
		return net.get(config, objType, trelloProps.id,
				objMaps[objType].defaultArgs)
				.then(response => {
					const rawObj = JSON.parse(response.body);
					return removeNonAutoProperties(rawObj, trelloPropertyNames);
				});
	};

	const getSubTypeProperty = (prop, propData) => {
		const trelloType = propData.trelloType;
		const parameters = propData.get;

		return net.get(config, objType, trelloProps.id, parameters, prop)
			.then(response => {
				const sub = JSON.parse(response.body);

				if (Array.isArray(sub)) {
					return sub.map(subObj =>
						new TrelloObj(objMaps, trelloType, config, subObj.id, net, subObj));
				}
				else {
					return new TrelloObj(objMaps, trelloType, config, sub.id, net, sub);
				}
			});
	};

	const getUnretrievedProperty = (prop) => {
		// If the property does not exist in the Trello API
		if (doesNotHave(prop, trelloPropertyNames)) {
			return Promise.reject(new Error(
					'Trello Property ' + objType + '/' + prop + ' is not valid.'
			));
		}

		if (doesNotHave('get', trelloPropertyNames[prop])) {
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

	// Returns a Promise that yields the value for the given property name. If
	// it's a Trello property that hasn't yet been retrieved from the Trello
	// server, then it is retrieved asynchronously. Otherwise the value is
	// returned as  a resolved Promise. This works for non-Trello properties
	// as well, with the caveat that it's only stored locally like a normal
	// object property. The return type in that case is a resolved Promise.
	this.get = (propName, callback) => {
		if (trelloProps[propName] === undefined) {
			return getUnretrievedProperty(propName).nodeify(callback);
		}

		return Promise.resolve(trelloProps[propName]).nodeify(callback);
	};

	const setObject = (value) => {
		if (objMaps[objType].allowEmptyPut) {
			return net.put(config, objType, trelloProps.id, value);
		}

		return Promise.reject(new Error(
				'Cannot set values on Trello object type ' + objType
		));
	};

	const setProperty = (value, propName, preferNonIdempotence) => {
		const path = propName.split('/').filter(str => str !== '');

		if (path.length === 0) {
			return Promise.reject(new Error('Malformed property path: ' + propName));
		}

		if (doesNotHave(path[0], trelloPropertyNames)) {
			return Promise.reject(new Error(
				'Trello Property ' + objType + '/' + propName + ' is not valid.'
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

		if(R.has(firstVerb, property)
				&& hasValidPath(property[firstVerb], remainingPath)) {
			expireData();
			return net[firstVerb](config, objType, trelloProps.id, value, propName);
		}

		if (R.has(secondVerb, property)
				&& hasValidPath(property[secondVerb], remainingPath)) {
			expireData();
			return net[secondVerb](config, objType, trelloProps.id, value, propName);
		}

		return Promise.reject(new Error(
				'Trello Property ' + objType + '/' + propName + ' is not settable.'
		));
	};

	// The optional parameter preferNonIdempotence is only relevant when the
	// given property name can be modified both in an idempotent and a
	// non-idempotent way. In that case, we default to the idempotent operation.
	// As an example, if you set the labels on a card in an idempotent way, then
	// it will replace all of the existing labels with the labels that were
	// passed in. If you do it in a non-idempotent way, then the passed in labels
	// will be added to the card, but existing labels will not be modified.
	this.set = (value, propName, preferNonIdempotence, callback) => {
		if (R.isNil(value) || (typeof value) !== 'object') {
			const args = Array.prototype.slice.call(arguments);
			callback = args.filter(arg => (typeof arg) === 'function')[0];
			return Promise.reject(new Error('Value must be an object.'))
					.nodeify(callback);
		}

		if (arguments.length === 1) {
			return setObject(value);
		}

		if (arguments.length === 2 && (typeof arguments[1]) === 'function') {
			return setObject(value).nodeify(arguments[1]);
		}

		if (arguments.length > 2 && (typeof arguments[2]) === 'function') {
			callback = arguments[2];
			preferNonIdempotence = false;
		}

		return setProperty(value, propName, !!preferNonIdempotence).nodeify(callback);
	};

	const deleteObj = () => {
		if (!objMaps[objType].allowDeletion) {
			return Promise.reject(new Error(
					'Object type ' + objType + ' does not allow deletion.'
			));
		}

		return net.delete(config, objType, trelloProps.id);
	};

	const deleteProperty = (propPath) => {
		const path = propPath.split('/').filter(str => str !== '');

		if (path.length === 0) {
			return Promise.reject(new Error('Malformed property path: ' + propPath));
		}

		const property = trelloPropertyNames[path[0]];

		if (doesNotHave('delete', property)) {
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

	this.delete = (property, callback) => {
		if (arguments.length === 0) {
			return deleteObj();
		}

		if (arguments.length === 1 && (typeof arguments[0]) === 'function') {
			return deleteObj().nodeify(arguments[0]);
		}

		return deleteProperty(property).nodeify(callback);
	};
};

module.exports = TrelloObj;
