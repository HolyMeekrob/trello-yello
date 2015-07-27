const R = require('Ramda');

/// A recursive function that checks that a property path that is formatted
/// as a string with its properties separated by forward slashes ('/') matches
/// a legal property path as listed within our object maps. The rules are as
/// follows:
/// 1. If we are on the last property in the path, then its allowEmpty field
/// must be set to true.
/// 2. If the next element in the path matches a subproperty of the current
/// property, then we have the following cases:
/// 2(a). If the property does not have an array named allowNext or that array
/// does not include the next element, then return false.
/// 2(b). If allowNext does include the next element, recursively call this
/// function on that property.
/// 3. If the next element in the path does not match a subproperty, then
/// check the property's allowId array. If that array exists, then we have
/// the following cases:
/// 3(a). If the next element is the last element in the path, then allowId
/// must contain the empty string, which signifies that the id can be the last
/// element in the path.
/// 3(b). If the next element is not the last element in the path, then
/// allowId must contain a string that equals the second element in the path.
/// If so, and if a subproperty exists with the name of that second element,
/// then recursively call this function with that subproperty.
/// 3(c). If neither of the above cases are met, return false.
const hasValidPath = (property, remainingPath) => {
	// If this is the last element in the chain, then return true if the
	// property object's allowEmpty property is true.
	if (R.isEmpty(remainingPath)) {
		return !!property.allowEmpty;
	}

	// If the next element in the chain has the same name as a property on
	// the property object, and the allowNext list includes that property name,
	// then keep going down the chain.
	if (R.has(remainingPath[0], property)) {
		return R.has('allowNext', property)
				&& R.contains(remainingPath[0], property.allowNext)
				&& hasValidPath(property[remainingPath[0]], remainingPath.slice(1));
	}

	// At this point the next element has to be treated as an id.
	// If it's the last element in the chain. Only return true if the allowId
	// array has an empty string signifying the last element in the chain.
	if (remainingPath.length === 1) {
		return R.has('allowId', property) && R.contains('', property.allowId);
	}

	// Otherwise there are still more elements in the chain. If the current
	// property has an name in its allowId array equal to the following element,
	// continue checking with that element.
	const nextProp = remainingPath[1];
	return (!R.isNil(property.allowId)
			&& R.contains(nextProp, property.allowId)
			&& R.has(nextProp, property)
			&& hasValidPath(property[nextProp], remainingPath.slice(2)));
};

module.exports = {
	hasValidPath: hasValidPath
};
