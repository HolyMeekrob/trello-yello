const config = function (key, token, version) {
	'use strict';

	this.key = key;
	this.token = token;
	this.version = version;
};

config.prototype.key = function (key) {
	'use strict';

	if (key) {
		this.key = key;
	}
	return this.key;
};

config.prototype.token = function (token) {
	'use strict';

	if (token) {
		this.token = token;
	}
	return this.token;
};

config.prototype.version = function (version) {
	'use strict';

	if (version) {
		this.version = version;
	}
	return this.version;
};

module.exports = config;
