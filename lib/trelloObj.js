"use strict";

const extend = require('extend');
const Promise = require('bluebird');
const Reflect = require('harmony-reflect');
const trelloPropertyMaps = require('./trelloPropertyMaps');

const TrelloObj = function (objType, config, id, net, initialVals) {
	if (!net) {
		throw new Error('Configuration, id, and network service are required.');
	}

	if (trelloPropertyMaps[objType] === undefined) {
		throw new Error('Invalid object type: ' + objType);
	}

	this.id = id

	// Remove all fields that are themselves TrelloObjs so that we can construct
	// them properly. Everything else should be copied into this object
	// so as to reduce future network connections.
	removeNonDefaultProperties(initialVals, objType);

	extend(this, initialVals);
	return getProxy(this, config, objType, net);
};

// Removes properties from the base object that don't map to
// Trello objects for the given object type. This is useful so
// that we can copy raw data to an object without worrying
// about failing to create the proper Trello objects.
// A possible future improvement is to instantiate the correct Trello
// object for each of these, instead of simply removing them.
const removeNonDefaultProperties = function (baseObj, objType) {
	for (let prop in baseObj) {
		const propType = trelloPropertyMaps[objType][prop];
		if (propType && propType !== 'default') {
			delete baseObj[prop];
		}
	};
};

const getUnretrievedProperty = function (prop, config, objType, net) {
	const self = this;
	const trelloPropertyNames = trelloPropertyMaps[objType];

	if (!(prop in trelloPropertyNames)) {
		return Promise.resolve(self[prop]);
	}

	const propData = trelloPropertyNames[prop];
	if (propData === 'default') {
		 // Create a new object and return
		return net.get(config, objType, self.id, { fields: 'all' })
			.then(function(response) {
				const rawObj = JSON.parse(response.body);

				// Remove non-default properties
				// Otherwise, they won't get instantiated as the right object
				removeNonDefaultProperties(rawObj, objType);

				extend(self, rawObj);
				return self[prop];
			}).catch(function (err) {
				throw err;
			});
	}

	else {
		const type = propData.type;

		const parameters = {};
		extend(parameters, propData);
		delete parameters.type;

		return net.get(config, objType, self.id, parameters, prop)
			.then(function (response) {
				const sub = JSON.parse(response.body);
				if (Array.isArray(sub)) {
					const trelloObjects = [];
					sub.map(function (subObj) {
						trelloObjects.push(new TrelloObj(type, config, subObj.id, net, subObj));
					});
					self[prop] = trelloObjects;
				}

				else {
					self[prop] = new TrelloObj(type, config, sub.id, net, sub);
				}

				return self[prop];
			}).catch(function (err) {
				throw (err);
			});
	}
};

const getProxy = function (target, config, objType, net) {
	return new Proxy(target, {
		get: function(target, name) {
			if (target[name] === undefined) {
				return getUnretrievedProperty.call(target, name, config, objType, net);
			}
			else {
				return Promise.resolve(target[name]);
			}
		}
	});
};

module.exports = TrelloObj;
