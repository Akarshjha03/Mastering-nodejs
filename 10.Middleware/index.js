// Import required modules
const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json"); // Load mock user data

// Initialize Express app
const app = express();
const port = 3000; // Server port

//--------------------------------Middleware--------------------------------

// Middleware to parse form data - Inbuilt in Express
app.use(express.urlencoded({ extended: false }));

// 👉 Router for users
const userRouter = express.Router();

// 👉 Router-level middleware: runs for any /api/users/* request
userRouter.use((req, res, next) => {
  console.log("Accessed the USERS section");
  next(); // pass to the next handler
});

//--------------------------------- Routes ---------------------------------

// GET - Return all users
userRouter.get("/", (req, res) => {
  return res.json(users);
});

// Mount router
app.use("/api/users", userRouter);

//----------------------------------Start the server--------------------------------

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
