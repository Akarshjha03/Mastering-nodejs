Modular Programming in Node.js
==============================

This project demonstrates the concept of modular programming in Node.js using require() and module.exports. It helps break code into reusable, maintainable components.

---------------------------------------------
File Structure
---------------------------------------------

nodejs-modules/
│
├── main.js          # Main entry file
└── mathfun.js       # Module exporting math functions

---------------------------------------------
What is Modular Programming?
---------------------------------------------

Modular programming is a technique where code is divided into separate, functional units (modules). Each module handles a specific task. This makes code easier to read, test, and reuse.

In Node.js, modular programming is achieved using:
- require() to import modules
- module.exports to export functions, objects, or variables

---------------------------------------------
Steps to Run
---------------------------------------------

1. Create Project Folder:
   mkdir nodejs-modules
   cd nodejs-modules

2. Create Files:
   - mathfun.js — contains exported functions
   - main.js — imports and uses those functions

3. Run Your Code:
   node main.js

You will see output like:

Addition value is 8
Subtraction value is 6
Multiplication value is 42

---------------------------------------------
Code Overview
---------------------------------------------

mathfun.js
----------

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

// Export all functions as an object
module.exports = {
    add,
    subtract,
    multiply
};

// You can also use arrow functions and export like:
// exports.add = (x, y) => x + y;

main.js
-------

Option 1: Import the entire module as an object
------------------------------------------------

const result = require('./mathfun.js');

console.log("Addition value is", result.add(5, 3));
console.log("Subtraction value is", result.subtract(10, 4));
console.log("Multiplication value is", result.multiply(7, 6));

Option 2: Destructure to import specific functions directly
-----------------------------------------------------------
// const { add, subtract, multiply } = require('./mathfun.js');
// console.log(add(5, 3));

---------------------------------------------
Why Use This Pattern?
---------------------------------------------

- Promotes code reusability
- Improves project structure
- Helps avoid repetition
- Makes testing easier
- Supports team collaboration via well-defined modules

---------------------------------------------
Learn More
---------------------------------------------

Node.js Modules Documentation:
https://nodejs.org/api/modules.html

Understanding module.exports vs exports:
https://www.freecodecamp.org/news/node-js-module-exports-vs-exports/