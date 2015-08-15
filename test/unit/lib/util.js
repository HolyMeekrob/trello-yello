import chai from 'chai';
const should = chai.should(); // eslint-disable-line no-unused-vars

import { hasValidPath } from '../../../src/util';

describe('util', function () {
	describe('#hasValidPath()', function() {
		let prop;
		let path;

		describe('when given an empty path', function() {
			beforeEach(function () {
				path = [];
			});

			describe('if the property does not have an allowEmpty value', function() {
				beforeEach(function () {
					prop = {};
				});

				it('should return false', function () {
					hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
				});
			});

			describe('if the property has a false allowEmpty', function () {
				beforeEach(function () {
					prop = { allowEmpty: false };
				});

				it('should return false', function () {
					hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
				});
			});

			describe('if the property has a true allowEmpty', function () {
				beforeEach(function () {
					prop = { allowEmpty: true };
				});

				it('should return true', function () {
					hasValidPath(prop, path).should.be.true; //eslint-disable-line no-unused-expressions
				});
			});
		});

		describe('when the next element in the path is a subproperty', function () {
			describe('if the property does not have an allowNext array', function () {
				beforeEach(function () {
					path = ['subProp'];
					prop = { subProp: { allowEmpty: true }};
				});

				it('should return false', function () {
					hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
				});
			});

			describe('if the property does not have a matching allowNext element', function () {
				beforeEach(function () {
					path = ['subProp'];
					prop = { allowNext: ['unrelatedProp'], subProp: { allowEmpty: true }};
				});

				it('should return false', function () {
					hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
				});
			});

			describe('if the property does have a matching allowNext element', function () {
				describe('but the subProperty does not have a true allowEmpty property', function () {
					beforeEach(function () {
						path = ['subProp'];
						prop = { allowNext: ['unrelatedProp'], subProp: { allowEmpty: false }};
					});

					it('should return false', function () {
						hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
					});
				});

				describe('and the subProperty has a true allowEmpty property', function () {
					beforeEach(function () {
						path = ['subProp'];
						prop = { allowNext: ['subProp'], subProp: { allowEmpty: true }};
					});

					it('should return true', function () {
						hasValidPath(prop, path).should.be.true; //eslint-disable-line no-unused-expressions
					});
				});
			});
		});

		describe('when the next element in the path is an id', function () {
			describe('and it is the last element in the path', function () {
				describe('and the property does not have an allowId value', function () {
					beforeEach(function () {
						path = ['propId'];
						prop = { };
					});

					it('should return false', function () {
						hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
					});
				});

				describe('and the property has an empty allowId array', function () {
					beforeEach(function () {
						path = ['propId'];
						prop = { allowId: [] };
					});

					it('should return false', function () {
						hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
					});
				});

				describe('and the property does not have an empty string in its allowId array', function () {
					beforeEach(function () {
						path = ['propId'];
						prop = { allowId: ['someOtherProp'] };
					});

					it('should return false', function () {
						hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
					});
				});

				describe('and the property has an empty string in its allowId array', function () {
					beforeEach(function () {
						path = ['propId'];
						prop = { allowId: [''] };
					});

					it('should return true', function () {
						hasValidPath(prop, path).should.be.true; //eslint-disable-line no-unused-expressions
					});
				});
			});
			describe('and there is a subProperty following it in the path', function () {
				describe('and the property does not have an allowId value', function () {
					beforeEach(function () {
						path = ['propId', 'subProp'];
						prop = { subProp: { allowEmpty: true }};
					});

					it('should return false', function () {
						hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
					});
				});

				describe('and the property has an empty allowId array', function () {
					beforeEach(function () {
						path = ['propId', 'subProp'];
						prop = { allowId: [] };
					});

					it('should return false', function () {
						hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
					});
				});

				describe('and the allowId array does not include the given subProperty', function () {
					beforeEach(function () {
						path = ['propId', 'missingSubProp'];
						prop = { allowId: ['subProp'] };
					});

					it('should return false', function () {
						hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
					});
				});

				describe('and the allowId includes a valid subProperty', function () {
					describe('but the subProperty does not have a true allowEmpty value', function () {
						beforeEach(function () {
							path = ['propId', 'subProp'];
							prop = { allowId: ['subProp'], subProp: { allowEmpty: false }};
						});

						it('should return false', function () {
							hasValidPath(prop, path).should.be.false; //eslint-disable-line no-unused-expressions
						});
					});

					describe('and the subProperty has a true allowEmpty value', function () {
						beforeEach(function () {
							path = ['propId', 'subProp'];
							prop = { allowId: ['subProp'], subProp: { allowEmpty: true }};
						});

						it('should return true', function () {
							hasValidPath(prop, path).should.be.true; //eslint-disable-line no-unused-expressions
						});
					});
				});
			});
		});
	});
});
