var through = require('through2');
var split = require('split');
var stream = through(write, end);
var lineCount = 0;

// function write(buffer, encoding, next) {
// 	if (lineCount % 2 === 0) {
// 		// console.log(lineCount);
// 		// console.log('Buffer: ' + buffer.toString());
// 		this.push(buffer.toString().toLowerCase() + '\n');
// 		lineCount++;
// 		next();
// 	} else {
// 		// console.log('Buffer2: ' + buffer.toString());
// 		// console.log(lineCount);
// 		this.push(buffer.toString().toUpperCase() + '\n');
// 		lineCount++;
// 		next();
// 		// console.log(lineCount);
// 	}
// }

// function end(done) {
// 	done();
// }

// process.stdin.pipe(split('\n')).pipe(stream).pipe(process.stdout);

var tr = through(function (buf, _, next) {
	var line = buf.toString();
	this.push(lineCount % 2 === 0 
		? line.toLowerCase() + '\n'
		: line.toUpperCase() + '\n'
	);
	lineCount++;
	next();
});

process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout)
;