"use strict";

const https = require('https');
const querystring = require('querystring');
const sprintf = require('sprintf');
const Promise = require('bluebird');
const R = require('ramda');
const API_HOST = 'api.trello.com';

const get = function (config, objType, id, parameters, subObjType) {
	if (R.isNil(objType)) {
		throw new Error('Trello object type is required to query API.');
	}

	if (!R.isNil(config.key)) {
		parameters.key = config.key;
	}

	if (!R.isNil(config.token)) {
			parameters.token = config.token;
	}

	if (R.isNil(subObjType)) {
		subObjType = '';
	}
	else if (!subObjType.endsWith('/')) {
		subObjType += '/';
	}

	let url = '';
	if (R.isNil(id)) {
		url = sprintf('/%s/%s/%s?%s', config.version, objType, subObjType, querystring.stringify(parameters))
	}
	else {
		url = sprintf('/%s/%s/%s/%s?%s', config.version, objType, id, subObjType, querystring.stringify(parameters))
	}

	const requestOptions = {
		hostname: API_HOST,
		path: url
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
