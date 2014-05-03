#!/usr/bin/env node

var bignum = require("bignum");

module.exports = function (input, valid_in, valid_out){

	var base_in = bignum(valid_in.length);
	var base_out = bignum(valid_out.length);

	// convert input to base10
	var l = input.length;
	var base10 = bignum(0);
	var character;

	for (var i = 0; i < input.length; i++) {
		character = input[(l-i)-1];
		base10 = base10.add((base_in.pow(i)).mul((valid_in.indexOf(character)+1)));
	}
	
	// convert base10 to base_out with valid_out charset
	var result = '';
	var remaining = bignum(base10);

	console.log(base10.toString());

	do  {
		result += valid_out.charAt(remaining.mod(base_out)-1);
		remaining = (remaining.div(base_out));
	} while (remaining.gt(0));

	// reverse result
	var reverse = '';
	for (var j = result.length - 1; j >= 0; j--) {
		reverse += result[j];
	}

	return reverse;
};
