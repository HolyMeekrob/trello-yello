var https = require('https');
var querystring = require('querystring');
var sprintf = require('sprintf');

var API_HOST = 'api.trello.com';

var get = function (config, objType, id, parameters, callback) {
	parameters.key = config.key;
	parameters.token = config.token;

	var requestOptions = {
		hostname: API_HOST,
		path: sprintf('/%s/%s/%s/?%s', config.version, objType, id, querystring.stringify(parameters))
	};

	https.get(requestOptions, function (res) {
		var resData = '';

		if (res.statusCode >= 400) {
			var err = new Error('Error retrieving data from Trello.');
			callback(err, res);
		}
		res.on('data', function (chunk) {
			resData += chunk;
		});

		res.on('end', function () {
			callback(null, resData);
		});
	}).on('error', function (err) {
		callback (err);
	});
};

module.exports = { get: get };