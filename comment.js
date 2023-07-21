// create a web server
// 1. create a server
// 2. register a service
// 3. bind a port
// 4. listen a port

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(req, res) {
	var url = req.url;
	if(url === '/') {
		fs.readFile('./resource/index.html', function(error, data) {
			if(error) {
				res.setHeader('Content-Type', 'text/plain; charset=utf-8');
				res.end('文件读取失败，请稍后重试！');
			} else {
				res.setHeader('Content-Type', 'text/html; charset=utf-8');
				res.end(data);
			}
		})
	} else if(url === '/img') {
		fs.readFile('./resource/1.jpg', function(error, data) {
			if(error) {
				res.setHeader('Content-Type', 'text/plain; charset=utf-8');
				res.end('文件读取失败，请稍后重试！');
			} else {
				res.setHeader('Content-Type', 'image/jpeg');
				res.end(data);
			}
		})
	}
})

server.listen(3000, function() {
	console.log('服务器启动成功了，可以通过 http:///localhost:3000/ 来进行访问');
})