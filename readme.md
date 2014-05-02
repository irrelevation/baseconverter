# Baseconverter

Convert any string from one set of characters to another set of characters;


## Call

`convert(string, base_of_string, base_of_output);// returns the converted string`

* `string` is the string you want to convert.
* `base_of_string` is a string containing the characters `string` is based on.
* `base_of_output` is a string containing the characters the returned string is based on.


## Example

decimal to hexadecimal conversion

```` javascript
var convert = require("baseconverter");

var input_base = '0123456789';
var output_base = '0123456789ABCDEF';

var hexvalue = convert('43', input_base, output_base);
````