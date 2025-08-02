# Node.js package.json and custom scripts

This is a basic Node.js learning project created to understand how `package.json` and custom scripts work.

---

## 📦 Step-by-Step Guide

### 1. Initialize Your Node Project

To begin, create your project folder and initialize it with:

```bash
npm init
```

### 2. What is package.json?

- package.json is the core file of any Node.js project. It includes:
- Project name and version
- Entry point file (like index.js)
- Custom scripts you define
- Dependencies (libraries you install)
- Author and license info

### 3. Create Your JavaScript File
Inside your project folder, create a folder named HelloWorld and a file named hello.js inside it.

### 4. Add Custom Scripts
Edit your package.json to add a custom start script like this:

```jsonc
{
  "name": "node.js-learning",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    // This script runs our hello.js file when we use `npm start`
    "start": "node ./HelloWorld/hello.js",

    // A default test script placeholder
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "akarsh jha",
  "license": "ISC",
  "description": "this is a node.js learning project"
}
```

### 5. Run Your Script
In the terminal, run:

```bash
npm start
```

You will see the output:
```bash
Hello, World! this is a test.
```

This command runs the script defined as "start" in your package.json

### ✅ Summary
- npm init creates package.json
- We added a custom script in scripts
- Ran the script using npm start
- Used console.log() in our Node.js file

### 🧠 Learn More
- [npm Scripts Guide](https://docs.npmjs.com/misc/scripts)



