const http = require('http');
const fs = require('fs');
const url = require('url');

// Create the HTTP server
const myServer = http.createServer((req, res) => {
    // Create a timestamped log message with request URL
    if (req.url === "/favicon.ico") return res.end(); // Ignore favicon requests
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    // Append log to 'log.txt' file
    fs.appendFile("log.txt", log, (err, data) => {
        if (err) {
            console.error('Failed to write log:', err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }

        // Switch-based routing logic to handle multiple routes
        switch (req.url) {
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

// Start listening on port 8000
myServer.listen(8000, () => {
    console.log('Server is running on port 8000');
});
