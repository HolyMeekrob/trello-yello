"use strict";

const should = require('chai').should();
const Trello = require('../../../lib/trello');

describe('Trello', function () {
	let trello;
	let key;
	let token;

	before(function () {
		key = 'key';
		token = 'token';
	});

	describe('#constructor()', function () {

		describe('if key is missing', function () {
			it('should throw an error', function () {
				return function () {
					return new Trello();
				}.should.throw(Error);
			});
		});

		describe('if token is missing', function () {
			it('should throw an error', function () {
				return function () {
					return new Trello(key);
				}.should.throw(Error);
			});
		});

		describe('if network service is missing', function () {
			it('should throw an error', function () {
				return function () {
					return new Trello(key, token);
				}.should.throw(Error);
			});
		});
	});

	describe('#get()', function () {
		let netService;

		before(function () {
			netService = { };
			trello = new Trello(key, token, netService);
		});

		describe('if objType is missing', function () {
			it('should throw an error', function () {
				return function () {
					trello.get();
				}.should.throw(Error);
			});
		});

		describe('if id is missing', function () {
			let objType;
			before(function () {
				objType = 'card';
			});

			it('should throw an error', function () {
				return function () {
					trello.get(objType);
				}.should.throw(Error);
			});
		});
		// TODO: How to tell if the correct object type constructor was called?
	});
});
