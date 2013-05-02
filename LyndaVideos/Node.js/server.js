var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/html'});

	res.end('<html><body> home </body></html>');
}).listen(3000, 'localhost');