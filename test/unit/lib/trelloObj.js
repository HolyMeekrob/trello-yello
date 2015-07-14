const Promise = require('bluebird');
const sinon = require('sinon');
const chai = require('chai');
const should = chai.should(); // eslint-disable-line no-unused-vars
const proxyquire = require('proxyquire');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


const propertyMapsStub = {};

const TrelloObj = proxyquire('../../../lib/TrelloObj',
		{ './trelloPropertyMaps': propertyMapsStub });

propertyMapsStub.objectType = {
	idPut: true,
	props: {
		autoProperty: { trelloType: null, isAutoProp: true, get: {}, put: {} },
		nonAutoProperty: { trelloType: null, isAutoProp: false, get: {} },
		nonAutoSubProperty: {
			trelloType: 'alternateType',
			isAutoProp: false,
			get: {}
		},
		nonGettableProperty: { put: {} }
	}
};

propertyMapsStub.alternateType = {
	idPut: false,
	props: {
		id: {
			trelloType: null,
			isAutoProp: true,
			get: {}
		}
	}
};

describe('TrelloObj', function () {
	'use strict';

	const autoProperty = 'autoProperty';
	const nonAutoSubProperty = 'nonAutoSubProperty';
	const nonAutoProperty = 'nonAutoProperty';
	const nonGettableProperty = 'nonGettableProperty';

	let net;
	let config;
	let id;
	let objType;
	let altType;

	before(function () {
		config = {};
		id = 'id';
		objType = 'objectType';
		altType = 'alternateType';
	});

	describe('#constructor()', function () {
		beforeEach(function () {
			net = {
				get: sinon.spy(),
				put: sinon.spy()
			};
		});

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
					return new TrelloObj(objType, config, id, net);
				}.should.throw(Error);
			});
		});

		describe('if all arguments are correct', function () {
			before(function () {
				objType = 'objectType';
				let trelloObj = new TrelloObj(objType, config, id, net); // eslint-disable-line no-unused-vars
			});

			it('should not call the network service', function () {
				net.get.called.should.be.false; // eslint-disable-line no-unused-expressions
			});
		});
	});

	describe('#get()', function () {
		const unexpectedProperty = 'unexpectedProperty';
		const expectedDefaultValue = 'edVal';
		const expectedNonDefaultSubValue = { id: 'endsvId' };
		const expectedNonDefaultValue = { id: 'endvId' };
		const invalidValue = 'invalidValue';

		describe('getting a non-gettable Trello property', function () {
			let trelloObj;

			beforeEach(function () {
				trelloObj = new TrelloObj(objType, config, id, net);
			});

			it('should be rejected', function () {
				return trelloObj.get(nonGettableProperty).should.be.rejectedWith(Error);
			});
		});

		describe('and the network resolves without error', function () {
			let trelloObj;

			beforeEach(function () {
				const getStub = sinon.stub();
				getStub.withArgs(config, objType, id, { fields: 'all' }).returns(
					Promise.resolve({
						body: JSON.stringify({
							autoProperty: expectedDefaultValue,
							nonAutoSubProperty: invalidValue,
							nonAutoProperty: invalidValue
						})
					})
				);
				getStub.withArgs(config, objType, id, {}, nonAutoSubProperty).returns(
					Promise.resolve({
						body: JSON.stringify([expectedNonDefaultSubValue])
					})
				);
				getStub.withArgs(config, objType, id, {}, nonAutoProperty).returns(
					Promise.resolve( {
						body: JSON.stringify(expectedNonDefaultValue)
					})
				);
				net = { get: getStub };
			});

			beforeEach(function () {
				trelloObj = new TrelloObj(objType, config, id, net);
			});

			it('should return undefined for unsupported properties', function () {
				trelloObj.get(unexpectedProperty).should.eventually.become(undefined);
			});

			it('should update the object with the expected value on the default property', function () {
				trelloObj.get(autoProperty).should.eventually.become(expectedDefaultValue);
				trelloObj.get(nonAutoSubProperty).should.eventually.not.become(invalidValue);
				trelloObj.get(nonAutoProperty).should.eventually.not.become(invalidValue);
			});

			it('should update the object with the expected value on the non-default sub-property', function () {
				trelloObj.get(nonAutoSubProperty).should.eventually.be.an('array');
				trelloObj.get(nonAutoSubProperty).should.eventually.have.length(1);

				// TODO: How do I test individual elements of an array returned by a resolved Promise
				//trelloObj[nonAutoSubProperty].should.eventually.become(expectedNonDefaultSubValue);
			});

			it('should update the object with the expected value on the non-default property', function () {
				trelloObj.get(nonAutoProperty).should.eventually.become(expectedNonDefaultValue);
			});
		});
	});

	describe('#set()', function () {
		let trelloObj;

		describe('setting the object on a non-settable object type', function () {
			const newVal = { value: 'newVal' };

			beforeEach(function () {
				trelloObj = new TrelloObj(altType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal).should.be.rejectedWith(Error);
			});
		});

		describe('setting the object on a settable object type', function () {
			const newVal = { value: 'newVal' };

			beforeEach(function () {
				net = {
					get: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(objType, config, id, net);
				trelloObj.set(newVal);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; //eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal).should.be.true; //eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a property that isn\'t a Trello property', function () {
			const nonTrelloProperty = 'nonTrelloProperty';
			const newVal = 'nonTrelloPropertyVal';
			let returnVal;

			beforeEach(function () {
				net = {
					get: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(objType, config, id, net);
				returnVal = trelloObj.set(newVal, nonTrelloProperty);
			});

			it('should not call the network service', function () {
				net.put.called.should.be.false; // eslint-disable-line no-unused-expressions
			});

			it('should return the new property value', function () {
				returnVal.should.eventually.become(newVal);
			});

			it('should return the value when subsequently calling get()', function () {
				trelloObj.get(nonTrelloProperty).should.eventually.become(newVal);
			});
		});

		describe('setting a Trello property that cannot be set', function () {
			const newVal = 'unsettableVal';

			beforeEach(function () {
				trelloObj = new TrelloObj(objType, config, id, net);
			});

			it('should be rejected', function () {
				return trelloObj.set(newVal, nonAutoProperty).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property', function () {
			const newVal = 'trelloPropertyVal';

			beforeEach(function () {
				trelloObj = new TrelloObj(objType, config, id, net);
				trelloObj.set(newVal, autoProperty);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, autoProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});
	});
});
