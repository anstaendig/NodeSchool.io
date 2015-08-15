'use strict';

var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function(err, files) {
	if (err) { return err; };
	for (var i = 0; i < files.length; i++) {
		if(path.extname(files[i]) === ext) {
			console.log(files[i]);
		}
	};	
});