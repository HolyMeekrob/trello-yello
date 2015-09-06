const proxyquire = require('proxyquire');
import sinon from 'sinon';
import querystring from 'querystring';
import { clone } from 'ramda';

const httpsStub = { request: () => undefined };
const requestStub = sinon.stub(httpsStub, 'request');

const net = proxyquire('../../../src/net/networkService', { 'https': httpsStub });

describe('networkService', () => {
	let config;
	let key;
	let token;
	let version;
	let id;
	let hostname;
	let port;
	let method;
	let objType;
	let subObjType;
	let property;
	let write;
	let end;

	before(() => {
		key = 'key';
		token = 'token';
		version = 1;
		id = 'theId';
		hostname = 'api.trello.com';
		port = 443;
		objType = 'objectType';
		subObjType = 'subObjectType';
		property = 'property';

		config = {
			key,
			token,
			version
		};

		write = sinon.spy();
		end = sinon.spy();
		requestStub.returns({
			on: () => {
				return { write, end };
			}
		});
	});

	beforeEach(() => {
		requestStub.reset();
		write.reset();
		end.reset();
	});

	describe('#get()', () => {
		before(() => {
			method = 'GET';
		});

		describe('if config is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.get();
				}).should.throw(Error);
			});
		});

		describe('if objType is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.get(config);
				}).should.throw(Error);
			});
		});

		describe('without an id, parameters, or a sub-object type', () => {
			it('should call https with the expected values', () => {
				const url = `/${version}/${objType}?key=${key}&token=${token}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.get(config, objType);
				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});

		describe('without parameters or a sub-object type', () => {
			it('should call https with the expected values', () => {
				const queryString = querystring.stringify({
					key,
					token
				});

				const url = `/${version}/${objType}/${id}/?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.get(config, objType, id);
				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});

		describe('without an id or a sub-object type', () => {
			it('should call https with the expected values', () => {
				const parameters = {
					param1: 'hello',
					param2: 'there'
				};

				const urlData = clone(parameters);
				urlData.key = key;
				urlData.token = token;

				const queryString = querystring.stringify(urlData);

				const url = `/${version}/${objType}?${queryString}`;

				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.get(config, objType, undefined, parameters);
				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});

		describe('without an id or parameters', () => {
			it('should call https ignoring the sub-object type', () => {
				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}?${queryString}`;

				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.get(config, objType, undefined, undefined, subObjType);
				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});

		describe('without a sub-object type', () => {
			it('should call https with the expected values', () => {
				const parameters = {
					param1: 'firstParam',
					param2: 2,
					param3: true
				};

				const urlData = clone(parameters);
				urlData.key = key;
				urlData.token = token;

				const queryString = querystring.stringify(urlData);

				const url = `/${version}/${objType}/${id}/?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.get(config, objType, id, parameters);
				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});

		describe('without parameters', () => {
			it('should call https with the expected values', () => {
				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);

				const url =
					`/${version}/${objType}/${id}/${subObjType}?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.get(config, objType, id, undefined, subObjType);
				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});

		describe('without an id', () => {
			it('should call https ignoring the sub-object type', () => {
				const parameters = {
					param1: 1,
					param2: 'two',
					param3: false
				};

				const urlData = clone(parameters);
				urlData.key = key;
				urlData.token = token;

				const queryString = querystring.stringify(urlData);

				const url = `/${version}/${objType}?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.get(config, objType, undefined, parameters, subObjType);
				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});

		describe('without all arguments', () => {
			it('should call https with the expected values', () => {
				const parameters = {
					param1: 'firstParam',
					param2: 2,
					param3: true,
					param4: 'lastParam'
				};

				const urlData = clone(parameters);
				urlData.key = key;
				urlData.token = token;

				const queryString = querystring.stringify(urlData);

				const url =
					`/${version}/${objType}/${id}/${subObjType}?${queryString}`;

				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.get(config, objType, id, parameters, subObjType);
				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});
	});

	describe('#del()', () => {
		before(() => {
			method = 'DELETE';
		});

		describe('if config is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.del();
				}).should.throw(Error);
			});
		});

		describe('if an object type is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.del(config);
				}).should.throw(Error);
			});
		});

		describe('if an id is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.del(config, objType);
				}).should.throw(Error);
			});
		});

		describe('without a property', () => {
			it('should call https with the expected values', () => {
				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}/${id}/?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.del(config, objType, id);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});

		describe('with a property', () => {
			it('should call https with the expected values', () => {
				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}/${id}/${property}?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {}
				};

				net.del(config, objType, id, property);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.called.should.be.false;
				end.calledOnce.should.be.true;
			});
		});
	});

	describe('#post()', () => {
		before(() => {
			method = 'POST';
		});

		describe('if config is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.post();
				}).should.throw(Error);
			});
		});

		describe('if objType is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.post(config);
				}).should.throw(Error);
			});
		});

		describe('if post data is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.post(config, objType, id);
				}).should.throw(Error);
			});
		});

		describe('if id and property are missing', () => {
			it('should call https with the expected values', () => {
				const postData = {
					prop1: 'this',
					prop2: 'that'
				};
				const requestBody = JSON.stringify(postData);

				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {
						'Content-Type': 'application/json',
						'Content-Length': requestBody.length
					}
				};

				net.post(config, objType, undefined, postData);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.alwaysCalledWithExactly(requestBody).should.be.true;
				end.calledOnce.should.be.true;
			});
		});

		describe('if property is missing', () => {
			it('should call https with the expected values', () => {
				const postData = {
					prop1: 'string',
					prop2: 3,
					prop3: null
				};
				const requestBody = JSON.stringify(postData);

				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}/${id}/?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {
						'Content-Type': 'application/json',
						'Content-Length': requestBody.length
					}
				};

				net.post(config, objType, id, postData);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.alwaysCalledWithExactly(requestBody).should.be.true;
				end.calledOnce.should.be.true;
			});
		});

		describe('if id is missing', () => {
			it('should call https ignoring the property', () => {
				const postData = {
					prop1: 'one',
					prop2: 2,
					prop3: false
				};
				const requestBody = JSON.stringify(postData);

				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {
						'Content-Type': 'application/json',
						'Content-Length': requestBody.length
					}
				};

				net.post(config, objType, undefined, postData, property);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.alwaysCalledWithExactly(requestBody).should.be.true;
				end.calledOnce.should.be.true;
			});
		});

		describe('with all arguments', () => {
			it('should call https with the expected values', () => {
				const postData = {
					prop1: 'one',
					prop2: 2,
					prop3: true,
					prop4: null
				};
				const requestBody = JSON.stringify(postData);

				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}/${id}/${property}?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {
						'Content-Type': 'application/json',
						'Content-Length': requestBody.length
					}
				};

				net.post(config, objType, id, postData, property);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.alwaysCalledWithExactly(requestBody).should.be.true;
				end.calledOnce.should.be.true;
			});
		});
	});

	describe('#put()', () => {
		before(() => {
			method = 'PUT';
		});

		describe('if config is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.put();
				}).should.throw(Error);
			});
		});

		describe('if objType is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.put(config);
				}).should.throw(Error);
			});
		});

		describe('if put data is missing', () => {
			it('should throw an exception', () => {
				return (() => {
					return net.put(config, objType, id);
				}).should.throw(Error);
			});
		});

		describe('if id and property are missing', () => {
			it('should call https with the expected values', () => {
				const putData = {
					prop1: 'this',
					prop2: 'that'
				};
				const requestBody = JSON.stringify(putData);

				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {
						'Content-Type': 'application/json',
						'Content-Length': requestBody.length
					}
				};

				net.put(config, objType, undefined, putData);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.alwaysCalledWithExactly(requestBody).should.be.true;
				end.calledOnce.should.be.true;
			});
		});

		describe('if property is missing', () => {
			it('should call https with the expected values', () => {
				const putData = {
					prop1: 'string',
					prop2: 3,
					prop3: null
				};
				const requestBody = JSON.stringify(putData);

				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}/${id}/?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {
						'Content-Type': 'application/json',
						'Content-Length': requestBody.length
					}
				};

				net.put(config, objType, id, putData);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.alwaysCalledWithExactly(requestBody).should.be.true;
				end.calledOnce.should.be.true;
			});
		});

		describe('if id is missing', () => {
			it('should call https ignoring the property', () => {
				const putData = {
					prop1: 'one',
					prop2: 2,
					prop3: false
				};
				const requestBody = JSON.stringify(putData);

				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {
						'Content-Type': 'application/json',
						'Content-Length': requestBody.length
					}
				};

				net.put(config, objType, undefined, putData, property);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.alwaysCalledWithExactly(requestBody).should.be.true;
				end.calledOnce.should.be.true;
			});
		});

		describe('with all arguments', () => {
			it('should call https with the expected values', () => {
				const putData = {
					prop1: 'one',
					prop2: 2,
					prop3: true,
					prop4: null
				};
				const requestBody = JSON.stringify(putData);

				const urlData = {
					key,
					token
				};

				const queryString = querystring.stringify(urlData);
				const url = `/${version}/${objType}/${id}/${property}?${queryString}`;
				const expectedOptions = {
					hostname,
					port,
					path: url,
					method,
					headers: {
						'Content-Type': 'application/json',
						'Content-Length': requestBody.length
					}
				};

				net.put(config, objType, id, putData, property);

				requestStub.alwaysCalledWith(expectedOptions).should.be.true;
				write.alwaysCalledWithExactly(requestBody).should.be.true;
				end.calledOnce.should.be.true;
			});
		});
	});
});
