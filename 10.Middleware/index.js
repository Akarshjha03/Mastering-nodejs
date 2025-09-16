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
  res.setHeader("X-Name-of-User", "Akarsh Jha"); // Custom header - always add X- before custom header names
  console.log(req.headers); // Log all request headers
  return res.json(users);
});

// GET - Find user by ID
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" }); //Status Code 404 - Not Found
  }

  return res.json(user);
});


// Mount router
app.use("/api/users", userRouter);

//----------------------------------Start the server--------------------------------

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
