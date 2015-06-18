"use strict";

const https = require('https');
const querystring = require('querystring');
const sprintf = require('sprintf');
const Promise = require('bluebird');

const API_HOST = 'api.trello.com';

const get = function (config, objType, id, parameters, subObjType) {
	parameters.key = config.key;
	parameters.token = config.token;

	if (!subObjType) {
		subObjType = '';
	}
	else if (!subObjType.endsWith('/')) {
		subObjType += '/';
	}

	const requestOptions = {
		hostname: API_HOST,
		path: sprintf('/%s/%s/%s/%s?%s', config.version, objType, id, subObjType, querystring.stringify(parameters))
	};

	return new Promise((resolve, reject) => {
		https.get(requestOptions, (response) => {
			const result = {
				httpVersion: response.httpVersion,
				httpStatusCode: response.statusCode,
				headers: response.headers,
				body: '',
				trailers: response.trailers
			};
			if (response.statusCode >= 400) {
				const err = new Error('Error retrieving data from Trello.');
				reject(err);
			}
			response.on('data', (chunk) => {
				result.body += chunk;
			});

			response.on('end', () => {
				resolve(result);
			});
		}).on('error', reject);
	});
};

module.exports = { get: get };
