var express = require("express");
var app = express();
var server = app.listen(process.env.PORT || 3000);
var io = require('socket.io').listen(server);
const path = require('path');



app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var connections = [];
var title = 'Unititled Presentation';

io.sockets.on('connection', function (socket) {

    socket.once('disconnect', function () {
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconnected: %s sockets remaining", connections.length);
    });
    
    socket.emit('Welcome', {
        title: title
    });

    connections.push(socket);
    console.log("Connected: %d sockets connected", connections.length);
})

console.log("Polling server is running at 'http://localhost:3000'");
 