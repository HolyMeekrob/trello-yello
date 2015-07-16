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
				statusMessage: response.statusMessage,
				headers: response.headers,
				body: '',
				trailers: response.trailers
			};

			response.on('data', (chunk) => {
				result.body += chunk;
			});

			response.on('end', () => {
				if (response.statusCode >= 400) {
					const err = new Error('Error sending data to Trello: ' + result.body);
					reject(err);
				}
				else {
					resolve(result);
				}
			});
		}).on('error', reject);
	});
};

const send = (verb, config, objType, id, newVals, prop) => {
	'use strict';

	if (R.isNil(objType)) {
		throw new Error('Trello object type is required for API.');
	}

	if (R.isNil(newVals)) {
		throw new Error('Updates must include values to be updated.');
	}

	const parameters = querystring.stringify(R.dissoc('version', config));

	let url;

	// A nil id means we're creating a new object
	if (R.isNil(id)) {
		url = sprintf('/%s/%s?%s', config.version, objType, parameters);
	}
	else if (R.isNil(prop)) {
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
		method: verb,
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
				statusMessage: response.statusMessage,
				headers: response.headers,
				body: '',
				trailers: response.trailers
			};

			response.on('data', (chunk) => {
				result.body += chunk;
			});

			response.on('end', () => {
				if (response.statusCode >= 400) {
					const err = new Error('Error sending data to Trello: ' + result.body);
					reject(err);
				}
				else {
					resolve(result);
				}
			});
		}).on('error', reject);

		request.write(formData);
		request.end();
	});
};

const post = (config, objType, id, newVals, prop) => {
	'use strict';

	return send('POST', config, objType, id, newVals, prop);
};

const put = (config, objType, id, newVals, prop) => {
	'use strict';

	return send('PUT', config, objType, id, newVals, prop);
};

module.exports = {
	get: get,
	post: post,
	put: put
};
