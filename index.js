var _ = require('lodash');

/**
 * 检查两个数组的长度和的关系是否正确用来进行cmn,cmn2,amn,amn2操作
 * @param  {Array} arr 
 * @param  {Number} n   
 */
function check(arr, n) {
	if (!(arr instanceof Array)) {
		throw new Error('arr is not instanceof Array');
	}

	var len = arr.length;
	if (len < n || n < 0) {
		throw new Error('Illegal n [%d]', n);
	}
}

/**
 * 从数组中选出n个元素组合的全部情况(元素的顺序不同，组合情况算相同, 同时元素不重复)
 * @param  {Array} arr 数组
 * @param  {Int} n   选出n个元素组合
 * @return {Array}   所有组合的情况 
 */
module.exports.cmn = function cmn(array, n) {
	check(array, n);
	if (n === 1)
		return array.map(function (e) {
			return [e];
		});
	var results = [];
	array.forEach(function (num, index) {
		//copy array
		var tempArray = array.slice(0);
		tempArray.splice(index, 1);
		cmn(tempArray, n - 1).forEach(function (e) {
			e.unshift(num);
			var exist = _.find(results, function (result) {
				return compareArray(result.slice(0), e.slice(0));
			})
			if (!exist)
				results.push(e);
		})
	});
	return results;
}

/**
 * 从数组中选出n个元素组合的全部情况(元素的顺序不同，组合情况算相同, 同时元素可以重复)
 * @param  {Array} arr 数组
 * @param  {Int} n   选出n个元素组合
 * @return {Array}   所有组合的情况 
 */
module.exports.cmnWithRepetition = function cmnWithRepetition(array, n) {
	check(array, n);
	if (n === 1)
		return array.map(function (e) {
			return [e];
		});
	var results = [];
	array.forEach(function (num, index) {
		cmnWithRepetition(array, n - 1).forEach(function (e) {
			e.unshift(num);
			var exist = _.find(results, function (result) {
				return compareArray(result.slice(0), e.slice(0));
			})
			if (!exist)
				results.push(e);
		})
	});
	return results;
}

function compareArray(arr1, arr2) {
	if (arr1.length !== arr2.length)
		return false;
	while (arr1.length) {
		var value = arr1[0];
		var index = arr2.indexOf(value);
		if (index !== -1) {
			arr1.splice(0, 1);
			arr2.splice(index, 1)
		} else {
			return false;
		}
	}
	return true;
}