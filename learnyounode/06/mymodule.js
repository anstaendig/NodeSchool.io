'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {
	fs.readdir(dir, function(err, files) {
		if (err) {
			return callback(err);
		};

		files = files.filter(function(file) {
			return path.extname(file) === '.' + extension;
		});

		callback(null, files);
	});
};