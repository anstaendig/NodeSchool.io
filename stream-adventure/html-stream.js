var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();
var stream = tr.select('.loud').createStream();
var toUpperCase = through(function(buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
});

stream.pipe(toUpperCase).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);
