// Import required core modules
const fs = require('fs');       // File system module for file operations
const os = require('os');       // OS module to get system-related information

// Log system information
console.log(os.cpus().length);  // Output the number of CPU cores
console.log(os.platform());     // Output the operating system platform

console.log("1"); // Step marker to trace execution order

// ----------- ASynchronous File Reading (Non - Blocking) -----------
// Read contents of 'Contacts.txt' Asynchronously (continues the execution without blocking)
// If the file is large or missing, it can cause a delay or throw an error
const data = fs.readFile('./Contacts.txt', 'utf-8', (err, data) => {
console.log(data);
console.log('File read successfully');
});
// ------------------------------------------------------------

console.log("2"); // Execution continues after file read is complete
console.log("3"); // Another step marker to trace execution order
console.log("4"); // Final step marker to trace execution order
// Note: The file reading is non-blocking, so this log will appear before the file read completes
// This demonstrates the asynchronous nature of Node.js, allowing other code to run while waiting for I/O operations to complete.
