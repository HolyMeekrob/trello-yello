var https = require('https');
var querystring = require('querystring');
var sprintf = require('sprintf');
var Promise = require('bluebird');

var API_HOST = 'api.trello.com';

var get = function (config, objType, id, parameters) {
	parameters.key = config.key;
	parameters.token = config.token;

	var requestOptions = {
		hostname: API_HOST,
		path: sprintf('/%s/%s/%s/?%s', config.version, objType, id, querystring.stringify(parameters))
	};

	return new Promise(function (resolve, reject) {
		https.get(requestOptions, function (response) {
            var result = {
                httpVersion: response.httpVersion,
                httpStatusCode: response.statusCode,
                headers: response.headers,
                body: '',
                trailers: response.trailers
            };
			if (response.statusCode >= 400) {
				var err = new Error('Error retrieving data from Trello.');
				reject(err);
			}
			response.on('data', function (chunk) {
				result.body += chunk;
			});

			response.on('end', function () {
				resolve(result);
			});
		}).on('error', reject);
	});
};

module.exports = { get: get };