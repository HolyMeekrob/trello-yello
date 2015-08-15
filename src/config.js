export default (key, token, version) => {
	return Object.freeze({
		key: key,
		token: token,
		version: version
	});
};
