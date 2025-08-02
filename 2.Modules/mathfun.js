function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

//when we creat a module, we need to export the functions we want to use in other files
module.exports = {
    add,
    subtract,
    multiply
};

// we have used module.exports to export an object containing the functions
// This allows us to import and use these functions in other files, like main.js
// This is done because if objects are not created, it will overwrite the existing module.exports object(previously exported) with the new one, which is not desired.

// This can also be done using export object with arrow functions (aka anonymous functions):
//exports.add = (x, y) => x + y;
//exports.subtract = (x, y) => x - y;
//exports.multiply = (x, y) => x * y;

