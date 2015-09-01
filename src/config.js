export default (key, token, version) => {
	return Object.freeze({
		key,
		token,
		version
	});
};
