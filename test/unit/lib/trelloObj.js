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
	defaultProperty: 'default',
	nonDefaultSubProperty: { trelloType: 'trelloType' },
	nonDefaultProperty: { },
};

propertyMapsStub.trelloType = {
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
		const defaultProperty = 'defaultProperty';
		const expectedDefaultValue = 'edVal';
		const nonDefaultSubProperty = 'nonDefaultSubProperty';
		const nonDefaultProperty = 'nonDefaultProperty';
		const expectedNonDefaultSubValue = { id: 'endsvId' };
		const expectedNonDefaultValue = { id: 'endvId' };
		const invalidValue = 'invalidValue';

		describe('and the network resolves without error', function () {
			let trelloObj;

			before(function () {
				objType = 'objectType';
				const getStub = sinon.stub();
				getStub.withArgs(config, objType, id, { fields: 'all' }).returns(
					Promise.resolve({
						body: JSON.stringify({
							defaultProperty: expectedDefaultValue,
							nonDefaultSubProperty: invalidValue,
							nonDefaultProperty: invalidValue
						})
					})
				);
				getStub.withArgs(config, objType, id, { }, nonDefaultSubProperty).returns(
					Promise.resolve({
						body: JSON.stringify([expectedNonDefaultSubValue])
					})
				);
				getStub.withArgs(config, objType, id, { }, nonDefaultProperty).returns(
					Promise.resolve( {
						body: JSON.stringify(expectedNonDefaultValue)
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

			it('should update the object with the expected value on the default property', function () {
				trelloObj[defaultProperty].should.eventually.become(expectedDefaultValue);
				trelloObj[nonDefaultSubProperty].should.eventually.not.become(invalidValue);
				trelloObj[nonDefaultProperty].should.eventually.not.become(invalidValue);
			});

			it('should update the object with the expected value on the non-default sub-property', function () {
				trelloObj[nonDefaultSubProperty].should.eventually.be.an('array');
				trelloObj[nonDefaultSubProperty].should.eventually.have.length(1);

				// TODO: How do I test individual elements of an array returned by a resolved Promise
				//trelloObj[nonDefaultSubProperty].should.eventually.become(expectedNonDefaultSubValue);
			});

			it('should update the object with the expected value on the non-default property', function () {
				trelloObj[nonDefaultProperty].should.eventually.become(expectedNonDefaultValue);
			});
		});
	});
});
