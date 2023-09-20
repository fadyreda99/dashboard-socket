const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {origin: "*"}
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('sendDataToServer', (data)=>{
      console.log(data)
        io.sockets.emit('sendDataToClient', data);
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected.');
    })
});
server.listen(3000, () => {
    console.log('listening on *:3000  run');
});
