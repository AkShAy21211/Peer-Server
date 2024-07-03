const { ExpressPeerServer } = require('peer');
const express = require('express');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 9000; // Use environment variable for port

// Create HTTP server with Express
const server = http.createServer(app);

// Set up PeerServer
const peerServer = ExpressPeerServer(server, {
  debug: true,
  allow_discovery: true,
  path: '/myapp' // Replace with your desired path
});

// Mount PeerServer
app.use('/peerjs', peerServer);

// Test route to check server status
app.get('/', (req, res) => {
  res.send('Server running');
});

// Start server
server.listen(PORT, () => {
  console.log(`PeerJS Server is running on port ${PORT}`);
});
