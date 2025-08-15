// Import the built-in HTTP module in Node.js
// We will need this only if we want to manually create a server instead of using app.listen()
const http = require('http');

// Import Express framework to easily create routes and handle requests
// NOTE: earlier you wrote 'required', which is a typo. Correct is 'require'
const express = require('express');

// Create an Express application instance
const app = express();

// ------------------- ROUTES ------------------- //

// GET route for the homepage ('/') — sends "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// GET route for the '/about' page — sends "About Us"
app.get('/about', (req, res) => {
    res.send('About Us');
});

// POST route for '/contact' — sends "Contact Us"
// POST is generally used for submitting forms or sending data to the server
app.post('/contact', (req, res) => {
    res.send('Contact Us');
    // You can also read query parameters if needed:
    // res.send('Contact Us hey ' + req.query.name);
});

// ------------------- SERVER CREATION ------------------- //

// Option 1: Simple way — use app.listen()
// Express internally uses http.createServer(app) here
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

// Option 2: Manual way — create server using Node's HTTP module
// Uncomment below if you want manual control
/*
const server = http.createServer(app);
server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
*/
