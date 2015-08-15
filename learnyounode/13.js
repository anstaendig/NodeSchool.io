'use strict';

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
	if (req.method === 'GET') {
		var path = url.parse(req.url).pathname;
		var query = url.parse(req.url, true).query;
		if (path === '/api/parsetime') {
			res.writeHead(200, { 'Content-type': 'application/json'});
			res.end(parseTime(query));
		} else if (path === '/api/unixtime') {
			res.writeHead(200, { 'Content-type': 'application/json'});
			res.end(unixTime(query));
		} else {
			res.writeHead(404, { 'content-type': 'text/plain'});
			res.end('Invalid URL');
		}
	} else {
		res.writeHead(404, { 'content-type': 'text/plain'});
		res.end('Invalid method');
	}
}).listen(process.argv[2]);

function parseTime(query) {
	var date = new Date(query.iso);
	parseTime = {
		'hour': date.getHours(),
		'minute': date.getMinutes(),
		'second': date.getSeconds()
	};
	return JSON.stringify(parseTime);
}

function unixTime(query) {
	var date = new Date(query.iso);
	unixTime = {
		'unixtime': date.getTime()
	};
	return JSON.stringify(unixTime);
}
