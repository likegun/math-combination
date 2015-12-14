"use strict";
var expect = require('chai').expect;
var combination = require('../index.js')

describe('test combination', function () {
	var arr = [1, 2, 3]
	it('cmn', function (done) {
		var res = combination.cmn(arr, 2)
		expect(res).to.deep.equal([
			[1, 2],
			[1, 3],
			[2, 3]
		])
		done()
	});

	it('cmnWithRepetition', function (done) {
		var res = combination.cmnWithRepetition(arr, 2)
		expect(res).to.deep.equal([
			[1, 1],
			[1, 2],
			[1, 3],
			[2, 2],
			[2, 3],
			[3, 3]
		])
		done()
	})
});