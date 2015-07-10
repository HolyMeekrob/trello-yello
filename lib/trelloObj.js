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

const TrelloObj = function (objType, config, id, net, initialVals) {
	'use strict';

	if (!net) {
		throw new Error('Configuration, id, and network service are required.');
	}

	if (trelloPropertyMaps[objType] === undefined) {
		throw new Error('Invalid object type: ' + objType);
	}

	let trelloProps = { id: id };

	// Remove all fields that are themselves TrelloObjs so that we can construct
	// them properly. Everything else should be copied into this object
	// so as to reduce future network connections.
	trelloProps = R.merge(trelloProps,
		removeNonAutoProperties(initialVals, trelloPropertyMaps[objType]));

	this.get = (trelloPropName) => {
		if (trelloProps[trelloPropName] === undefined) {
			return getUnretrievedProperty(trelloPropName);
		}

		return Promise.resolve(trelloProps[trelloPropName]);
	};

	const getUnretrievedProperty = (prop) => {
		const trelloPropertyNames = trelloPropertyMaps[objType];

		if (!(prop in trelloPropertyNames)) {
			return Promise.resolve(trelloProps[prop]);
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
			console.log(config);
			console.log(objType);
			console.log(trelloProps.id);
			console.log(propData);
			console.log(prop);
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
				return removeNonAutoProperties(rawObj, trelloPropertyMaps[objType]);
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
};

module.exports = TrelloObj;
