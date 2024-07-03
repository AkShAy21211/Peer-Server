const { ExpressPeerServer } = require('peer');
const express = require('express');
const app = express();

const PORT = 9000;

// Create HTTP server with Express
const server = require('http').createServer(app);

// Set up PeerServer
const peerServer = ExpressPeerServer(server, {
    debug: true,
    secure:false,
    path: '/myapp' // Replace with your desired path
});

// Mount PeerServer
app.use('/peerjs', peerServer);

// Start server
server.listen(PORT, () => {
    console.log(`PeerJS Server is running on port ${PORT}`);
});
