var extend = require('extend');
var Promise = require('bluebird');

var objType = 'card';

var Card = function (config, id, net) {
	var self = this;
	var config = config;

	if (!net) {
		throw new Error('Configuration, id, and network service are required.');
	}

	return net.get(config, objType, id, { })
		.then(function(response) {
			var rawObj = JSON.parse(response.body);
			return Promise.resolve(extend(self, rawObj));
		}).catch(function (err) {
			console.log(err.message);
			throw err;
		});
};

module.exports = Card;
