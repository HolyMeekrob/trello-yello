const https = require('https');
const querystring = require('querystring');
const sprintf = require('sprintf');
const Promise = require('bluebird');
const R = require('ramda');

const API_HOST = 'api.trello.com';

const getErrorMessageForVerb = (verb) => {
	if (verb === 'DELETE') {
		return 'Error deleting Trello entity: ';
	}

	return 'Error sending data to Trello: ';
};

const send = (verb, config, objType, id, urlData, bodyData, prop) => {
	'use strict';

	if (R.isNil(objType)) {
		throw new Error('Trello object type is required for API.');
	}

	let parameters = R.clone(urlData);

	if (R.isNil(parameters)) {
		parameters = {};
	}

	if (!R.isNil(config.key)) {
		parameters.key = config.key;
	}

	if (!R.isNil(config.token)) {
		parameters.token = config.token;
	}

	parameters = querystring.stringify(parameters);

	if (R.isNil(prop)) {
		prop = '';
	}

	let url;

	// A nil id means we're creating a new object
	if (R.isNil(id)) {
		url = sprintf('/%s/%s?%s', config.version, objType, parameters);
	}
	else {
		url = sprintf('/%s/%s/%s/%s?%s',
				config.version, objType, id, prop, parameters);
	}

	let requestHeaders = {};
	let requestBody = null;

	if (!R.isNil(bodyData)) {
		requestBody = JSON.stringify(bodyData);
		requestHeaders['Content-Type'] = 'application/json';
		requestHeaders['Content-Length'] = requestBody.length;
	}

	const requestOptions = {
		hostname: API_HOST,
		port: 443,
		path: url,
		method: verb,
		headers: requestHeaders
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
					const err = new Error(getErrorMessageForVerb(verb) + result.body);
					reject(err);
				}
				else {
					resolve(result);
				}
			});
		}).on('error', reject);

		if (requestBody !== null) {
			request.write(requestBody);
		}

		request.end();
	});
};


const del = (config, objType, id, prop) => {
	'use strict';

	if (R.isNil(id)) {
		throw new Error('Id is required to delete Trello entity.');
	}

	return send('DELETE', config, objType, id, null, null, prop);
};

const get = (config, objType, id, parameters, subObjType) => {
	'use strict';

	return send('GET', config, objType, id, parameters, null, subObjType);
};

const post = (config, objType, id, newVals, prop) => {
	'use strict';

	if (R.isNil(newVals)) {
		throw new Error('Updates must include new values.');
	}

	return send('POST', config, objType, id, null, newVals, prop);
};

const put = (config, objType, id, newVals, prop) => {
	'use strict';

	if (R.isNil(newVals)) {
		throw new Error('Updates must include new values.');
	}

	return send('PUT', config, objType, id, null, newVals, prop);
};

module.exports = {
	delete: del,
	get: get,
	post: post,
	put: put
};
