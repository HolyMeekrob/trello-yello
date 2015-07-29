const chai = require('chai');
const should = chai.should(); // eslint-disable-line no-unused-vars
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const propertyMapsStub = {};
const proxyquire = require('proxyquire');
const Trello = proxyquire('../../../lib/trello',
		{ './trelloPropertyMaps': propertyMapsStub });

propertyMapsStub.createableObjectType = {
	allowCreation: true,
	props: {
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		}
	}
};

propertyMapsStub.nonCreateableObjectType = {
	allowCreation: false,
	props: {}
};

describe('Trello', function () {
	'use strict';

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
	});

	describe('#create()', function () {
		describe('creating an object type that does not exist', function () {
			beforeEach(function () {
				trello = new Trello(key, token);
			});

			it('should throw an exception', function () {
				return function () {
					return trello.create('imaginaryObjectType', {});
				}.should.throw(Error);
			});
		});

		describe('creating an object type that does not allow creation', function () {
			beforeEach(function () {
				trello = new Trello(key, token);
			});

			it('should throw an exception', function () {
				return function () {
					return trello.create('nonCreateableObjectType', {});
				}.should.throw(Error);
			});
		});
	});

	describe('#get()', function () {
		beforeEach(function () {
			trello = new Trello(key, token);
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

		describe('if arguments are kosher', function () {
			let objType;
			let id;
			let newObj;

			beforeEach(function () {
				objType = 'createableObjectType';
				id = 'object id';

				newObj = trello.get(objType, id);
			});

			it('should return the correct Trello object', function () {
				newObj.get('id').should.eventually.become(id);
			});
		});
	});
});
