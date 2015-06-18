"use strict";

const extend = require('extend');
const Promise = require('bluebird');
const Reflect = require('harmony-reflect');
const trelloPropertyMaps = require('./trelloPropertyMaps');
const R = require('ramda');

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
	extend(this,
			removeNonDefaultProperties(initialVals, trelloPropertyMaps[objType]));

	return getProxy(this, config, objType, net);
};

// Removes properties from the base object that don't map to
// Trello objects for the given object type. This is useful so
// that we can copy raw data to an object without worrying
// about failing to create the proper Trello objects.
// A possible future improvement is to instantiate the correct Trello
// object for each of these, instead of simply removing them.
const removeNonDefaultProperties = function (baseObj, maps) {
	if (!baseObj) {
		return;
	}

	const propIsDefault = prop => R.eq(maps[prop], 'default');
	const defaults = R.filter(propIsDefault, R.keys(baseObj));
	return R.pick(defaults, baseObj);
};

const getUnretrievedProperty = function (prop, config, objType, net) {
	const self = this;
	const trelloPropertyNames = trelloPropertyMaps[objType];

	if (!(prop in trelloPropertyNames)) {
		return Promise.resolve(self[prop]);
	}

	const propData = trelloPropertyNames[prop];
	if (propData === 'default') {
		return getDefaultProperties(config, objType, net, self.id)
			.then(response => {
				extend(self, response);
				return self[prop];
			}).catch(err => {
				throw err;
			});
	}

	else if (!('trelloType' in propData)) {
		return net.get(config, objType, self.id, propData, prop)
			.then(response => {
				self[prop] = JSON.parse(response.body);
				return self[prop];
			}).catch(err => {
				throw (err);
			});
	}

	else {
		return getSubTypeProperty(config, objType, net, self.id, prop, propData)
			.then(subObj => {
				self[prop] = subObj;
				return self[prop];
			}).catch(err => {
				throw (err);
			});
	}
};

const getDefaultProperties = function (config, objType, net, id) {
	return net.get(config, objType, id, { fields: 'all' })
		.then(response => {
			const rawObj = JSON.parse(response.body);
			return removeNonDefaultProperties(rawObj, trelloPropertyMaps[objType]);
		}).catch(err => {
			throw err;
		});
};

const getSubTypeProperty = function (config, objType, net, id, prop, propData) {
	const trelloType = propData.trelloType;
	const parameters = R.dissoc('trelloType', propData);

	return net.get(config, objType, id, parameters, prop)
		.then(response => {
			const sub = JSON.parse(response.body);
			if (Array.isArray(sub)) {
				return sub.map(subObj =>
					new TrelloObj(trelloType, config, subObj.id, net, subObj));
			}
			else {
				return new TrelloObj(trelloType, config, sub.id, net, sub);
			}
		}).catch(err => {
			throw err;
		});
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
