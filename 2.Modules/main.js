const result =  require('./mathfun.js'); // Importing the mathfun.js module - this gives us access to the functions defined in that file
//OR
//const {add, subtract, multiply} = require('./mathfun.js'); // Alternative way to import specific functions (destructuring)


//Usage:

console.log("Addition value is", result.add(5, 3)); // Outputs: 8

//console.log("Addition value is", add(5, 3)); // This would work if you used destructuring to import the function directly

//You're importing everything from mathfun.js as the object result(variable).
//To access any function, you use dot notation like result.add

console.log("Subtraction value is", result.subtract(10, 4)); // Outputs: 6
console.log("Multiplication value is", result.multiply(7, 6)); // Outputs: 42
// This way, you can keep adding more functions to mathfun.js without affecting the existing exports