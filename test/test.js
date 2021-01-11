'use strict';

var expect = require('chai').expect;
var installCheck = require('../dist/js/assembly.min.js');

describe('#installCheck', function() {
    it('Should indicate a successful install', function() {
        var result = installCheck();
        expect(result).to.equal(true);
    });
});

describe('#installCheck', function() {
    it('Should show a Tooltip object is created', function() {
        var tooltip     = new Tooltip.Tooltip();
        var result      = false;
        console.log(tooltip);
        if(tooltip !== null && typeof tooltip === 'object') {
            result = true;
        }
        expect(result).to.equal(true);
    });
});