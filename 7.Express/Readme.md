# Express.js Guide

Express.js is a fast, unopinionated, and minimalist web framework for Node.js.  
It helps you quickly build web applications and APIs by simplifying server creation, URL routing, and HTTP handling.

---

## 📦 Installation

Install Express using npm:

```bash
npm install express
```

---

## 🚀 Why Use Express.js?

- Simplifies Server Creation – Eliminates boilerplate code needed with Node.js `http` module.
- Powerful Routing – Easily handle different HTTP methods (GET, POST, etc.) and paths.
- Middleware Support – Add additional request/response handling layers easily.
- Lightweight and Flexible – Lets you structure your application as you prefer.

---

## ⚡ How Express Simplifies URL Routing

In pure Node.js, you would manually check URLs and HTTP methods using the `http` module.  
Express abstracts this process with built-in routing methods and a `.listen()` function to start your server easily.

#### Example without Express:
```js
const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/' && req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World');
}
});

server.listen(3000);
```

#### Example with Express:
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello World');
});

app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});
```


---

## 🛣 Basic Routing

Routing refers to how an application responds to a client request to a particular endpoint.

**Syntax:**
```js
app.METHOD(PATH, HANDLER)
```


Where:
- app – An instance of Express.
- METHOD – HTTP request method in lowercase (`get`, `post`, etc.).
- PATH – URL path on the server.
- HANDLER – Function executed when the route is matched.

**Example:**
```js
app.get('/', (req, res) => {
res.send('Welcome to the Home Page');
});

app.post('/submit', (req, res) => {
res.send('Form submitted');
});
```

---

## 📚 Official Documentation

For more details, visit: https://expressjs.com/

