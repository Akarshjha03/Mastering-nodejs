Node.js File System (fs) Module - File Handling
===============================================

This README covers the usage of Node.js built-in 'fs' module, which provides an API for interacting with the file system — such as reading, writing, updating, and deleting files and directories.

---------------------------------------------
What is the 'fs' Module?
---------------------------------------------

The 'fs' (File System) module allows you to:
- Read files
- Write to files
- Update files
- Delete files
- Work with directories
- Handle files asynchronously and synchronously

You can use it in two modes:
1. Asynchronous (non-blocking) — Preferred in production
2. Synchronous (blocking) — Simpler for small scripts or learning

To use the module:
const fs = require('fs');

---------------------------------------------
Basic Setup
---------------------------------------------

1. Create a new folder:
   mkdir fs-demo
   cd fs-demo

2. Create a file:
   touch filehandling.js

3. Open your editor and import 'fs':
   const fs = require('fs');

---------------------------------------------
Built-in Methods in fs Module
---------------------------------------------

1. fs.writeFile(path, data, callback)
   - Creates or replaces a file
   - Asynchronous

2. fs.writeFileSync(path, data)
   - Synchronous version of writeFile

3. fs.appendFile(path, data, callback)
   - Appends data to file; creates file if not exists

4. fs.appendFileSync(path, data)

5. fs.readFile(path, encoding, callback)
   - Reads the contents of a file asynchronously

6. fs.readFileSync(path, encoding)

7. fs.rename(oldPath, newPath, callback)
   - Renames or moves a file

8. fs.renameSync(oldPath, newPath)

9. fs.unlink(path, callback)
   - Deletes a file

10. fs.unlinkSync(path)

11. fs.existsSync(path)
    - Checks if a file exists

12. fs.mkdir(path, callback)
    - Creates a directory

13. fs.mkdirSync(path)

14. fs.rmdir(path, callback)
    - Removes an empty directory

15. fs.readdir(path, callback)
    - Reads contents of a directory

16. fs.stat(path, callback)
    - Gets metadata like size, created time, etc.

17. fs.copyFile(src, dest, callback)
    - Copies a file from src to dest

---------------------------------------------
Example Usage
---------------------------------------------

1. Writing to a file:

fs.writeFile('example.txt', 'Hello, FS!', (err) => {
    if (err) throw err;
    console.log('File written!');
});

2. Appending to a file:

fs.appendFile('example.txt', '\nAppending new line', (err) => {
    if (err) throw err;
    console.log('Appended!');
});

3. Reading a file:

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});

4. Renaming a file:

fs.rename('example.txt', 'renamed.txt', (err) => {
    if (err) throw err;
    console.log('Renamed!');
});

5. Deleting a file:

fs.unlink('renamed.txt', (err) => {
    if (err) throw err;
    console.log('Deleted!');
});

---------------------------------------------
Synchronous Version Example
---------------------------------------------

const content = fs.readFileSync('renamed.txt', 'utf8');
console.log('Content:', content);

fs.writeFileSync('newfile.txt', 'Written with writeFileSync');

---------------------------------------------
Best Practices
---------------------------------------------

- Prefer asynchronous methods for production applications.
- Use try-catch blocks with sync methods.
- Always handle errors with callbacks or try/catch.
- Use path module (`const path = require('path')`) to avoid platform-specific issues.

---------------------------------------------
Learn More
---------------------------------------------

Node.js fs Documentation:
https://nodejs.org/api/fs.html

List of All fs Methods (v20+):
https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fs
