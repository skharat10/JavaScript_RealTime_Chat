const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = app.listen(5050, () => {
    console.log('server started on port 5050')
});

// create a WebSocket server
const wss = new WebSocket.Server({ server });

// store connected clients
const clients = new Set();

// handle WebSocket connections
wss.on('connection', (ws) => {
    clients.add(ws);

    // Handle incoming messages from clients
    ws.on('message', (message) => {
        // broadcast the message to all connected clients
        clients.forEach((client) => {
            if(client != ws && client.readyState === WebSocket.OPEN){
                client.send(message.toString());

            }
            
        });
    });
// Handle client disconnection
    ws.on('close', () => {
        clients.delete(ws);
    });
});

// Serve the static HTML file
app.use(express.static('public'));

// Add a route handler for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
