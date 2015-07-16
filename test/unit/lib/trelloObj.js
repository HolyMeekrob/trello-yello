const TrelloObj = require('../../../lib/TrelloObj');
const Promise = require('bluebird');
const sinon = require('sinon');
const chai = require('chai');
const should = chai.should(); // eslint-disable-line no-unused-vars
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


const propertyMapsStub = {};

propertyMapsStub.objectType = {
	allowEmptyPut: true,
	props: {
		autoProperty: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true, subProperty: { allowEmpty: true } }},
		nonAutoProperty: { trelloType: null, isAutoProp: false, get: {}},
		nonAutoSubProperty: {
			trelloType: 'alternateType',
			isAutoProp: false,
			get: {}
		},
		nonGettableProperty: { trelloType: null, isAutoProp: false, put: {}},
		nonAllowEmptyProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: false }},
		allowIdProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: false, allowId: true }},
		postProperty: { trelloType: null, isAutoProp: false, post: { allowEmpty: true }},
		putAndPostProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: true }, post: { allowEmpty: true }}
	}
};

propertyMapsStub.alternateType = {
	allowEmptyPut: false,
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
	const nonAllowEmptyProperty = 'nonAllowEmptyProperty';
	const subProperty = 'subProperty';
	const allowIdProperty = 'allowIdProperty';
	const postProperty = 'postProperty';
	const putAndPostProperty = 'putAndPostProperty';

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
				post: sinon.spy(),
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
					return new TrelloObj(propertyMapsStub, objType);
				}.should.throw(Error);
			});
		});

		describe('if id is missing', function () {
			it('should throw an exception', function () {
				return function () {
					return new TrelloObj(propertyMapsStub, objType, config);
				}.should.throw(Error);
			});
		});

		describe('if net is missing', function () {
			it('should throw an exception', function () {
				return function () {
					return new TrelloObj(propertyMapsStub, objType, config, id);
				}.should.throw(Error);
			});
		});

		describe('if object type is invalid', function () {
			before(function () {
				objType = 'notATrelloObject';
			});

			it('should throw an error', function () {
				return function () {
					return new TrelloObj(propertyMapsStub, objType, config, id, net);
				}.should.throw(Error);
			});
		});

		describe('if all arguments are correct', function () {
			before(function () {
				objType = 'objectType';
				let trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net); // eslint-disable-line no-unused-vars
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
				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.get(nonGettableProperty).should.be.rejectedWith(Error);
			});
		});

		describe('getting a non-Trello property', function () {
			let trelloObj;

			beforeEach(function () {
				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.get(unexpectedProperty).should.be.rejectedWith(Error);
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
				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should update the object with the expected value on the default property', function () {
				trelloObj.get(autoProperty).should.eventually.become(expectedDefaultValue);
				trelloObj.get(nonAutoSubProperty).should.eventually.not.become(invalidValue);
				trelloObj.get(nonAutoProperty).should.eventually.not.become(invalidValue);
			});

			it('should update the object with the expected value on the non-default sub-property', function () {
				trelloObj.get(nonAutoSubProperty).should.eventually.be.an('array');
				trelloObj.get(nonAutoSubProperty).should.eventually.have.length(1);
				trelloObj.get(nonAutoSubProperty).then(arr => arr[0].get('id'))
						.should.eventually.become(expectedNonDefaultSubValue.id);
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
				trelloObj = new TrelloObj(propertyMapsStub, altType, config, id, net);
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
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
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

			beforeEach(function () {
				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal, nonTrelloProperty).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property that cannot be set', function () {
			const newVal = 'unsettableVal';

			beforeEach(function () {
				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal, nonAutoProperty).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property that requires a sub-property without any sub-properties', function () {
			const newVal = 'unsettableVal';

			beforeEach(function () {
				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal, nonAllowEmptyProperty).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property', function () {
			const newVal = 'trelloPropertyVal';

			beforeEach(function () {
				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, autoProperty);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, autoProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property with invalid sub-properties', function () {
			const newVal = 'trelloPropertyVal';

			beforeEach(function () {
				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal, 'autoProperty/invalidSubProperty').should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property with valid sub-properties', function () {
			const newVal = 'trelloPropertyVal';

			beforeEach(function () {
				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, autoProperty + '/' + subProperty);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, autoProperty + '/' + subProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property with an id', function () {
			const newVal = 'trelloPropertyVal';
			const subPropertyId = 'subPropId';

			beforeEach(function () {
				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, allowIdProperty + '/' + subPropertyId);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, allowIdProperty + '/' + subPropertyId).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property that allows post but not put', function () {
			const newVal = 'trelloPropertyVal';

			beforeEach(function () {
				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, postProperty);
			});

			it('should call the network service', function () {
				net.put.called.should.be.false; // eslint-disable-line no-unused-expressions
				net.post.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.post.calledWithExactly(config, objType, id, newVal, postProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property that allows both and preferring idempotence', function () {
			const newVal = 'trelloPropVal';

			beforeEach(function() {
				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, putAndPostProperty);
			});

			it('should call put on the network service', function() {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.post.called.should.be.false; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, putAndPostProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property that allows both and preferring non-idempotence', function () {
			const newVal = 'newPropVal';

			beforeEach(function() {
				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, putAndPostProperty, true);
			});

			it('should call put on the network service', function() {
				net.put.called.should.be.false; // eslint-disable-line no-unused-expressions
				net.post.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.post.calledWithExactly(config, objType, id, newVal, putAndPostProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});
	});
});
