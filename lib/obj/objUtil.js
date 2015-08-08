const R = require('Ramda');

const objUtil = (() => {
	/**
	 * A utility for adapting trello object constructor parameters to a different
	 * object type using a JSON response from the Trello API. This returns the
	 * function that will adapt the parameters.
	 *
	 * @method adaptConstructorParameters
	 * @param {String} response the stringified JSON returned by Trello
	 * @param {String} objType the object type to create
	 * @return {Function}the base constructor parameters that will be
	 * modified to create the new Trello object
	 */
	const adaptConstructorParameters = (response, objType) => {
		const rawObj = JSON.parse(response.body);
		return R.compose(
				R.assoc('objType', objType),
				R.assoc('initialVals', { id: rawObj.id })
		);
	};

	return Object.freeze({
		adaptConstructorParameters
	});
})();

module.exports = objUtil;
