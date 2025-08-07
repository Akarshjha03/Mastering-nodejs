## 🧭 Basic HTTP Server with Logging in Node.js

This project is a simple HTTP server built using Node.js. It listens on port 8000 and logs every incoming request to a file (`log.txt`) while printing the log to the console.

---

### 🧠 Why This Project?

- Learn core Node.js modules like `http` and `fs` without external frameworks.
- Understand the working of a basic server from scratch.
- Learn how to implement file-based logging for incoming HTTP requests.

---

### ⚙️ How It Works

#### 1. Dependencies

This project uses two built-in modules:

- `http` — to create the server.
- `fs` — to write logs to a file.

No need to install anything via npm.

#### 2. Server Creation

We import the required modules and create a server using `http.createServer()`, which takes a callback with `req` (request) and `res` (response) objects.

#### 3. Logging Requests

Every time a request hits the server:

- A log is created using the current timestamp.
- The log is printed to the console.
- The same log is appended to `log.txt` using `fs.appendFile()`.

#### 4. Error Handling

If there is any issue while writing to the file:

- The server sends a **500 Internal Server Error** to the client.
- The error is printed to the console.

Otherwise, the server responds with **"Request logged"**.

#### 5. Starting the Server

The server starts listening on port **8000**. When it starts successfully, a message is printed to the console saying:  
**Server is running on port 8000**

---

### ✅ Why This Way?

| Feature | Reason |
|--------|--------|
| `http` module | Lightweight and great for understanding low-level server creation. |
| File logging (`fs.appendFile`) | Helps store request logs persistently without overwriting. |
| Timestamps | Useful for tracking when requests arrive. |
| Error handling | Prevents crashes and improves reliability. |

