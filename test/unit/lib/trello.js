var should = require('chai').should();
var Trello = require('../../../lib/trello');

describe('Trello', function () {
    var trello;
    var key;
    var token;

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

    describe('#get()', function () {
        var netService;
        var trello;

        before(function () {
            netService = { };
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
            var objType;
            before(function () {
                objType = 'card';
            });

            it('should throw an error', function () {
                return function () {
                    trello.get(objType);
                }.should.throw(Error);
            });
        });

        describe('if object type is invalid', function () {
            var objType;
            var id;

            before(function () {
                objType = 'notATrelloObject';
                id = 'id';
            });

            it('should throw an error', function () {
                return function () {
                    trello.get(objType, id);
                }.should.throw(Error);
            });
        });

        // TODO: How to tell if the correct object type constructor was called?
    });
});
