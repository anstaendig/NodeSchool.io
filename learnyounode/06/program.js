'use strict';

var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function(err, filesArray) {
	if (err) {
		return console.error('ERROR:', err);
	};
	filesArray.forEach(function(file) {
		console.log(file);
	});
});