import chai from 'chai';
const should = chai.should();

import { hasValidPath } from '../../src/util';

describe('util', () => {
	describe('#hasValidPath()', () => {
		let prop;
		let path;

		describe('when given an empty path', () => {
			beforeEach(() => {
				path = [];
			});

			describe('if the property does not have an allowEmpty value', () => {
				beforeEach(() => {
					prop = {};
				});

				it('should return false', () => {
					hasValidPath(prop, path).should.be.false;
				});
			});

			describe('if the property has a false allowEmpty', () => {
				beforeEach(() => {
					prop = { allowEmpty: false };
				});

				it('should return false', () => {
					hasValidPath(prop, path).should.be.false;
				});
			});

			describe('if the property has a true allowEmpty', () => {
				beforeEach(() => {
					prop = { allowEmpty: true };
				});

				it('should return true', () => {
					hasValidPath(prop, path).should.be.true;
				});
			});
		});

		describe('when the next element in the path is a subproperty', () => {
			describe('if the property does not have an allowNext array', () => {
				beforeEach(() => {
					path = ['subProp'];
					prop = { subProp: { allowEmpty: true } };
				});

				it('should return false', () => {
					hasValidPath(prop, path).should.be.false;
				});
			});

			describe('if the property does not have a matching allowNext element', () => {
				beforeEach(() => {
					path = ['subProp'];
					prop = { allowNext: ['unrelatedProp'], subProp: { allowEmpty: true } };
				});

				it('should return false', () => {
					hasValidPath(prop, path).should.be.false;
				});
			});

			describe('if the property does have a matching allowNext element', () => {
				describe('but the subProperty does not have a true allowEmpty property', () => {
					beforeEach(() => {
						path = ['subProp'];
						prop = { allowNext: ['unrelatedProp'], subProp: { allowEmpty: false } };
					});

					it('should return false', () => {
						hasValidPath(prop, path).should.be.false;
					});
				});

				describe('and the subProperty has a true allowEmpty property', () => {
					beforeEach(() => {
						path = ['subProp'];
						prop = { allowNext: ['subProp'], subProp: { allowEmpty: true } };
					});

					it('should return true', () => {
						hasValidPath(prop, path).should.be.true;
					});
				});
			});
		});

		describe('when the next element in the path is an id', () => {
			describe('and it is the last element in the path', () => {
				describe('and the property does not have an allowId value', () => {
					beforeEach(() => {
						path = ['propId'];
						prop = { };
					});

					it('should return false', () => {
						hasValidPath(prop, path).should.be.false;
					});
				});

				describe('and the property has an empty allowId array', () => {
					beforeEach(() => {
						path = ['propId'];
						prop = { allowId: [] };
					});

					it('should return false', () => {
						hasValidPath(prop, path).should.be.false;
					});
				});

				describe('and the property does not have an empty string in its allowId array', () => {
					beforeEach(() => {
						path = ['propId'];
						prop = { allowId: ['someOtherProp'] };
					});

					it('should return false', () => {
						hasValidPath(prop, path).should.be.false;
					});
				});

				describe('and the property has an empty string in its allowId array', () => {
					beforeEach(() => {
						path = ['propId'];
						prop = { allowId: [''] };
					});

					it('should return true', () => {
						hasValidPath(prop, path).should.be.true;
					});
				});
			});
			describe('and there is a subProperty following it in the path', () => {
				describe('and the property does not have an allowId value', () => {
					beforeEach(() => {
						path = ['propId', 'subProp'];
						prop = { subProp: { allowEmpty: true } };
					});

					it('should return false', () => {
						hasValidPath(prop, path).should.be.false;
					});
				});

				describe('and the property has an empty allowId array', () => {
					beforeEach(() => {
						path = ['propId', 'subProp'];
						prop = { allowId: [] };
					});

					it('should return false', () => {
						hasValidPath(prop, path).should.be.false;
					});
				});

				describe('and the allowId array does not include the given subProperty', () => {
					beforeEach(() => {
						path = ['propId', 'missingSubProp'];
						prop = { allowId: ['subProp'] };
					});

					it('should return false', () => {
						hasValidPath(prop, path).should.be.false;
					});
				});

				describe('and the allowId includes a valid subProperty', () => {
					describe('but the subProperty does not have a true allowEmpty value', () => {
						beforeEach(() => {
							path = ['propId', 'subProp'];
							prop = { allowId: ['subProp'], subProp: { allowEmpty: false } };
						});

						it('should return false', () => {
							hasValidPath(prop, path).should.be.false;
						});
					});

					describe('and the subProperty has a true allowEmpty value', () => {
						beforeEach(() => {
							path = ['propId', 'subProp'];
							prop = { allowId: ['subProp'], subProp: { allowEmpty: true } };
						});

						it('should return true', () => {
							hasValidPath(prop, path).should.be.true;
						});
					});
				});
			});
		});
	});
});
