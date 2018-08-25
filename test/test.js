'use strict';

var expect = require('chai').expect;
var installCheck = require('../dist/js/assembly.min.js');

describe('#installCheck', function() {
    it('should indicate a successful install', function() {
        var result = installCheck();
        expect(result).to.equal(true);
    });
});