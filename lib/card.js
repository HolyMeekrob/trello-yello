var net = require('./net/networkService');
var extend = require('extend');

var objType = 'card';

var Card = function (config, id, callback) {
	var self = this;
	var config = config;

	net.get(config, objType, id, { }, function (err, res) {
		if (err) {
			console.log(err.message);
			callback(err);
		}
		else {
			var rawObj = JSON.parse(res);
			extend(self, rawObj);
			callback(null, self);
		}
	});
};

module.exports = Card;