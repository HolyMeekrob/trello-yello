const Promise = require('bluebird');
const sinon = require('sinon');
const chai = require('chai');
const should = chai.should(); // eslint-disable-line no-unused-vars
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const sandbox = sinon.sandbox.create();
const trelloFactoryStub = { createTrelloObject: sandbox.stub() };

const propertyMapsStub = {};
const netStub = { '@noCallThru': true};
const proxyquire = require('proxyquire');
const trello = proxyquire('../../../lib/trello',
		{
			'./trelloPropertyMaps': propertyMapsStub,
			'../net/networkService': netStub,
			'./trelloFactory': trelloFactoryStub
		});

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

	let obj;
	let key;
	let token;
	let args;

	before(function () {
		key = 'key';
		token = 'token';
	});

	// Clear netStub so no tests bleed into each other
	beforeEach(function () {
		sandbox.restore();
	});

	describe('#constructor()', function () {

		describe('if key is missing', function () {
			it('should throw an error', function () {
				return function () {
					return trello();
				}.should.throw(Error);
			});
		});

		describe('if token is missing', function () {
			beforeEach(function () {
				args = { key };
			});

			it('should throw an error', function () {
				return function () {
					return trello(args);
				}.should.throw(Error);
			});
		});

		describe('if key and token are present', function () {
			beforeEach(function () {
				args = { key, token };
				obj = trello(args);
			});

			it('should return the object', function () {
				obj.should.exist; // eslint-disable-line no-unused-expressions
			});
		});
	});

	describe('#get()', function () {
		beforeEach(function () {
			args = { key, token };
			obj = trello(args);
		});

		describe('if objType is missing', function () {
			it('should throw an error', function () {
				return function () {
					obj.get({});
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
					obj.get({ objType });
				}.should.throw(Error);
			});
		});

		describe('if arguments are kosher', function () {
			let actualVal;
			let expectedVal;

			beforeEach(function () {
				const id = 'objId';
				const objType = 'objType';
				expectedVal = { id };

				trelloFactoryStub.createTrelloObject.withArgs(sinon.match.object).returns(
						Promise.resolve(expectedVal));

				actualVal = obj.get({ objType, id });
			});

			it('should return the correct Trello object', function () {
				actualVal.should.eventually.become(expectedVal);
			});
		});
	});
});
