var net = require('./net/networkService');
var extend = require('extend');
var Promise = require('bluebird');

var objType = 'card';

var Card = function (config, id) {
	var self = this;
	var config = config;

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
