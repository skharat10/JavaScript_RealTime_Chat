# JavaScript_RealTime_Chat
Real-time messaging app
This app consists of both client-side (HTML/JavaScript) and server-side (Node.js) components for a real-time chat application using WebSocket communication.

Client-Side (HTML/JavaScript):

The HTML file sets up a basic chat interface with an input field and a list to display messages.
JavaScript code establishes a WebSocket connection to 'ws://localhost:5050', which is the server-side WebSocket endpoint.
It handles incoming messages from the server by creating new list items for each message and appending them to the message list.
The code also listens for the 'key up' event on the input field, allowing users to send messages by pressing the 'Enter' key.
Server-Side (Node.js):

The Node.js server is created using Express.js.
A WebSocket server is created using the 'ws' library, and it runs on the same server as the Express app.
Connected clients are tracked using a Set data structure.
When a client connects, it is added to the Set of clients.
Incoming messages from clients are broadcasted to all connected clients, except the sender, ensuring a real-time chat experience.
When a client disconnects (closes the WebSocket connection), it is removed from the Set of clients.

Skills Section:

WebSocket Communication
Real-Time Chat Application Development
HTML/JavaScript
Node.js/Express.js
WebSocket Server Implementation
Project Experience (if applicable):

"Real-Time Chat Application"
Description: Developed a real-time chat application using WebSocket technology, enabling instant messaging between multiple users.
Key Contributions:
Implemented client-side HTML/JavaScript interface for message input and display.
Established a WebSocket connection to a Node.js server.
Facilitated real-time message broadcasting to connected clients.
Managed client connections and disconnections.
Technologies Used: HTML, JavaScript, Node.js, Express.js, WebSocket
