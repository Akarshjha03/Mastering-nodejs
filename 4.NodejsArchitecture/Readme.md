# 📘 Node.js Architecture & Execution Model

Node.js is a **single-threaded, event-driven runtime** that uses a **non-blocking I/O model**, making it efficient and suitable for data-intensive real-time applications.

---

## 🔁 Node.js Core Architecture

### 1. **Call Stack**
- Executes code line by line.
- Maintains the order of function execution.
- Works synchronously.

### 2. **Event Queue**
- Stores callbacks (e.g., from `setTimeout`, HTTP handlers).
- Managed by the **Event Loop**.
- Callbacks are queued here and wait until the call stack is empty.

### 3. **Event Loop**
- Continuously checks the call stack and event queue.
- If the stack is empty, it pushes the next event from the queue into the stack for execution.
- Enables **non-blocking** async behavior.

### 4. **Thread Pool**
- Provided by `libuv` (a C library Node.js uses).
- Used to handle expensive or blocking operations like:
  - File system I/O (`fs`)
  - DNS lookups
  - Compression, cryptography, etc.
- By default, contains **4 threads** (configurable via `UV_THREADPOOL_SIZE`).

---

## 🔀 Sync vs Async in Node.js

### 🔹 Synchronous (Blocking)

```text
const fs = require('fs');

console.log("1");

const data = fs.readFileSync('./Contacts.txt', 'utf8');
console.log(data);

console.log("2");
```
### Output

```text
1
<File contents here>
2
```

### 🧠 Explanation:
- fs.readFileSync blocks the main thread.
- Nothing executes after this line until file reading is complete.
- Slows down overall performance, especially for I/O-heavy applications.

### 🔸 Asynchronous (Non-blocking)

```text
const fs = require('fs');

console.log("1");

fs.readFile('./Contacts.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

console.log("2");
```

### Output
```text
1
2
<File contents here>
```

### 🧠 Explanation:
- fs.readFile delegates the file reading to the thread pool.
- Immediately proceeds to the next line (console.log("2")).
- The file content is printed only when reading is done, using the callback function pushed into the event queue.

