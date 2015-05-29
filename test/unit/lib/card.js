var sinon = require('sinon');
var chai = require('chai');
var should = require('chai').should();

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var Promise = require('bluebird');
var Card = require('../../../lib/Card');

describe('Card', function () {

    describe('#constructor()', function () {
        var config;
        var id;

        before(function () {
            config = { };
            id = 'id';
        });

        describe('if config is missing', function () {
            it('should throw an exception', function () {
                return function () {
                    return Card();
                }.should.throw(Error);
            });
        });

        describe('if id is missing', function () {
            it('should throw an exception', function () {
                return function () {
                    return Card(config);
                }.should.throw(Error);
            });
        });

        describe('if net is missing', function () {
            it('should throw an exception', function () {
                return function () {
                    return Card(config, id);
                }.should.throw(Error);
            });
        });

        describe('all arguments are correct', function () {
            var net;
            var card;
            var expectedProperty = 'expectedProperty';
            var expectedValue = 'expectedValue';

            describe('and the network resolves without error', function () {
                before(function () {
                    net = {
                        get: sinon.stub().returns(
                            Promise.resolve({
                                body: JSON.stringify({
                                    expectedProperty: expectedValue
                                })

                            })
                        )
                    }
                });

                beforeEach(function () {
                    card = Card(config, id, net);
                });

                it('should call the network service', function () {
                    net.get.called.should.be.true;
                });

                it('should update the object with the expected value on the expected property', function () {
                    card.should.eventually.have.property('expectedProperty').that.equals(expectedValue);
                });
            });
        });
    });
});
