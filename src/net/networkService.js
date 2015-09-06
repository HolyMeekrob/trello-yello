import https from 'https';
import querystring from 'querystring';
import Promise from 'bluebird';
import { any, isNil, clone } from 'ramda';

const API_HOST = 'api.trello.com';

const networkService = () => {
	/**
	 * Returns an error message appropriate to the given HTTP verb.
	 *
	 * @method getErrorMessageForVerb
	 * @param {String} verb the verb for which to get an error message
	 * @return {String} the error message
	 * @static
	 * @private
	 */
	const getErrorMessageForVerb = (verb) => {
		if (verb === 'DELETE') {
			return 'Error deleting Trello entity: ';
		}

		return 'Error sending data to Trello: ';
	};

	/**
	 * Makes an HTTP request to the Trello API.
	 *
	 *
	 * @method send
	 * @param {Object} params the method parameters object
	 * @param {String} params.verb the HTTP verb to use
	 * @param {Object} params.config the configuration information for the Trello api
	 * @param {String} params.config.key the application key for accessing Trello
	 * @param {String} params.config.token a valid Trello API token
	 * @param {Number} params.config.version the Trello API version Number
	 * @param {String} params.objType the type of Trello object. Please refer to
	 * other documentation for the list of allowed types.
	 * @param {String} [params.id] the id of the Trello object. Not required for
	 * creating new objects
	 * @param {Object} [params.urlData] information to be passed in the query
	 * string. For each property on the object, it will take the form key=value,
	 * where key is the property name and value is its value
	 * @param {Object} [params.bodyData] the data to be included as the body of
	 * the HTTP request
	 * @param {String} [params.prop] used if the request will be upon a property
	 * of the object. This is appended to the query url according to the Trello
	 * API spec.
	 * @return a promise that resolves to the data returned by Trello
	 * @static
	 * @private
	 */
	const send = (params) => {
		const { verb, config, objType, id, urlData, bodyData } = params;
		let { prop } = params;

		if (isNil(objType)) {
			throw new Error('Trello object type is required for API.');
		}

		let parameters = clone(urlData);

		if (isNil(parameters)) {
			parameters = {};
		}

		if (!isNil(config.key)) {
			parameters.key = config.key;
		}

		if (!isNil(config.token)) {
			parameters.token = config.token;
		}

		parameters = querystring.stringify(parameters);

		if (isNil(prop)) {
			prop = '';
		}

		let url;

		// A nil id means we're creating a new object
		if (isNil(id)) {
			url = `/${config.version}/${objType}?${parameters}`;
		}
		else {
			url = `/${config.version}/${objType}/${id}/${prop}?${parameters}`;
		}

		const requestHeaders = {};
		let requestBody = null;

		if (!isNil(bodyData)) {
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

	/**
	 * Calls DELETE on the Trello API.
	 *
	 * @method delete
	 * @param {Object} config the configuration information for the Trello api
	 * @param {String} config.key the application key for accessing Trello
	 * @param {String} config.token a valid Trello API token
	 * @param {String} objType the type of Trello object. Please refer to
	 * other documentation for the list of allowed types.
	 * @param {String} id the id of the Trello object.
	 * @param {String} [prop] the path of the property to be deleted. If not
	 * included, then the delete will be on the object itself.
	 * @return a promise that resolves to the data returned by Trello
	 * @static
	 */
	const del = (config, objType, id, prop) => {
		if (any(isNil, [config, objType, id])) {
			throw new Error('Config, object type, and id are '
					+ 'required to delete Trello entity.');
		}

		return send({
			verb: 'DELETE',
			config,
			objType,
			id,
			prop
		});
	};

	/**
	 * Calls GET on the Trello API.
	 *
	 * @method get
	 * @param {Object} config the configuration information for the Trello api
	 * @param {String} config.key the application key for accessing Trello
	 * @param {String} config.token a valid Trello API token
	 * @param {String} objType the type of Trello object. Please refer to
	 * other documentation for the list of allowed types.
	 * @param {String} id the id of the Trello object.
	 * @param {Object} [parameters] additional query string parameters
	 * @param {String} [prop] the path of the property to be retrieved. If not
	 * included, then the base obect itself will be retrieved.
	 * @return a promise that resolves to the data returned by Trello
	 * @static
	 */
	const get = (config, objType, id, parameters, subObjType) => {
		return send({
			verb: 'GET',
			config,
			objType,
			id,
			urlData: parameters,
			prop: subObjType
		});
	};

	/**
	 * Calls POST on the Trello API.
	 *
	 * @method post
	 * @param {Object} config the configuration information for the Trello api
	 * @param {String} config.key the application key for accessing Trello
	 * @param {String} config.token a valid Trello API token
	 * @param {String} objType the type of Trello object. Please refer to
	 * other documentation for the list of allowed types.
	 * @param {String} [id] the id of the Trello object. If this is not included,
	 * then this operation will create a new Trello object.
	 * @param {Object} newVals the values to set. This will be the HTTP request
	 * body.
	 * @param {String} [prop] the path of the property to be set. If not
	 * included, then the base obect itself will have its values set.
	 * @return a promise that resolves to the data returned by Trello
	 * @static
	 */
	const post = (config, objType, id, newVals, prop) => {
		if (any(isNil, [config, objType, newVals])) {
			throw new Error('Updates must include config, an object type and a new '
				+ 'values object.');
		}

		return send({
			verb: 'POST',
			config,
			objType,
			id,
			bodyData: newVals,
			prop
		});
	};

	/**
	 * Calls PUT on the Trello API.
	 *
	 * @method put
	 * @param {Object} config the configuration information for the Trello api
	 * @param {String} config.key the application key for accessing Trello
	 * @param {String} config.token a valid Trello API token
	 * @param {String} objType the type of Trello object. Please refer to
	 * other documentation for the list of allowed types.
	 * @param {String} id the id of the Trello object.
	 * @param {Object} newVals the values to set. This will be the HTTP request
	 * body.
	 * @param {String} [prop] the path of the property to be set. If not
	 * included, then the base obect itself will have its values set.
	 * @return a promise that resolves to the data returned by Trello
	 * @static
	 */
	const put = (config, objType, id, newVals, prop) => {
		if (any(isNil, [config, objType, newVals])) {
			throw new Error('Updates must include config, an object type and a new '
				+ 'values object.');
		}

		return send({
			verb: 'PUT',
			config,
			objType,
			id,
			bodyData: newVals,
			prop
		});
	};

	return Object.freeze({
		del,
		get,
		post,
		put
	});
};

export default networkService();
