// Import required core modules
const fs = require('fs');       // File system module for file operations
const os = require('os');       // OS module to get system-related information

// Log system information
console.log(os.cpus().length);  // Output the number of CPU cores
console.log(os.platform());     // Output the operating system platform

console.log("1"); // Step marker to trace execution order

// ----------- Synchronous File Reading (Blocking) -----------
// Read contents of 'Contacts.txt' synchronously (blocks execution until complete)
// If the file is large or missing, it can cause a delay or throw an error
const data = fs.readFileSync('./Contacts.txt', 'utf-8');
console.log(data);
console.log('File read successfully');
// ------------------------------------------------------------

console.log("2"); // Execution continues after file read is complete
