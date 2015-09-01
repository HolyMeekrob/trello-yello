import trelloObj from '../../src/trelloObj';
import Promise from 'bluebird';
import sinon from 'sinon';
import chai from 'chai';
const should = chai.should();
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

describe('trelloObj', () => {
	let net;
	let config;
	let id;
	let objType;
	let propertyMapsStub;
	let objConstructor;

	before(() => {
		config = {};
		id = 'id';
		objType = 'objectType';
	});

	describe('#constructor()', () => {
		beforeEach(() => {
			propertyMapsStub = {};

			net = {
				get: sinon.spy(),
				post: sinon.spy(),
				put: sinon.spy()
			};
		});

		describe('if objType is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return trelloObj();
				}).should.throw(Error);
			});
		});

		describe('if config is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return trelloObj({
						maps: propertyMapsStub,
						objType
					});
				}).should.throw(Error);
			});
		});

		describe('if id is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					trelloObj({
						maps: propertyMapsStub,
						objType,
						config
					});
				}).should.throw(Error);
			});
		});

		describe('if net is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return trelloObj({
						maps: propertyMapsStub,
						objType,
						config,
						id
					});
				}).should.throw(Error);
			});
		});

		describe('if object type is invalid', () => {
			it('should throw an error', () => {
				return (() => {
					return trelloObj({
						maps: propertyMapsStub,
						objType,
						config,
						id,
						net
					});
				}).should.throw(Error);
			});
		});

		describe('if constructor is missing', () => {
			beforeEach(() => {
				propertyMapsStub.objectType = {
					props: {}
				};
			});

			it('should throw an error', () => {
				return (() => {
					return trelloObj({
						maps: propertyMapsStub,
						objType,
						config,
						id,
						net
					});
				}).should.throw(Error);
			});
		});

		describe('if constructor is not a function', () => {
			beforeEach(() => {
				propertyMapsStub.objectType = {
					props: {}
				};
				objConstructor = {};
			});

			it('should throw an error', () => {
				return (() => {
					return trelloObj({
						maps: propertyMapsStub,
						objType,
						config,
						id,
						net,
						objConstructor
					});
				}).should.throw(Error);
			});
		});

		describe('if all arguments are correct', () => {
			beforeEach(() => {
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

			it('should not call the network service', () => {
				net.get.called.should.be.false;
			});
		});
	});

	describe('#get()', () => {
		describe('getting a non-gettable Trello property', () => {
			let obj;
			let nonGettableProperty;

			beforeEach(() => {
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

			it('should be rejected', () => {
				obj.get({ propName: nonGettableProperty }).should.be.rejectedWith(Error);
			});
		});

		describe('getting a non-Trello property', () => {
			let obj;
			let unexpectedProperty;
			objConstructor = () => undefined;

			beforeEach(() => {
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

			it('should be rejected', () => {
				obj.get({ propName: unexpectedProperty }).should.be.rejectedWith(Error);
			});
		});

		describe('getting a non-Trello property with a callback', () => {
			let obj;
			let unexpectedProperty;
			let thrownErr;

			beforeEach((done) => {
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
					callback (err) {
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

			it('should call the callback with an error', () => {
				should.exist(thrownErr);
				thrownErr.should.be.an.instanceof(Error);
			});
		});

		describe('getting a non-Trello property but skipping validation', () => {
			let obj;
			let nonTrelloProp;
			let expectedValue;
			objConstructor = () => undefined;

			beforeEach(() => {
				nonTrelloProp = 'nonTrelloProp';
				expectedValue = 'expected value';

				const getStub = sinon.stub();
				getStub.withArgs(config, objType, id, {}, nonTrelloProp).returns(
					Promise.resolve({
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

			it('should retrieve the value anyway', () => {
				obj.get({ propName: nonTrelloProp, skipValidation: true }).should.eventually.become(expectedValue);
			});
		});

		describe('and the network resolves without error', () => {
			let obj;
			let autoProperty;
			let nonAutoProperty;
			let nonAutoSubProperty;
			let expectedDefaultValue;
			let expectedNonDefaultSubValue;
			let expectedNonDefaultValue;
			let invalidValue;

			beforeEach(() => {
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
					Promise.resolve({
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

			it('should update the object with the expected value on the default property', () => {
				obj.get({ propName: autoProperty }).should.eventually.become(expectedDefaultValue);
				obj.get({ propName: nonAutoSubProperty }).should.eventually.not.become(invalidValue);
				obj.get({ propName: nonAutoProperty }).should.eventually.not.become(invalidValue);
			});

			it('should update the object with the expected value on the non-default sub-property', () => {
				obj.get({ propName: nonAutoSubProperty }).should.eventually.be.an('array');
				obj.get({ propName: nonAutoSubProperty }).should.eventually.have.length(1);
				obj.get({ propName: nonAutoSubProperty }).then((arr) => arr[0])
						.should.eventually.become(expectedNonDefaultSubValue);
			});

			it('should update the object with the expected value on the non-default property', () => {
				obj.get({ propName: nonAutoProperty }).should.eventually.become(expectedNonDefaultValue);
			});
		});

		describe('and the network resolves without error using a callback', () => {
			let obj;
			let autoProperty;
			let expectedValue;
			let actualValue;

			beforeEach((done) => {
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
					callback (err, response) {
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

			it('should update the object with the expected value on the default property', () => {
				actualValue.should.equal(expectedValue);
			});
		});
	});

	describe('#set()', () => {
		let obj;
		let args;

		describe('setting the object on a non-settable object type', () => {
			let newVal;

			beforeEach(() => {
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

			it('should be rejected', () => {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting the object on a non-settable object type but skipping validation', () => {
			let newVal;

			beforeEach(() => {
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

			it('should be call the network service anyway', () => {
				net.put.called.should.be.true;
			});
		});

		describe('setting the object on a non-settable object type with a callback', () => {
			let newVal;
			let success;

			beforeEach((done) => {
				newVal = { value: 'newVal' };
				args = {
					values: newVal,
					callback (err) {
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

			it('should call the callback with an error', () => {
				success.should.be.false;
			});
		});

		describe('setting the object on a settable object type', () => {
			let newVal;

			beforeEach(() => {
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

			it('should call the network service', () => {
				net.put.called.should.be.true;
				net.put.calledWithExactly(config, objType, id, newVal).should.be.true;
			});
		});

		describe('setting the object on a settable object type with a callback', () => {
			let newVal;
			let success;

			beforeEach((done) => {
				newVal = { value: 'newVal' };
				args = {
					values: newVal,
					callback (err) {
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

			it('should call the network service', () => {
				net.put.called.should.be.true;
				net.put.calledWithExactly(config, objType, id, newVal).should.be.true;
			});

			it('should call the callback with success', () => {
				success.should.be.true;
			});
		});

		describe('setting a property that isn\'t a Trello property', () => {
			let nonTrelloProperty;
			let newVal;

			beforeEach(() => {
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

			it('should be rejected', () => {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting a property that isn\'t a Trello property but skipping validation', () => {
			let nonTrelloProperty;
			let newVal;

			beforeEach(() => {
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

			it('should be call the network service anyway', () => {
				net.put.called.should.be.true;
			});
		});

		describe('setting a Trello property that cannot be set', () => {
			let newVal;
			let nonAutoProperty;

			beforeEach(() => {
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

			it('should be rejected', () => {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property that cannot be set but skipping validation', () => {
			let newVal;
			let nonAutoProperty;

			beforeEach(() => {
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

			it('should call the network service anyway', () => {
				net.put.called.should.be.true;
			});
		});

		describe('setting a Trello property that requires a sub-property without any sub-properties', () => {
			let newVal;
			let nonAllowEmptyProperty;

			beforeEach(() => {
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

			it('should be rejected', () => {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property', () => {
			let newVal;
			let allowEmptyProperty;

			beforeEach(() => {
				newVal = { newValProp: 'trelloPropertyVal' };
				allowEmptyProperty = 'allowEmptyProperty';
				args = {
					values: newVal,
					propName: allowEmptyProperty
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						allowEmptyProperty: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true } }
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

			it('should call the network service', () => {
				net.put.called.should.be.true;
				net.put.calledWithExactly(config, objType, id, newVal, allowEmptyProperty).should.be.true;
			});
		});

		describe('setting a Trello property with a callback', () => {
			let newVal;
			let allowEmptyProperty;
			let success;

			beforeEach((done) => {
				allowEmptyProperty = 'allowEmptyProperty';
				newVal = { newValProp: 'trelloPropertyVal' };
				args = {
					values: newVal,
					propName: allowEmptyProperty,
					callback (err) {
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
						allowEmptyProperty: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true } }
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

			it('should call the network service', () => {
				net.put.called.should.be.true;
				net.put.calledWithExactly(config, objType, id, newVal, allowEmptyProperty).should.be.true;
			});

			it('should call the callback with success', () => {
				success.should.be.true;
			});
		});

		describe('setting a Trello property with invalid sub-properties', () => {
			let newVal;

			beforeEach(() => {
				newVal = { newValProp: 'trelloPropertyVal' };
				args = {
					values: newVal,
					propName: 'property/invalidSubProperty'
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						property: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true, subProperty: { allowEmpty: true } } }
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

			it('should be rejected', () => {
				obj.set(args).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property with valid sub-properties', () => {
			let newVal;
			let property;
			let subProperty;

			beforeEach(() => {
				newVal = { newValProp: 'trelloPropertyVal' };
				property = 'property';
				subProperty = 'subProperty';
				args = {
					values: newVal,
					propName: `${property}/${subProperty}`
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						property: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true, allowNext: ['subProperty'], subProperty: { allowEmpty: true } } }
					}
				};

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal, `${property}/${subProperty}`).returns(Promise.resolve({}));
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

			it('should call the network service', () => {
				net.put.called.should.be.true;
				net.put.calledWithExactly(config, objType, id, newVal, `${property}/${subProperty}`).should.be.true;
			});
		});

		describe('setting a Trello property with an id', () => {
			let newVal;
			let subPropertyId;
			let allowIdProperty;

			beforeEach(() => {
				newVal = { newValProp: 'trelloPropertyVal' };
				subPropertyId = 'subPropId';
				allowIdProperty = 'allowIdProperty';
				args = {
					values: newVal,
					propName: `${allowIdProperty}/${subPropertyId}`
				};

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						allowIdProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: false, allowId: [''] } }
					}
				};

				const putStub = sinon.stub();
				putStub.withArgs(config, objType, id, newVal, `${allowIdProperty}/${subPropertyId}`).returns(Promise.resolve({}));
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

			it('should call the network service', () => {
				net.put.called.should.be.true;
				net.put.calledWithExactly(config, objType, id, newVal, `${allowIdProperty}/${subPropertyId}`).should.be.true;
			});
		});

		describe('setting a Trello property that allows post but not put', () => {
			let newVal;
			let postProperty;

			beforeEach(() => {
				newVal = { newValProp: 'trelloPropertyVal' };
				postProperty = 'postProperty';
				args = {
					values: newVal,
					propName: postProperty
				};

				propertyMapsStub.objectType = {
					props: {
						postProperty: { trelloType: null, isAutoProp: false, post: { allowEmpty: true } }
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

			it('should call the network service', () => {
				net.put.called.should.be.false;
				net.post.called.should.be.true;
				net.post.calledWithExactly(config, objType, id, newVal, postProperty).should.be.true;
			});
		});

		describe('setting a Trello property that allows both and preferring idempotence', () => {
			let newVal;
			let putAndPostProperty;

			beforeEach(() => {
				newVal = { newValProp: 'trelloPropVal' };
				putAndPostProperty = 'putAndPostProperty';
				args = {
					values: newVal,
					propName: putAndPostProperty
				};

				propertyMapsStub.objectType = {
					props: {
						putAndPostProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: true }, post: { allowEmpty: true } }
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

			it('should call put on the network service', () => {
				net.put.called.should.be.true;
				net.post.called.should.be.false;
				net.put.calledWithExactly(config, objType, id, newVal, putAndPostProperty).should.be.true;
			});
		});

		describe('setting a Trello property that allows both and preferring non-idempotence', () => {
			let newVal;
			let putAndPostProperty;

			beforeEach(() => {
				newVal = { newValProp: 'newPropVal' };
				putAndPostProperty = 'putAndPostProperty';
				args = {
					values: newVal,
					propName: putAndPostProperty,
					preferNonIdempotence: true
				};

				propertyMapsStub.objectType = {
					props: {
						putAndPostProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: true }, post: { allowEmpty: true } }
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

			it('should call put on the network service', () => {
				net.put.called.should.be.false;
				net.post.called.should.be.true;
				net.post.calledWithExactly(config, objType, id, newVal, putAndPostProperty).should.be.true;
			});
		});
	});

	describe('#delete()', () => {
		let obj;
		let args;

		describe('deleting a Trello entity that does not allow deletion', () => {
			beforeEach(() => {
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

			it('should be rejected', () => {
				obj.del(args).should.be.rejectedWith(Error);
			});
		});

		describe('deleting a Trello entity that does not allow deletion with a callback', () => {
			let success;

			beforeEach((done) => {
				args = {
					callback (err) {
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

			it('should call the callback with an error', () => {
				success.should.be.false;
			});
		});

		describe('deleting a Trello entity that does not allow deletion but skipping validation', () => {
			beforeEach(() => {
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

			it('should delete the entity anyway', () => {
				net.del.called.should.be.true;
			});
		});

		describe('deleting a Trello entity that allows deletion', () => {
			beforeEach(() => {
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

			it('should call delete on the network service', () => {
				net.del.called.should.be.true;
				net.del.calledWithExactly(config, objType, id).should.be.true;
			});
		});

		describe('deleting a Trello entity that allows deletion with a callback', () => {
			let success;

			beforeEach((done) => {
				args = {
					callback (err) {
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

			it('should call delete on the network service', () => {
				net.del.called.should.be.true;
				net.del.calledWithExactly(config, objType, id).should.be.true;
			});

			it('should call the callback with a successful response', () => {
				success.should.be.true;
			});
		});

		describe('deleting a Trello property that does not allow empty deletion', () => {
			let prop;

			beforeEach(() => {
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

			it('should be rejected', () => {
				obj.del(args).should.be.rejectedWith(Error);
			});
		});

		describe('deleting a Trello property that does not allow empty deletion with a callback', () => {
			let prop;
			let success;

			beforeEach((done) => {
				prop = 'disallowEmpty';
				args = {
					propName: prop,
					callback (err) {
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

			it('should call the callback with an error', () => {
				success.should.be.false;
			});
		});

		describe('deleting a Trello property that does not allow empty deletion but skipping validation', () => {
			let prop;

			beforeEach(() => {
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

			it('should call delete anyway', () => {
				net.del.called.should.be.true;
			});
		});

		describe('deleting a Trello property that does allow empty deletion', () => {
			let prop;

			beforeEach(() => {
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

			it('should call delete on the network service', () => {
				net.del.called.should.be.true;
				net.del.calledWithExactly(config, objType, id, prop).should.be.true;
			});
		});

		describe('deleting a Trello property that does allow empty deletion with a callback', () => {
			let prop;
			let success;

			beforeEach((done) => {
				prop = 'allowEmptyDeletion';
				args = {
					propName: prop,
					callback (err) {
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

			it('should call delete on the network service', () => {
				net.del.called.should.be.true;
				net.del.calledWithExactly(config, objType, id, prop).should.be.true;
			});

			it('should call the callback with a successful response', () => {
				success.should.be.true;
			});
		});

		describe('deleting a Trello property with an id that does not allow deleting with id\'s', () => {
			let prop;
			let chain;

			beforeEach(() => {
				prop = 'disallowPropertyDeletion';
				chain = `${prop}/thisIsTheId123`;
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

			it('should be rejected', () => {
				obj.del(args).should.be.rejectedWith(Error);
			});
		});

		describe('deleting a Trello property with an id that does allow deleting with id\'s', () => {
			let prop;
			let chain;

			beforeEach(() => {
				prop = 'allowPropertyDeletion';
				chain = `${prop}/thisIsTheId456`;
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

			it('should call delete on the network service', () => {
				net.del.called.should.be.true;
				net.del.calledWithExactly(config, objType, id, chain).should.be.true;
			});
		});
	});
});
