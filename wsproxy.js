/*jslint node: true */
"use strict";

var WebSocket = require('ws'),
    net = require('net'),
    server;

server = net.createServer(function (socket) {
    console.log('connected');

    socket.on('end', function () {
        console.log('socket closed');
    });

    var ws = new WebSocket(
        'wss://mmb.cfapps.io:4443/',
        {protocol: 'binary'}
    );

    ws.on('open', function () {
        ws.on('message', function (d) {
            socket.write(d);
        });

        socket.on('data', function (d) {
            ws.send(d);
        });
    });
});

server.listen(2222, function () {
    console.log('listening on %j', server.address());
});
