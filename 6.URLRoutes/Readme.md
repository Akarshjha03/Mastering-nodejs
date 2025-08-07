# URL Routing with Node.js (Basic Server Setup)

This project demonstrates a simple HTTP server built using Node.js. The server supports basic URL routing, writes logs for each incoming request, and processes different routes like `/`, `/about`, and query parameters.

## What is URL Routing?

URL Routing is the technique of handling different URLs (routes) in a web server and responding appropriately based on the path requested by the client.

For example:
- `/` → Homepage
- `/about` → About page
- `/contact?name=akarsh` → Contact page with query parameter

## How It Works

### Server Creation:
We use `http.createServer()` to create a web server in Node.js.

### Handling Requests:
Each time a request comes in, the server:
- Parses the URL using the `url` module.
- Logs the request.
- Uses a `switch` statement to handle routing based on the path.

### Logging:
Each request is logged into a file named `log.txt` with a timestamp and request URL.

## Understanding Core Concepts

1.  **HTTP Protocol**
    The Hypertext Transfer Protocol (HTTP) is the foundation of data communication on the web. It defines how requests and responses should be formatted between a client (like a browser) and a server.

    A URL in HTTP format looks like this:
    ```bash
    [http://example.com:8000/about?name=akarsh](http://example.com:8000/about?name=akarsh)
    ```

2.  **Domains & IP Addresses**
    A domain (like `example.com`) is a human-readable alias for a numeric IP address (like `192.168.1.1`).

    **DNS** (Domain Name System) maps the domain to the correct IP so that your browser knows where to send the request.

3.  **Ports**
    A port is a virtual endpoint for network communication.

    The default port for HTTP is `80`, and for HTTPS it's `443`.

    You can run your Node.js server on any open port (e.g., `8000`).

    Example:
    ```bash
    http://localhost:8000/
    ```
    This means you're accessing your local machine on port `8000`.

4.  **Port Nesting**
    Port nesting doesn't exist as a feature, but the concept may refer to using different ports for different services during development.

    For instance:
    - Backend server → port `8000`
    - Frontend server → port `3000`

    This separation helps manage independent components of an application.

5.  **Query Parameters**
    Query parameters allow passing data to the server via the URL.

    Example:
    ```bash
    http://localhost:8000/search?name=akarsh&age=22
    ```
    This URL has:
    - **Path**: `/search`
    - **Query**: `?name=akarsh&age=22`

    We use the `url` module to parse these parameters.

## Installation

To run this project:

1.  Initialize npm:
    ```bash
    npm init -y
    ```
2.  Install the required module:
    ```bash
    npm i url
    ```

## What is `package-lock.json`?

When you install any package using npm, a file called `package-lock.json` is generated automatically.

It locks the version of every package and its dependencies, ensuring consistent installs across different environments.

It's essential for reproducible builds and version control.

## Output Examples

-   **URL:** `/` → "HomePage"
-   **URL:** `/about` → "I am Akarsh Jha, Backend and Android Engineer"
-   **URL:** `/unknown` → "404 Not Found"

## Summary

This basic project teaches how to:
-   Create a basic HTTP server in Node.js
-   Use URL routing to handle multiple endpoints
-   Log requests
-   Parse query parameters using the `url` module
-   Understand `package-lock.json` and its importance

This forms the foundation of any web backend system.