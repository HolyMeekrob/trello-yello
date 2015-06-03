var extend = require('extend');
var Promise = require('bluebird');
var Reflect = require('harmony-reflect');
var trelloPropertyMaps = require('./trelloPropertyMaps');

var TrelloObj = function (objType, config, id, net) {
	if (!net) {
		throw new Error('Configuration, id, and network service are required.');
	}

	if (trelloPropertyMaps[objType] === undefined) {
		throw new Error('Invalid object type: ' + objType);
	}

	this.id = id

	return getProxy(this, config, objType, net);
};

getUnretrievedProperty = function (prop, config, objType, net) {
	var self = this;
	var trelloPropertyNames = trelloPropertyMaps[objType];

	if (!(prop in trelloPropertyNames)) {
		return Promise.resolve(self[prop]);
	}

	var propData = trelloPropertyNames[prop];
	if (propData === 'default') {
		 // Create a new object and return
		return net.get(config, objType, self.id, { fields: 'all' })
			.then(function(response) {
				var rawObj = JSON.parse(response.body);
				extend(self, rawObj);
				return self[prop];
			}).catch(function (err) {
				throw err;
			});
	}

	else {
		var type = propData.type;
		var subObjType = propData.subObjType;

		var parameters = {};
		extend(parameters, propData);
		delete parameters.type;
		delete parameters.subObjType;

		return net.get(config, objType, self.id, parameters, subObjType)
			.then(function (response) {
				var trelloObjects = [];
				var subObjects = JSON.parse(response.body);

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

var getProxy = function (target, config, objType, net) {
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
