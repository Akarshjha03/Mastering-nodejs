// Importing the built-in 'http' module to create an HTTP server
const http = require('http');

// Importing the built-in 'fs' module to perform file system operations (like writing logs to a file)
const fs = require('fs');

// Creating an HTTP server that listens for incoming client requests
const myserver = http.createServer((req, res) => {

    // Creating a log entry with the current timestamp to indicate a new incoming request
    const log = `${Date.now()}: ${req.url} New request received\n`;

    // Printing the log to the console (useful for developers to see server activity in real-time)
    console.log(log);

    // Appending the log entry to a file named 'log.txt'
    // This helps persist the log data for later analysis (e.g., request monitoring)
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            // If there's an error while writing to the file, log it and send a 500 response to the client
            console.error('Failed to write to file:', err);
            res.statusCode = 500; // Internal Server Error
            res.end('Internal Server Error');
        } else {
            // If successful, send a confirmation response to the client
            res.end('Request logged');
        }
    });
});

// Instructing the server to listen for incoming requests on port 8000
myserver.listen(8000, () => {
    // Confirming that the server is up and running
    console.log('Server is running on port 8000');
});
