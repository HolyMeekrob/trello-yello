const trelloObj = require('../../../lib/trelloObj');
const Promise = require('bluebird');
const sinon = require('sinon');
const chai = require('chai');
const should = chai.should(); // eslint-disable-line no-unused-vars
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('trelloObj', function () {
	'use strict';

	let net;
	let config;
	let id;
	let objType;
	let propertyMapsStub;
	let objConstructor;

	before(function () {
		config = {};
		id = 'id';
		objType = 'objectType';
	});

	describe('#constructor()', function () {
		beforeEach(function () {
			propertyMapsStub = {};

			net = {
				get: sinon.spy(),
				post: sinon.spy(),
				put: sinon.spy()
			};
		});

		describe('if objType is missing', function () {
			it('should throw an exception', function () {
				return function () {
					return trelloObj();
				}.should.throw(Error);
			});
		});

		describe('if config is missing', function () {
			it('should throw an exception', function () {
				return function () {
					return trelloObj({
						maps: propertyMapsStub,
						objType
					});
				}.should.throw(Error);
			});
		});

		describe('if id is missing', function () {
			it('should throw an exception', function () {
				return function () {
					trelloObj({
						maps: propertyMapsStub,
						objType,
						config
					});
				}.should.throw(Error);
			});
		});

		describe('if net is missing', function () {
			it('should throw an exception', function () {
				return function () {
					return trelloObj({
						maps: propertyMapsStub,
						objType,
						config,
						id
					});
				}.should.throw(Error);
			});
		});

		describe('if object type is invalid', function () {
			it('should throw an error', function () {
				return function () {
					return trelloObj({
						maps: propertyMapsStub,
						objType,
						config,
						id,
						net
					});
				}.should.throw(Error);
			});
		});

		describe('if constructor is missing', function () {
			beforeEach(function () {
				propertyMapsStub.objectType = {
					props: {}
				};
			});

			it('should throw an error', function () {
				return function () {
					return trelloObj({
						maps: propertyMapsStub,
						objType,
						config,
						id,
						net
					});
				}.should.throw(Error);
			});
		});

		describe('if constructor is not a function', function () {
			beforeEach(function () {
				propertyMapsStub.objectType = {
					props: {}
				};
				objConstructor = {};
			});

			it('should throw an error', function () {
				return function () {
					return trelloObj({
						maps: propertyMapsStub,
						objType,
						config,
						id,
						net,
						objConstructor
					});
				}.should.throw(Error);
			});
		});

		describe('if all arguments are correct', function () {
			beforeEach(function () {
				propertyMapsStub.objectType = {
					props: {}
				};
				objConstructor = () => undefined;
				trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should not call the network service', function () {
				net.get.called.should.be.false; // eslint-disable-line no-unused-expressions
			});
		});
	});

	describe('#get()', function () {
		describe('getting a non-gettable Trello property', function () {
			let obj;
			let nonGettableProperty;

			beforeEach(function () {
				nonGettableProperty = 'nonGettableProperty';
				objConstructor = () => undefined;
				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.get({ propName: nonGettableProperty }).should.be.rejectedWith(Error);
			});
		});

		describe('getting a non-Trello property', function () {
			let obj;
			let unexpectedProperty;
			objConstructor = () => undefined;

			beforeEach(function () {
				unexpectedProperty = 'unexpectedProperty';
				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.get({ propName: unexpectedProperty }).should.be.rejectedWith(Error);
			});
		});

		describe('getting a non-Trello property with a callback', function () {
			let obj;
			let unexpectedProperty;
			let thrownErr;

			beforeEach(function (done) {
				unexpectedProperty = 'unexpectedProp';
				objConstructor = () => undefined;
				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});

				obj.get({
					propName: unexpectedProperty,
					callback: function (err) {
						if (err) {
							thrownErr = err;
						}

						else {
							thrownErr = null;
						}

						done();
					}
				});
			});

			it('should call the callback with an error', function () {
				should.exist(thrownErr);
				thrownErr.should.be.an.instanceof(Error);
			});
		});

		describe('getting a non-Trello property but skipping validation', function () {
			let obj;
			let nonTrelloProp;
			let expectedValue;
			objConstructor = () => undefined;

			beforeEach(function () {
				nonTrelloProp = 'nonTrelloProp';
				expectedValue = 'expected value';

				const getStub = sinon.stub();
				getStub.withArgs(config, objType, id, {}, nonTrelloProp).returns(
					Promise.resolve( {
						body: JSON.stringify(expectedValue)
					})
				);
				net = { get: getStub };

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should retrieve the value anyway', function () {
				obj.get({ propName: nonTrelloProp, skipValidation: true }).should.eventually.become(expectedValue);
			});
		});

		describe('and the network resolves without error', function () {
			let obj;
			let autoProperty;
			let nonAutoProperty;
			let nonAutoSubProperty;
			let expectedDefaultValue;
			let expectedNonDefaultSubValue;
			let expectedNonDefaultValue;
			let invalidValue;

			beforeEach(function () {
				autoProperty = 'autoProperty';
				nonAutoProperty = 'nonAutoProperty';
				nonAutoSubProperty = 'nonAutoSubProperty';
				expectedDefaultValue = 'edVal';
				expectedNonDefaultSubValue = { id: 'endsvId' };
				expectedNonDefaultValue = { id: 'endvId' };
				invalidValue = 'invalidValue';

				propertyMapsStub.objectType = {
					defaultArgs: { fields: 'all' },
					props: {
						autoProperty: { trelloType: null, isAutoProp: true, get: {} },
						nonAutoProperty: { trelloType: null, isAutoProp: false, get: {} },
						nonAutoSubProperty: {
							trelloType: 'alternateType',
							isAutoProp: false,
							get: {}
						}
					}
				};

				propertyMapsStub.alternateType = {
					allowEmptyPut: false,
					defaultArgs: {},
					props: {
						id: {
							trelloType: null,
							isAutoProp: true,
							get: {}
						}
					}
				};

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

				const objConstructorStub = sinon.stub();
				objConstructorStub.withArgs(sinon.match.object).returns(expectedNonDefaultSubValue);
				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor: objConstructorStub
				});
			});

			it('should update the object with the expected value on the default property', function () {
				obj.get({ propName: autoProperty }).should.eventually.become(expectedDefaultValue);
				obj.get({ propName: nonAutoSubProperty }).should.eventually.not.become(invalidValue);
				obj.get({ propName: nonAutoProperty }).should.eventually.not.become(invalidValue);
			});

			it('should update the object with the expected value on the non-default sub-property', function () {
				obj.get({ propName: nonAutoSubProperty }).should.eventually.be.an('array');
				obj.get({ propName: nonAutoSubProperty }).should.eventually.have.length(1);
				obj.get({ propName: nonAutoSubProperty }).then(arr => arr[0]).
						should.eventually.become(expectedNonDefaultSubValue);
			});

			it('should update the object with the expected value on the non-default property', function () {
				obj.get({ propName: nonAutoProperty }).should.eventually.become(expectedNonDefaultValue);
			});
		});

		describe('and the network resolves without error using a callback', function () {
			let obj;
			let autoProperty;
			let expectedValue;
			let actualValue;

			beforeEach(function (done) {
				autoProperty = 'autoProperty';
				expectedValue = 'expectedVal';

				propertyMapsStub.objectType = {
					defaultArgs: { fields: 'all' },
					props: {
						autoProperty: { trelloType: null, isAutoProp: true, get: {} }
					}
				};

				const getStub = sinon.stub();
				getStub.withArgs(config, objType, id, { fields: 'all' }).returns(
					Promise.resolve({
						body: JSON.stringify({
							autoProperty: expectedValue
						})
					})
				);
				net = { get: getStub };
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.get({
					propName: autoProperty,
					callback: function (err, response) {
						if (err) {
							actualValue = err;
						}
						else {
							actualValue = response;
						}

						done();
					}
				});
			});

			it('should update the object with the expected value on the default property', function () {
				actualValue.should.equal(expectedValue);
			});
		});
	});

	describe('#set()', function () {
		let obj;
		let args;

		describe('setting the object on a non-settable object type', function () {
			let newVal;

			beforeEach(function () {
				newVal = { value: 'newVal' };
				args = {
					values: newVal
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting the object on a non-settable object type but skipping validation', function () {
			let newVal;

			beforeEach(function () {
				newVal = { value: 'newVal' };
				args = {
					values: newVal,
					skipValidation: true
				};
				objConstructor = () => undefined;

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal).returns(Promise.resolve({}));
				net = {
					put: putStub
				};

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});

				obj.set(args);
			});

			it('should be call the network service anyway', function () {
				net.put.called.should.be.true;
			});
		});

		describe('setting the object on a non-settable object type with a callback', function () {
			let newVal;
			let success;

			beforeEach(function (done) {
				newVal = { value: 'newVal' };
				args = {
					values: newVal,
					callback: function (err) {
						if (err) {
							success = false;
						}
						else {
							success = true;
						}
						done();
					}
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should call the callback with an error', function () {
				success.should.be.false; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting the object on a settable object type', function () {
			let newVal;

			beforeEach(function () {
				newVal = { value: 'newVal' };
				args = {
					values: newVal
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {}
				};

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal).returns(Promise.resolve({}));
				net = {
					put: putStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});

				obj.set(args);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; //eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal).should.be.true; //eslint-disable-line no-unused-expressions
			});
		});

		describe('setting the object on a settable object type with a callback', function () {
			let newVal;
			let success;

			beforeEach(function (done) {
				newVal = { value: 'newVal' };
				args = {
					values: newVal,
					callback: function (err) {
						if (err) {
							success = false;
						}
						else {
							success = true;
						}
						done();
					}
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {}
				};

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal).returns(Promise.resolve({}));
				net = {
					put: putStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; //eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal).should.be.true; //eslint-disable-line no-unused-expressions
			});

			it('should call the callback with success', function () {
				success.should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a property that isn\'t a Trello property', function () {
			let nonTrelloProperty;
			let newVal;

			beforeEach(function () {
				newVal = { newValProp: 'nonTrelloPropertyVal' };
				nonTrelloProperty = 'nonTrelloProperty';
				args = {
					values: newVal,
					propName: nonTrelloProperty
				};

				propertyMapsStub.objectType = {
					props: {}
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting a property that isn\'t a Trello property but skipping validation', function () {
			let nonTrelloProperty;
			let newVal;

			beforeEach(function () {
				newVal = { newValProp: 'nonTrelloPropertyVal' };
				nonTrelloProperty = 'nonTrelloProperty';
				args = {
					values: newVal,
					propName: nonTrelloProperty,
					skipValidation: true
				};

				propertyMapsStub.objectType = {
					props: {}
				};
				objConstructor = () => undefined;

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal, nonTrelloProperty).returns(Promise.resolve({}));
				net = {
					put: putStub
				};

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should be call the network service anyway', function () {
				net.put.called.should.be.true;
			});
		});

		describe('setting a Trello property that cannot be set', function () {
			let newVal;
			let nonAutoProperty;

			beforeEach(function () {
				newVal = { newValProp: 'unsettableVal' };
				nonAutoProperty = 'nonAutoProp';
				args = {
					values: newVal,
					propName: nonAutoProperty
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						nonAutoProperty: { trelloType: null, isAutoProp: false, get: {} }
					}
				};

				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property that cannot be set but skipping validation', function () {
			let newVal;
			let nonAutoProperty;

			beforeEach(function () {
				newVal = { newValProp: 'unsettableVal' };
				nonAutoProperty = 'nonAutoProp';
				args = {
					values: newVal,
					propName: nonAutoProperty,
					skipValidation: true
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						nonAutoProperty: { trelloType: null, isAutoProp: false, get: {} }
					}
				};

				objConstructor = () => undefined;


				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal, nonAutoProperty).returns(Promise.resolve({}));
				net = {
					put: putStub
				};

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});

				obj.set(args);
			});

			it('should call the network service anyway', function () {
				net.put.called.should.be.true;
			});
		});

		describe('setting a Trello property that requires a sub-property without any sub-properties', function () {
			let newVal;
			let nonAllowEmptyProperty;

			beforeEach(function () {
				newVal = { newValProp: 'unsettableVal' };
				nonAllowEmptyProperty = 'nonAllowEmptyProperty';
				args = {
					values: newVal,
					propName: nonAllowEmptyProperty
				};

				objConstructor = () => undefined;

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						nonAllowEmptyProperty: {
							trelloType: null,
							isAutoProp: false,
							put: { allowEmpty: false }
						}
					}
				};
				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property', function () {
			let newVal;
			let allowEmptyProperty;

			beforeEach(function () {
				newVal = { newValProp: 'trelloPropertyVal' };
				allowEmptyProperty = 'allowEmptyProperty';
				args = {
					values: newVal,
					propName: allowEmptyProperty
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						allowEmptyProperty: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true }}
					}
				};

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal, allowEmptyProperty).returns(Promise.resolve({}));
				net = {
					put: putStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, allowEmptyProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property with a callback', function () {
			let newVal;
			let allowEmptyProperty;
			let success;

			beforeEach(function (done) {
				allowEmptyProperty = 'allowEmptyProperty';
				newVal = { newValProp: 'trelloPropertyVal' };
				args = {
					values: newVal,
					propName: allowEmptyProperty,
					callback: function(err) {
						if (err) {
							success = false;
						}
						else {
							success = true;
						}
						done();
					}
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						allowEmptyProperty: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true }}
					}
				};

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal, allowEmptyProperty).returns(Promise.resolve({}));
				net = {
					put: putStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, allowEmptyProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});

			it('should call the callback with success', function () {
				success.should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property with invalid sub-properties', function () {
			let newVal;

			beforeEach(function () {
				newVal = { newValProp: 'trelloPropertyVal' };
				args = {
					values: newVal,
					propName: 'property/invalidSubProperty'
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						property: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true, subProperty: { allowEmpty: true } }}
					}
				};

				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property with valid sub-properties', function () {
			let newVal;
			let property;
			let subProperty;

			beforeEach(function () {
				newVal = { newValProp: 'trelloPropertyVal' };
				property = 'property';
				subProperty = 'subProperty';
				args = {
					values: newVal,
					propName: property + '/' + subProperty
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						property: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true, allowNext: ['subProperty'], subProperty: { allowEmpty: true } }}
					}
				};

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal, property + '/' + subProperty).returns(Promise.resolve({}));
				net = {
					put: putStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, property + '/' + subProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property with an id', function () {
			let newVal;
			let subPropertyId;
			let allowIdProperty;

			beforeEach(function () {
				newVal = { newValProp: 'trelloPropertyVal' };
				subPropertyId = 'subPropId';
				allowIdProperty = 'allowIdProperty';
				args = {
					values: newVal,
					propName: allowIdProperty + '/' + subPropertyId
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						allowIdProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: false, allowId: [''] }}
					}
				};

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal, allowIdProperty + '/' + subPropertyId).returns(Promise.resolve({}));
				net = {
					put: putStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, allowIdProperty + '/' + subPropertyId).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property that allows post but not put', function () {
			let newVal;
			let postProperty;

			beforeEach(function () {
				newVal = { newValProp: 'trelloPropertyVal' };
				postProperty = 'postProperty';
				args = {
					values: newVal,
					propName: postProperty
				};

				propertyMapsStub.objectType = {
					props: {
						postProperty: { trelloType: null, isAutoProp: false, post: { allowEmpty: true }}
					}
				};

				const postStub = sinon.stub();
				postStub.withArgs(config, objType, id, newVal, postProperty).returns(Promise.resolve({}));
				net = {
					post: postStub,
					put: sinon.spy()
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should call the network service', function () {
				net.put.called.should.be.false; // eslint-disable-line no-unused-expressions
				net.post.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.post.calledWithExactly(config, objType, id, newVal, postProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property that allows both and preferring idempotence', function () {
			let newVal;
			let putAndPostProperty;

			beforeEach(function () {
				newVal = { newValProp: 'trelloPropVal' };
				putAndPostProperty = 'putAndPostProperty';
				args = {
					values: newVal,
					propName: putAndPostProperty
				};

				propertyMapsStub.objectType = {
					props: {
						putAndPostProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: true }, post: { allowEmpty: true }}
					}
				};

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal, putAndPostProperty).returns(Promise.resolve({}));
				net = {
					post: sinon.spy(),
					put: putStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should call put on the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.post.called.should.be.false; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, putAndPostProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property that allows both and preferring non-idempotence', function () {
			let newVal;
			let putAndPostProperty;

			beforeEach(function () {
				newVal = { newValProp: 'newPropVal' };
				putAndPostProperty = 'putAndPostProperty';
				args = {
					values: newVal,
					propName: putAndPostProperty,
					preferNonIdempotence: true
				};

				propertyMapsStub.objectType = {
					props: {
						putAndPostProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: true }, post: { allowEmpty: true }}
					}
				};

				const postStub = sinon.stub();
				postStub.withArgs(config, objType, id, newVal, putAndPostProperty).returns(Promise.resolve({}));
				net = {
					post: postStub,
					put: sinon.spy()
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.set(args);
			});

			it('should call put on the network service', function () {
				net.put.called.should.be.false; // eslint-disable-line no-unused-expressions
				net.post.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.post.calledWithExactly(config, objType, id, newVal, putAndPostProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});
	});

	describe('#delete()', function () {
		let obj;
		let args;

		describe('deleting a Trello entity that does not allow deletion', function () {
			beforeEach(function () {
				args = {};
				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {}
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.del(args).should.be.rejectedWith(Error);
			});
		});

		describe('deleting a Trello entity that does not allow deletion with a callback', function () {
			let success;

			beforeEach(function (done) {
				args = {
					callback: function (err) {
						if (err) {
							success = false;
						}
						else {
							success = true;
						}
						done();
					}
				};

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {}
				};

				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.del(args);
			});

			it('should call the callback with an error', function () {
				success.should.be.false; // eslint-disable-line no-unused-expressions
			});
		});

		describe('deleting a Trello entity that does not allow deletion but skipping validation', function () {
			beforeEach(function () {
				args = { skipValidation: true };
				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {}
				};
				objConstructor = () => undefined;

				const deleteStub = sinon.stub();
				deleteStub.withArgs(config, objType, id).returns(Promise.resolve({}));
				net = {
					del: deleteStub
				};

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.del(args);
			});

			it('should delete the entity anyway', function () {
				net.del.called.should.be.true;
			});
		});

		describe('deleting a Trello entity that allows deletion', function () {
			beforeEach(function () {
				args = {};

				propertyMapsStub.objectType = {
					allowDeletion: true,
					props: {}
				};

				const deleteStub = sinon.stub();
				deleteStub.withArgs(config, objType, id).returns(Promise.resolve({}));
				net = {
					del: deleteStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.del(args);
			});

			it('should call delete on the network service', function () {
				net.del.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.del.calledWithExactly(config, objType, id).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('deleting a Trello entity that allows deletion with a callback', function () {
			let success;

			beforeEach(function (done) {
				args = {
					callback: function (err) {
						if (err) {
							success = false;
						}
						else {
							success = true;
						}
						done();
					}
				};

				propertyMapsStub.objectType = {
					allowDeletion: true,
					props: {}
				};

				const deleteStub = sinon.stub();
				deleteStub.withArgs(config, objType, id).returns(Promise.resolve({}));
				net = {
					del: deleteStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.del(args);
			});

			it('should call delete on the network service', function () {
				net.del.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.del.calledWithExactly(config, objType, id).should.be.true; // eslint-disable-line no-unused-expressions
			});

			it('should call the callback with a successful response', function () {
				success.should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('deleting a Trello property that does not allow empty deletion', function () {
			let prop;

			beforeEach(function () {
				prop = 'disallowEmpty';
				args = { propName: prop };

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						disallowEmpty: {
							delete: { allowEmpty: false }
						}
					}
				};

				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.del(args).should.be.rejectedWith(Error);
			});
		});

		describe('deleting a Trello property that does not allow empty deletion with a callback', function () {
			let prop;
			let success;

			beforeEach(function (done) {
				prop = 'disallowEmpty';
				args = {
					propName: prop,
					callback: function (err) {
						if (err) {
							success = false;
						}
						else {
							success = true;
						}
						done();
					}
				};

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						disallowEmpty: {
							delete: { allowEmpty: false }
						}
					}
				};

				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.del(args);
			});

			it('should call the callback with an error', function () {
				success.should.be.false; // eslint-disable-line no-unused-expressions
			});
		});

		describe('deleting a Trello property that does not allow empty deletion but skipping validation', function () {
			let prop;

			beforeEach(function () {
				prop = 'disallowEmpty';
				args = { propName: prop, skipValidation: true };

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						disallowEmpty: {
							delete: { allowEmpty: false }
						}
					}
				};

				objConstructor = () => undefined;

				const deleteStub = sinon.stub();
				deleteStub.withArgs(config, objType, id, prop).returns(Promise.resolve({}));
				net = {
					del: deleteStub
				};

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});

				obj.del(args);
			});

			it('should call delete anyway', function () {
				net.del.called.should.be.true;
			});
		});

		describe('deleting a Trello property that does allow empty deletion', function () {
			let prop;

			beforeEach(function () {
				prop = 'allowEmptyDeletion';
				args = { propName: prop };

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						allowEmptyDeletion: {
							delete: { allowEmpty: true }
						}
					}
				};

				const deleteStub = sinon.stub();
				deleteStub.withArgs(config, objType, id, prop).returns(Promise.resolve({}));
				net = {
					del: deleteStub
				};

				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.del(args);
			});

			it('should call delete on the network service', function () {
				net.del.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.del.calledWithExactly(config, objType, id, prop).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('deleting a Trello property that does allow empty deletion with a callback', function () {
			let prop;
			let success;

			beforeEach(function (done) {
				prop = 'allowEmptyDeletion';
				args = {
					propName: prop,
					callback: function (err) {
						if (err) {
							success = false;
						}
						else {
							success = true;
						}
						done();
					}
				};

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						allowEmptyDeletion: {
							delete: { allowEmpty: true }
						}
					}
				};

				const deleteStub = sinon.stub();
				deleteStub.withArgs(config, objType, id, prop).returns(Promise.resolve({}));
				net = {
					del: deleteStub
				};
				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.del(args);
			});

			it('should call delete on the network service', function () {
				net.del.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.del.calledWithExactly(config, objType, id, prop).should.be.true; // eslint-disable-line no-unused-expressions
			});

			it('should call the callback with a successful response', function () {
				success.should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('deleting a Trello property with an id that does not allow deleting with id\'s', function () {
			let prop;
			let chain;

			beforeEach(function () {
				prop = 'disallowPropertyDeletion';
				chain = prop + '/thisIsTheId123';
				args = { propName: chain };

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						disallowPropertyDeletion: {
							delete: { allowEmpty: false, allowId: [] }
						}
					}
				};

				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
			});

			it('should be rejected', function () {
				obj.del(args).should.be.rejectedWith(Error);
			});
		});

		describe('deleting a Trello property with an id that does allow deleting with id\'s', function () {
			let prop;
			let chain;

			beforeEach(function () {
				prop = 'allowPropertyDeletion';
				chain = prop + '/thisIsTheId456';
				args = { propName: chain };

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						allowPropertyDeletion: {
							delete: { allowId: [''] }
						}
					}
				};

				const deleteStub = sinon.stub();
				deleteStub.withArgs(config, objType, id, chain).returns(Promise.resolve({}));
				net = {
					del: deleteStub
				};

				objConstructor = () => undefined;

				obj = trelloObj({
					maps: propertyMapsStub,
					objType,
					config,
					id,
					net,
					objConstructor
				});
				obj.del(args);
			});

			it('should call delete on the network service', function () {
				net.del.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.del.calledWithExactly(config, objType, id, chain).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});
	});
});
