import chai from 'chai';
const should = chai.should(); // eslint-disable-line no-unused-vars

import { adaptParams } from '../../../src/obj/objUtil';

describe('objUtil', function () {
	describe('#adaptParams()', function () {
		describe('when given no parameters', function () {
			it('should throw an error', function () {
				(() => adaptParams()).should.throw(Error);
			});
		});

		describe('when given one parameter', function () {
			it('should throw an error', function () {
				const body = JSON.stringify({});
				const response = { body };
				(() => adaptParams(response)).should.throw(Error);
			});
		});

		describe('when given a response without a body', function () {
			it('should throw an error', function () {
				const response = {};
				const objType = 'objType';
				(() => adaptParams(response, objType)).should.throw(Error);
			});
		});

		describe('when given a response with a body that is not a stringified JSON object', function () {
			it('should throw an error', function () {
				const body = {};
				const response = { body };
				const objType = 'objType';
				(() => adaptParams(response, objType)).should.throw(Error);
			});
		});

		describe('when given correct parameters', function () {
			describe('and calling the returned function with a non-object', function () {
				it('should throw an error', function () {
					const body = JSON.stringify({});
					const response = { body };
					const objType = 'objType';
					(() => adaptParams(response, objType)('not an object')).should.throw(Error);
				});
			});

			describe('and calling the returned function with an object', function () {
				it('return the correct object', function () {
					const body = JSON.stringify({ id: 'id' });
					const response = { body };
					const objType = 'objType';
					const objArg = { testProp: 'prop', objType: 'oldObjType' };
					const returnVal = adaptParams(response, objType)(objArg);
					returnVal.testProp.should.equal('prop');
					returnVal.objType.should.equal(objType);
					returnVal.id.should.equal('id');
				});
			});
		});
	});
});
