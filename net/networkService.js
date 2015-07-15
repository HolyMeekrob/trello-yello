const https = require('https');
const querystring = require('querystring');
const sprintf = require('sprintf');
const Promise = require('bluebird');
const R = require('ramda');

const API_HOST = 'api.trello.com';

const get = (config, objType, id, parameters, subObjType) => {
	'use strict';

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
		url = sprintf('/%s/%s/%s?%s', config.version, objType, subObjType,
				querystring.stringify(parameters));
	}
	else {
		url = sprintf('/%s/%s/%s/%s?%s', config.version, objType, id, subObjType,
				querystring.stringify(parameters));
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

const put = (config, objType, id, newVals, prop) => {
	'use strict';

	if (R.isNil(objType)) {
		throw new Error('Trello object type is required for API.');
	}

	if (R.isNil(id)) {
		throw new Error('Updating a Trello object requires an id.');
	}

	if (R.isNil(newVals)) {
		throw new Error('Updates must include values to be updated.');
	}

	const parameters = querystring.stringify(R.dissoc('version', config));

	let url;
	if (R.isNil(prop)) {
		url = sprintf('/%s/%s/%s?%s', config.version, objType, id, parameters);
	}
	else {
		url = sprintf('/%s/%s/%s/%s?%s',
				config.version, objType, id, prop, parameters);
	}

	const formData = JSON.stringify(newVals);
	const requestOptions = {
		hostname: API_HOST,
		port: 443,
		path: url,
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': formData.length
		}
	};

	return new Promise((resolve, reject) => {
		const request = https.request(requestOptions, (response) => {
			const result = {
				httpVersion: response.httpVersion,
				httpStatusCode: response.statusCode,
				headers: response.headers,
				body: '',
				trailers: response.trailers
			};

			if (response.statusCode >= 400) {
				const err = new Error('Error sending data to Trello.');
				reject(err);
			}

			response.on('data', (chunk) => {
				result.body += chunk;
			});

			response.on('end', () => {
				resolve(result);
			});
		}).on('error', reject);

		request.write(formData);
		request.end();
	});
};

module.exports = {
	get: get,
	put: put
};
