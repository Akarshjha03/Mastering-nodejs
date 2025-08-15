# Functions, Modules, Libraries, and Frameworks

This document explains the difference between **Function**, **Module**, **Library**, and **Framework** with examples in **JavaScript**.

---

## 1. Function → Smallest Unit of Reusable Code
A **function** is a block of code that performs a **specific task** and can be reused multiple times.

**Example:**
```javascript
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 3)); // Output: 8
```

#### Key Points:
- Performs a single, specific task.
- Reusable anywhere in the program.

## 2. Module → Collection of Related Functions & Variables
A module is simply a JavaScript file containing related functions, classes, or variables.

**Example:**

```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export functions for use in other files
module.exports = { add, subtract };
```

**Usage:**

```javascript
const mathUtils = require('./mathUtils');

console.log(mathUtils.add(5, 3));      // Output: 8
console.log(mathUtils.subtract(5, 3)); // Output: 2
```

## 3. Library → Collection of Modules for Broader Functionality
A library is a collection of modules designed to provide a set of related functionalities.

**Example:**

Lodash → A JavaScript utility library.
Some modules/functions include:
- _.chunk → Splits an array into chunks.
- _.debounce → Delays function execution.

```javascript
const _ = require('lodash');

let arr = [1, 2, 3, 4, 5, 6];
console.log(_.chunk(arr, 2)); 
// Output: [[1, 2], [3, 4], [5, 6]]
```

## 4. Framework → Collection of Modules/Libraries + Rules & Structure
A framework provides libraries and modules along with rules, a defined structure, and workflows to build applications.

**Example:**

Express.js → A Node.js web framework.
Includes tools for routing, middleware, and request handling.
Enforces some structure for building web servers.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

## 📌 Summary Hierarchy

```text
Function → Module → Library → Framework
```

- Function: Single task.
- Module: Collection of related functions.
- Library: Collection of modules (no strict rules).
- Framework: Collection of modules + strict structure & rules.