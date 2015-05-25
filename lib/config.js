var config = function (key, token, version) {
	this.key = key;
	this.token = token;
	this.version = version;
};

config.key = function (key) {
	if (key) {
		this.key = key;
	}
	return this.key;
};

config.token = function (token) {
	if (token) {
		this.token = token;
	}
	return this.token;
};

config.version = function (version) {
	if (version) {
		this.version = version;
	}
	return this.version;
};

module.exports = config;