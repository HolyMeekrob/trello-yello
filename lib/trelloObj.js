"use strict";

const extend = require('extend');
const Promise = require('bluebird');
const Reflect = require('harmony-reflect');
const trelloPropertyMaps = require('./trelloPropertyMaps');

const TrelloObj = function (objType, config, id, net) {
	if (!net) {
		throw new Error('Configuration, id, and network service are required.');
	}

	if (trelloPropertyMaps[objType] === undefined) {
		throw new Error('Invalid object type: ' + objType);
	}

	this.id = id

	return getProxy(this, config, objType, net);
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
				extend(self, rawObj);
				return self[prop];
			}).catch(function (err) {
				throw err;
			});
	}

	else {
		const type = propData.type;
		const subObjType = propData.subObjType;

		const parameters = {};
		extend(parameters, propData);
		delete parameters.type;
		delete parameters.subObjType;

		return net.get(config, objType, self.id, parameters, subObjType)
			.then(function (response) {
				const trelloObjects = [];
				const subObjects = JSON.parse(response.body);

				subObjects.map(function (subObj) {
					trelloObjects.push(new TrelloObj(type, config, subObj.id, net));
				});

				self[prop] = trelloObjects;
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
