"use strict";

const Promise = require('bluebird');
const sinon = require('sinon');
const chai = require('chai');
const should = require('chai').should();
const proxyquire = require('proxyquire');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


const propertyMapsStub = { };

const TrelloObj = proxyquire('../../../lib/TrelloObj',
		{ './trelloPropertyMaps': propertyMapsStub });

propertyMapsStub.objectType = {
	expectedDefaultProperty: 'default',
	expectedNonDefaultProperty: { type: 'type' }
};

propertyMapsStub.type = {
	id: 'default'
};

describe('TrelloObj', function () {
	let net;
	let config;
	let id;
	let objType;

	before (function () {
		config = { };
		id = 'id';
		objType = 'objectType';
		net = {
			get: sinon.spy()
		};
	});

	describe('#constructor()', function () {;
		describe('if objType is missing', function () {
			it('should throw an exception', function () {
				return function () {
					return new TrelloObj();
				}.should.throw(Error);
			});
		});

		describe('if config is missing', function () {
			it('should throw an exception', function () {
				return function () {
					return new TrelloObj(objType);
				}.should.throw(Error);
			});
		});

		describe('if id is missing', function () {
			it('should throw an exception', function () {
				return function () {
					return new TrelloObj(objType, config);
				}.should.throw(Error);
			});
		});

		describe('if net is missing', function () {
			it('should throw an exception', function () {
				return function () {
					return new TrelloObj(objType, config, id);
				}.should.throw(Error);
			});
		});

		describe('if object type is invalid', function () {
			before(function () {
				objType = 'notATrelloObject';
			});

			it('should throw an error', function () {
				return function () {
					return new TrelloObj(objType, config, id, net)
				}.should.throw(Error);
			});
		});

		describe('if all arguments are correct', function () {
			before(function () {
				objType = 'objectType';
				new TrelloObj(objType, config, id, net);
			});

			it('should not call the network service', function () {
				net.get.called.should.be.false;
			});
		});
	});

	describe('property accessor', function () {
		const unexpectedProperty = 'unexpectedProperty';
		const expectedDefaultProperty = 'expectedDefaultProperty';
		const expectedDefaultValue = 'edVal';
		const expectedNonDefaultProperty = 'expectedNonDefaultProperty';
		const expectedNonDefaultValue = { id: 'endpId' };
		const invalidValue = 'invalidValue';

		describe('and the network resolves without error', function () {
			let trelloObj;

			before(function () {
				objType = 'objectType';
				const getStub = sinon.stub();
				getStub.withArgs(config, objType, id, { fields: 'all' }).returns(
					Promise.resolve({
						body: JSON.stringify({
							expectedDefaultProperty: expectedDefaultValue,
							expectedNonDefaultProperty: invalidValue
						})
					})
				);
				getStub.withArgs(config, objType, id, { }, expectedNonDefaultProperty).returns(
					Promise.resolve({
						body: JSON.stringify([expectedNonDefaultValue])
					})
				);
				net = { get: getStub }
			});

			beforeEach(function () {
				trelloObj = new TrelloObj(objType, config, id, net);
			});

			it('should return undefined for unsupported properties', function () {
				trelloObj[unexpectedProperty].should.eventually.become(undefined);
			});

			it('should update the object with the expected value on the expected default property', function () {
				trelloObj[expectedDefaultProperty].should.eventually.become(expectedDefaultValue);
				trelloObj[expectedNonDefaultProperty].should.eventually.not.become(invalidValue);
			});

			it('should update the object with the expected value on the expected non-default property', function () {
				trelloObj[expectedNonDefaultProperty].should.eventually.be.an('array');
				trelloObj[expectedNonDefaultProperty].should.eventually.have.length(1);

				// TODO: How do I test individual elements of an array returned by a resolved Promise
				//trelloObj[expectedNonDefaultProperty].should.eventually.become(expectedNonDefaultValue);
			});
		});
	});
});
