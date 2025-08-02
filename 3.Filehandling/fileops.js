//we can do file operations using the fs module like reading, writing, appending, etc.

const fs = require('fs'); // Importing the file system module (The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.)
// fs is a built-in module in Node.js that provides an API for interacting with the file system


//synchronous file operations
fs.writeFileSync('./example.txt', 'Hello, this is a test file!'); // Synchronously write data to a file named example.txt in the current directory
// If the file does not exist, it will be created. If it exists, it will be overwritten.

//Asynchronous file operations
fs.appendFile('./example.txt', '\nThis is appended text.', (err) => {})// Asynchronously append data to the file example.txt
// If the file does not exist, it will be created. If it exists, the data will be appended to the end of the file.

// Reading the file synchronously
const data = fs.readFileSync('./Contacts.txt', 'utf8'); // Synchronously read the contents of example.txt
console.log(data); // Output the contents of the file to the console
//utf8 is used to specify the encoding of the file, which is important for reading text files correctly.

/* Reading the file asynchronously
fs.readFile('./Contacts.txt', 'utf8', (err, data) => { // Asynchronously read the contents of Contacts.txt
    if (err) {
        console.error('Error reading file:', err); // Log an error message if there is an issue reading the file
        return;
    }
    console.log(data); // Output the contents of the file to the console
}); */


//Appending to a file synchronously
fs.appendFileSync('./Contacts.txt', '\nMahendi : +919999999777'); // Synchronously append data to the file Contacts.txt
// If the file does not exist, it will be created. If it exists, the data will be appended to the end of the file.

//cp - Copying a file
fs.copyFileSync('./example.txt', './example_copy.txt'); // Synchronously copy example.txt to example_copy.txt

//delete - Deleting a file
//fs.unlinkSync('./example_copy.txt'); // Synchronously delete the file example_copy.txt

//stats - Getting file stats
const stats = fs.statSync('./example.txt'); // Synchronously get the stats of example.txt
console.log(stats); // Output the stats of the file to the console
