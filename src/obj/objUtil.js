import { any, flip, isNil, merge } from 'ramda';

/**
 * A utility for adapting trello object constructor parameters to a different
 * object type using a JSON response from the Trello API. This returns the
 * function that will adapt the parameters.
 *
 * @method adaptParams
 * @param {String} response the stringified JSON returned by Trello
 * @param {String} objType the object type to create
 * @return {Function}the base constructor parameters that will be
 * modified to create the new Trello object
 */
export const adaptParams = (response, objType) => {
	if (any(isNil, [response, objType])) {
		throw new Error('Both arguments are required');
	}
	const rawObj = JSON.parse(response.body);
	return obj => {
		if (typeof obj !== 'object') {
			throw new Error('Argument must be an object.');
		}
		return flip(merge)({ objType: objType, id: rawObj.id })(obj);
	};
};
