const Promise = require('bluebird');
const R = require('ramda');
const trelloPropertyMaps = require('./trelloPropertyMaps');

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

const TrelloObj = function (objType, config, id, net, initialVals) {
	'use strict';

	if (R.any(R.isNil, [config, id, net])) {
		throw new Error('Configuration, id, and network service are required.');
	}

	const trelloPropertyNames = trelloPropertyMaps[objType].props;

	if (trelloPropertyNames === undefined) {
		throw new Error('Invalid object type: ' + objType);
	}

	let trelloProps = { id: id };

	// Remove all fields that are themselves TrelloObjs so that we can construct
	// them properly. Everything else should be copied into this object
	// so as to reduce future network connections.
	trelloProps = R.merge(trelloProps,
			removeNonAutoProperties(initialVals, trelloPropertyNames));

	// Returns a Promise that yields the value for the given property name. If
	// it's a Trello property that hasn't yet been retrieved from the Trello
	// server, then it is retrieved asynchronously. Otherwise the value is
	// returned as  a resolved Promise. This works for non-Trello properties
	// as well, with the caveat that it's only stored locally like a normal
	// object property. The return type in that case is a resolved Promise.
	this.get = (propName) => {
		if (trelloProps[propName] === undefined) {
			return getUnretrievedProperty(propName);
		}

		return Promise.resolve(trelloProps[propName]);
	};

	const getUnretrievedProperty = (prop) => {
		// If the property does not exist in the Trello API
		if (doesNotHave(prop, trelloPropertyNames)) {
			return Promise.reject(new Error(
					'Trello Property ' + objType + '/' + prop + ' is not valid.')
			);
		}

		if (doesNotHave('get', trelloPropertyNames[prop])) {
			return Promise.reject(new Error(
					'Trello Property ' + objType + '/' + prop + ' is not gettable.')
			);
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

	const getAutoProperties = () => {
		return net.get(config, objType, trelloProps.id, { fields: 'all' })
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
							new TrelloObj(trelloType, config, subObj.id, net, subObj));
					}
					else {
						return new TrelloObj(trelloType, config, sub.id, net, sub);
					}
				});
	};

	const setObject = value => {
		if (trelloPropertyMaps[objType].allowEmptyPut) {
			return net.put(config, objType, trelloProps.id, value);
		}

		return Promise.reject(new Error(
				'Cannot set values on Trello object type ' + objType));
	};

	const setProperty = (value, propName) => {
		const propNames = propName.split('/');

		// Returns the property object if it exists in the Trello Property maps
		// tree, otherwise returns an empty object
		let prop = R.reduce(R.flip(R.propOr({})), trelloPropertyNames,
				R.insert(1, 'put', propNames));

		// If prop is an empty object it means that the given property chain
		// is not in the Trello Property maps tree
		if (R.isEmpty(R.keys(prop))) {
			return Promise.reject(new Error(
					'Trello Property ' + objType + '/' + propName + ' is not valid.')
			);
		}

		// If the property cannot be set through the Trello API
		if (!prop.allowEmpty) {
			return Promise.reject(new Error(
					'Trello Property ' + objType + '/' + propName + ' is not settable.')
			);
		}

		return net.put(config, objType, trelloProps.id, value, propName);
	};

	this.set = (value, propName) => {
		if (arguments.length === 1) {
			return setObject(value);
		}

		if (arguments.length === 2) {
			return setProperty(value, propName);
		}

		return Promise.reject(new Error('Unsupported number of arguments.'));
	};
};

module.exports = TrelloObj;
