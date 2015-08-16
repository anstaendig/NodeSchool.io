var duplexer = require('duplexer');
var spawn = require('child_process').spawn;

module.exports = function(cmd, args) {
	var spawnedProcess = spawn(cmd, args);
	return duplexer(spawnedProcess.stdin, spawnedProcess.stdout);
};