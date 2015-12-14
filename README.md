# math-combination(数学组合)

## Install
	npm i math-combination --save

## Usage
	var combination = require('math-combination')
	var arr = [1, 2, 3]

	//Get all conditions that conbine two element of the the arr(different order same condition)
	combination.cmn(arr, 2)

	//Get all conditions that conbine two element of the the arr(different order same condition and element can repeat)
	combination.cmnWithRepetition(arr, 2)

--- 

### Note
Only support for array of String or Number

---

### See [test](https://github.com/likegun/math-combination/blob/master/test/index.js) for more details
