// Importing core modules from Node.js
const http = require('http'); // To create an HTTP server
const fs = require('fs');     // To interact with the file system (for logging)
const url = require('url');   // To parse the URL and its query parameters

// Create the HTTP server
const myServer = http.createServer((req, res) => {

    // Ignore browser's automatic request for /favicon.ico
    if (req.url === "/favicon.ico") return res.end(); // Prevents logging unnecessary requests

    // Create a log message with a timestamp and the requested URL
    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    // Parse the incoming URL to access path and query parameters
    const myUrl = url.parse(req.url, true);
    console.log(myUrl); // Log the parsed URL object for debugging and learning

    // Append the log message to a file named 'log.txt'
    fs.appendFile("log.txt", log, (err, data) => {
        if (err) {
            // If there's an error writing to the file, log it and send a 500 response
            console.error('Failed to write log:', err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }

        // Handle routing based on the URL path
        switch (req.url) {
            case "/":
                res.end("HomePage"); // Respond to the root route
                break;

            case "/about":
                res.end("I am Akarsh Jha, Backend and Android Engineer"); // Respond to /about route
                break;

            default:
                res.end("404 Not Found"); // Handle undefined routes
                break;
        }
    });
});

// Start the server and listen on port 8000
myServer.listen(8000, () => {
    console.log('Server is running on port 8000');
});
