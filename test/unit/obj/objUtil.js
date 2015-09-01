import chai from 'chai';
const should = chai.should();

import { adaptParams } from '../../../src/obj/objUtil';

describe('objUtil', () => {
	describe('#adaptParams()', () => {
		describe('when given no parameters', () => {
			it('should throw an error', () => {
				(() => adaptParams()).should.throw(Error);
			});
		});

		describe('when given one parameter', () => {
			it('should throw an error', () => {
				const body = JSON.stringify({});
				const response = { body };
				(() => adaptParams(response)).should.throw(Error);
			});
		});

		describe('when given a response without a body', () => {
			it('should throw an error', () => {
				const response = {};
				const objType = 'objType';
				(() => adaptParams(response, objType)).should.throw(Error);
			});
		});

		describe('when given a response with a body that is not a stringified JSON object', () => {
			it('should throw an error', () => {
				const body = {};
				const response = { body };
				const objType = 'objType';
				(() => adaptParams(response, objType)).should.throw(Error);
			});
		});

		describe('when given correct parameters', () => {
			describe('and calling the returned function with a non-object', () => {
				it('should throw an error', () => {
					const body = JSON.stringify({});
					const response = { body };
					const objType = 'objType';
					(() => adaptParams(response, objType)('not an object')).should.throw(Error);
				});
			});

			describe('and calling the returned function with an object', () => {
				it('return the correct object', () => {
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
