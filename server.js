
var express = require ('express'),
	socket = require ('socket.io'),

	app = express.createServer (),
	io = socket.listen (app),
	channel,
	port = process.env.PORT || 3000;


// Init web server	
app.use (express.static (__dirname + '/public'));
app.listen (port);


// Init WebSockets
io.sockets.on ('connection', handleSocketConnect);


console.log ('Running on 127.0.0.1:' + port + '.');




function handleSocketConnect (socket) {
	if (channel) socket.emit ('channel', channel.url, channel.name);
	socket.on ('channel', changeChannel);
}




function changeChannel (url, name) {
	channel = { url: url, name: name };
	io.sockets.emit ('channel', url, name);
}

