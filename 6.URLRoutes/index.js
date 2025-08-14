// Importing core modules from Node.js
const http = require('http'); // To create an HTTP server
const fs = require('fs');     // To interact with the file system (for logging)
const url = require('url');   // To parse the URL and its query parameters

// Create the HTTP server
const myServer = http.createServer((req, res) => {

    // Ignore browser's automatic request for /favicon.ico
    if (req.url === "/favicon.ico") return res.end();

    // Parse the incoming URL to access path and query parameters
    const myUrl = url.parse(req.url, true);

    // Create a log message with method, timestamp, and requested URL
    const log = `${new Date().toISOString()} [${req.method}] ${myUrl.pathname} New Req Received\n`;

    // Append the log message to 'log.txt'
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error('Failed to write log:', err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }

        // Routing based on the path
        switch (myUrl.pathname) {
            case "/":
                res.end("HomePage");
                break;

            case "/about":
                res.end("I am Akarsh Jha, Backend and Android Engineer");
                break;

            default:
                res.end("404 Not Found");
                break;
        }
    });
});

// Start the server
myServer.listen(8000, () => {
    console.log('Server is running on port 8000');
});
