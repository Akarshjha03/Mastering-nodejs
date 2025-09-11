const express = require('express');   // Import Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB connection & schema modeling

const app = express();
const port = 8000;

// ------------------- MIDDLEWARE -------------------
// Middleware to parse incoming JSON requests
// Without this, req.body will be undefined in POST/PATCH
app.use(express.json());

// Middleware to parse URL-encoded data (form submissions)
// extended: false → only supports simple key-value pairs
app.use(express.urlencoded({ extended: false }));

// ------------------- MONGODB CONNECTION -------------------
// Connect to MongoDB running locally on default port (27017)
// "Mastering_NodeJS" is the database name (it will be created if not exists)
(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Mastering_NodeJS");
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
})();

// Extra logging for debugging connection state
mongoose.connection.on("connected", () => {
  console.log("🔌 Mongoose connected to DB");
});
mongoose.connection.on("error", (err) => {
  console.error("❌ Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("⚠️ Mongoose disconnected");
});

// ------------------- USER SCHEMA -------------------
// Define schema for User collection
// Schema tells MongoDB what kind of fields and validation rules exist
const userSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true            // Must always be provided
  },
  lastName: { 
    type: String              // Optional
  },
  email: { 
    type: String, 
    required: true,           // Must always be provided
    unique: true              // No two users can have same email
  },
  jobTitle: { 
    type: String              // Optional
  },
  gender: { 
    type: String              // Optional
  },
});

// Create model from schema
// 'User' → MongoDB will create a "users" collection (lowercase pluralized)
const User = mongoose.model('User', userSchema);

// ------------------- ROUTES -------------------

// GET all users
// Endpoint: GET /api/users
// Fetches all user documents from MongoDB and returns as JSON
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find(); // Find all users
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// GET single user by ID
// Endpoint: GET /api/users/:id
// Uses MongoDB _id to fetch one user
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // req.params.id → URL param
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Invalid User ID" });
  }
});

// POST - create new user
// Endpoint: POST /api/users
// Expects JSON in body → { firstName, lastName, email, jobTitle, gender }
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body); // Create new User object
    await newUser.save();               // Save user into MongoDB
    res.status(201).json(newUser);      // Respond with created user
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH - update user by ID
// Endpoint: PATCH /api/users/:id
// Allows partial update (only fields provided in body will be updated)
app.patch('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,        // User ID
      req.body,             // Data to update
      { new: true, runValidators: true } // new: true → return updated doc
    );
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE user by ID
// Endpoint: DELETE /api/users/:id
// Removes user from DB if found
app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid User ID" });
  }
});

// ------------------- SERVER START -------------------
// Start Express server at http://localhost:8000
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
