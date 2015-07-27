const TrelloObj = require('../../../lib/TrelloObj');
const Promise = require('bluebird');
const sinon = require('sinon');
const chai = require('chai');
const should = chai.should(); // eslint-disable-line no-unused-vars
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('TrelloObj', function () {
	'use strict';

	let net;
	let config;
	let id;
	let objType;
	let altType;
	let propertyMapsStub;

	before(function () {
		config = {};
		id = 'id';
		objType = 'objectType';
		altType = 'alternateType';
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
			it('should throw an error', function () {
				return function () {
					return new TrelloObj(propertyMapsStub, objType, config, id, net);
				}.should.throw(Error);
			});
		});

		describe('if all arguments are correct', function () {
			beforeEach(function () {
				propertyMapsStub.objectType = {
					props: {}
				};
				let trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net); // eslint-disable-line no-unused-vars
			});

			it('should not call the network service', function () {
				net.get.called.should.be.false; // eslint-disable-line no-unused-expressions
			});
		});
	});

	describe('#get()', function () {
		let unexpectedProperty;
		let expectedDefaultValue;
		let expectedNonDefaultSubValue;
		let expectedNonDefaultValue;
		let invalidValue;
		let nonGettableProperty;

		before(function () {
			unexpectedProperty = 'unexpectedProperty';
			nonGettableProperty = 'nonGettableProperty';
			expectedDefaultValue = 'edVal';
			expectedNonDefaultSubValue = { id: 'endsvId' };
			expectedNonDefaultValue = { id: 'endvId' };
			invalidValue = 'invalidValue';
		});

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
			let autoProperty;
			let nonAutoProperty;
			let nonAutoSubProperty;

			beforeEach(function () {
				autoProperty = 'autoProperty';
				nonAutoProperty = 'nonAutoProperty';
				nonAutoSubProperty = 'nonAutoSubProperty';

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
			let newVal;

			beforeEach(function () {
				newVal = { value: 'newVal' };
				trelloObj = new TrelloObj(propertyMapsStub, altType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal).should.be.rejectedWith(Error);
			});
		});

		describe('setting the object on a settable object type', function () {
			let newVal;

			beforeEach(function () {
				newVal = { value: 'newVal' };

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {}
				};

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
			let nonTrelloProperty;
			let newVal;

			beforeEach(function () {
				nonTrelloProperty = 'nonTrelloProperty';
				newVal = 'nonTrelloPropertyVal';

				propertyMapsStub.objectType = {
					props: {}
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal, nonTrelloProperty).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property that cannot be set', function () {
			let newVal;
			let nonAutoProperty;

			beforeEach(function () {
				newVal = 'unsettableVal';
				nonAutoProperty = 'nonAutoProp';

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						nonAutoProperty: { trelloType: null, isAutoProp: false, get: {} }
					}
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal, nonAutoProperty).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property that requires a sub-property without any sub-properties', function () {
			let newVal;
			let nonAllowEmptyProperty;

			beforeEach(function () {
				newVal = 'unsettableVal';
				nonAllowEmptyProperty = 'nonAllowEmptyProperty';

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
				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal, nonAllowEmptyProperty).should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property', function () {
			let newVal;
			let allowEmptyProperty;

			beforeEach(function () {
				newVal = 'trelloPropertyVal';
				allowEmptyProperty = 'allowEmptyProperty';

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						allowEmptyProperty: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true, subProperty: { allowEmpty: true } }}
					}
				};

				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, allowEmptyProperty);
			});

			it('should call the network service', function () {
				net.put.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.put.calledWithExactly(config, objType, id, newVal, allowEmptyProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('setting a Trello property with invalid sub-properties', function () {
			let newVal;

			beforeEach(function () {
				newVal = 'trelloPropertyVal';

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						property: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true, subProperty: { allowEmpty: true } }}
					}
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.set(newVal, 'property/invalidSubProperty').should.be.rejectedWith(Error);
			});
		});

		describe('setting a Trello property with valid sub-properties', function () {
			let newVal;
			let property;
			let subProperty;

			beforeEach(function () {
				newVal = 'trelloPropertyVal';
				property = 'property';
				subProperty = 'subProperty';

				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						property: { trelloType: null, isAutoProp: true, get: {}, put: { allowEmpty: true, allowNext: ['subProperty'], subProperty: { allowEmpty: true } }}
					}
				};
				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, property + '/' + subProperty);
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
				newVal = 'trelloPropertyVal';
				subPropertyId = 'subPropId';
				allowIdProperty = 'allowIdProperty';
				propertyMapsStub.objectType = {
					allowEmptyPut: true,
					props: {
						allowIdProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: false, allowId: [''] }}
					}
				};
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
			let newVal;
			let postProperty;

			beforeEach(function () {
				newVal = 'trelloPropertyVal';
				postProperty = 'postProperty';

				propertyMapsStub.objectType = {
					props: {
						postProperty: { trelloType: null, isAutoProp: false, post: { allowEmpty: true }}
					}
				};

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
			let newVal;
			let putAndPostProperty;

			beforeEach(function () {
				newVal = 'trelloPropVal';
				putAndPostProperty = 'putAndPostProperty';

				propertyMapsStub.objectType = {
					props: {
						putAndPostProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: true }, post: { allowEmpty: true }}
					}
				};
				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, putAndPostProperty);
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
				newVal = 'newPropVal';
				putAndPostProperty = 'putAndPostProperty';

				propertyMapsStub.objectType = {
					props: {
						putAndPostProperty: { trelloType: null, isAutoProp: false, put: { allowEmpty: true }, post: { allowEmpty: true }}
					}
				};

				net = {
					get: sinon.spy(),
					post: sinon.spy(),
					put: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.set(newVal, putAndPostProperty, true);
			});

			it('should call put on the network service', function () {
				net.put.called.should.be.false; // eslint-disable-line no-unused-expressions
				net.post.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.post.calledWithExactly(config, objType, id, newVal, putAndPostProperty).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});
	});

	describe('#delete()', function () {
		let trelloObj;

		describe('deleting a Trello entity that does not allow deletion', function () {
			beforeEach(function () {
				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {}
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.delete().should.be.rejectedWith(Error);
			});
		});

		describe('deleting a Trello entity that allows deletion', function () {
			beforeEach(function () {
				propertyMapsStub.objectType = {
					allowDeletion: true,
					props: {}
				};

				net = {
					delete: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.delete();
			});

			it('should call delete on the network service', function () {
				net.delete.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.delete.calledWithExactly(config, objType, id).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('deleting a Trello property that does not allow empty deletion', function () {
			let prop;

			beforeEach(function () {
				prop = 'disallowEmpty';
				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						disallowEmpty: {
							delete: { allowEmpty: false }
						}
					}
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.delete(prop).should.be.rejectedWith(Error);
			});
		});

		describe('deleting a Trello property that does allow empty deletion', function () {
			let prop;

			beforeEach(function () {
				prop = 'allowEmptyDeletion';
				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						allowEmptyDeletion: {
							delete: { allowEmpty: true }
						}
					}
				};

				net = {
					delete: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.delete(prop);
			});

			it('should call delete on the network service', function () {
				net.delete.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.delete.calledWithExactly(config, objType, id, prop).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});

		describe('deleting a Trello property with an id that does not allow deleting with id\'s', function () {
			let prop;
			let chain;

			beforeEach(function () {
				prop = 'disallowPropertyDeletion';
				chain = prop + '/thisIsTheId123';

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						disallowPropertyDeletion: {
							delete: { allowEmpty: false, allowId: [] }
						}
					}
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
			});

			it('should be rejected', function () {
				trelloObj.delete(chain).should.be.rejectedWith(Error);
			});
		});

		describe('deleting a Trello property with an id that does allow deleting with id\'s', function () {
			let prop;
			let chain;

			beforeEach(function () {
				prop = 'allowPropertyDeletion';
				chain = prop + '/thisIsTheId456';

				propertyMapsStub.objectType = {
					allowDeletion: false,
					props: {
						allowPropertyDeletion: {
							delete: { allowId: [''] }
						}
					}
				};

				net = {
					delete: sinon.spy()
				};

				trelloObj = new TrelloObj(propertyMapsStub, objType, config, id, net);
				trelloObj.delete(chain);
			});

			it('should call delete on the network service', function () {
				net.delete.called.should.be.true; // eslint-disable-line no-unused-expressions
				net.delete.calledWithExactly(config, objType, id, chain).should.be.true; // eslint-disable-line no-unused-expressions
			});
		});
	});
});
