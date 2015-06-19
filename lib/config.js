"use strict";

const config = function (key, token, version) {
	this.key = key;
	this.token = token;
	this.version = version;
};

config.prototype.key = function (key) {
	if (key) {
		this.key = key;
	}
	return this.key;
};

config.prototype.token = function (token) {
	if (token) {
		this.token = token;
	}
	return this.token;
};

config.prototype.version = function (version) {
	if (version) {
		this.version = version;
	}
	return this.version;
};

module.exports = config;
