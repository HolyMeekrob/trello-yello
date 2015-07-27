const Promise = require('bluebird');
const sinon = require('sinon');
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

		describe('if network service is missing', function () {
			it('should throw an error', function () {
				return function () {
					return new Trello(key, token);
				}.should.throw(Error);
			});
		});
	});

	describe('#create()', function () {
		let netService;

		describe('creating an object type that does not exist', function () {
			beforeEach(function () {
				netService = {};
				trello = new Trello(key, token, netService);
			});

			it('should throw an exception', function () {
				return function () {
					return trello.create('imaginaryObjectType', {});
				}.should.throw(Error);
			});
		});

		describe('creating an object type that does not allow creation', function () {
			beforeEach(function () {
				netService = {};
				trello = new Trello(key, token, netService);
			});

			it('should throw an exception', function () {
				return function () {
					return trello.create('nonCreateableObjectType', {});
				}.should.throw(Error);
			});
		});

		describe('creating an object that does allow creation', function () {
			let initialVals;
			let objType;
			let expectedId;
			let newObj;

			beforeEach(function () {
				initialVals = { name: 'New Name' };
				objType = 'createableObjectType';
				expectedId = 'new id';


				const postStub = sinon.stub();
				postStub.onFirstCall().returns(
					Promise.resolve({
						body: JSON.stringify({
							id: expectedId
						})
					})
				);
				netService = {
					post: postStub
				};
				trello = new Trello(key, token, netService);
				newObj = trello.create(objType, initialVals);
			});

			it('should call the network service', function () {
				netService.post.calledWithMatch( // eslint-disable-line no-unused-expressions
						sinon.match.object, sinon.match.same(objType),
						sinon.match.same(null), sinon.match.same(initialVals)).should.be.true;
			});

			it('should create a new Trello object with the correct data', function() {
				newObj.then(obj => {
					return obj.get('id');
				}).should.eventually.become(expectedId);
			});
		});
	});

	describe('#get()', function () {
		let netService;

		beforeEach(function () {
			netService = {};
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

	describe('#search()', function () {
		let netService;
		let expectedSearchResults;

		beforeEach(function () {
			expectedSearchResults = { results: 'results' };

			let getStub = sinon.stub();
			getStub.returns(
				Promise.resolve({
					body: JSON.stringify(expectedSearchResults)
				})
			);

			netService = { get: getStub };

			trello = new Trello(key, token, netService);
		});

		it('should call the network service with the search query', function () {
			trello.search('query');
			netService.get.called.should.be.true; // eslint-disable-line no-unused-expressions
		});

		it('should return the parsed search results', function () {
			let results = trello.search('query');
			results.should.eventually.become(expectedSearchResults);
		});
	});
});
