'use strict';

var fs = require('fs');

var fileString = fs.readFileSync(process.argv[2], 'utf-8');
var lineArray = fileString.split('\n');
console.log(lineArray.length - 1);

