const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));

// Start the server
const server = app.listen(3000, () => console.log('Server running on port 3000'));

// Export the server object so tests can close it
module.exports = server;
