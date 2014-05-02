

module.exports = function (input, valid_in, valid_out){

	var base_in = valid_in.length,
		base_out = valid_out.length;

	// convert input to base10
	var l = input.length;
	var base10 = 0;
	var character;

	for (var i = 0; i < input.length; i++) {
		character = input[l-i-1];
		base10 += valid_in.indexOf(character) * Math.pow(base_in, i);
	}
	
	// convert base10 to base_out with valid_out charset
	var result = '';
	var remaining = base10;

	do  {
		result += valid_out.charAt(remaining % base_out);
		remaining = Math.floor(remaining / base_out);
	} while (remaining > 0);

	// reverse result
	var reverse = '';
	for (var j = result.length - 1; j >= 0; j--) {
		reverse += result[j];
	}

	return reverse;
};