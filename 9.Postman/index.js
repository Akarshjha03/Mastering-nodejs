// Import required modules
const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json"); // Load mock user data

// Initialize Express app
const app = express();
const port = 3000; // Server port

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// ------------------------- Routes -------------------------

// GET - Show users in HTML (for website)
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// GET - Return all users (API - for mobile, etc.)
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// GET - Find user by ID
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

// POST - Add a new user
app.post("/api/users", (req, res) => {
  const body = req.body; // Extract user data from request body

  // Create a new user object with a unique ID
  const newUser = { ...body, id: users.length + 1 };

  // Push the new user into the users array (in-memory update)
  users.push(newUser);

  // Write the updated users array back to the JSON file for persistence
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      // If writing fails, return an error response
      console.error("Error writing file:", err);
      return res.status(500).json({ error: "Failed to save user" });
    }

    // If successful, return the newly created user with HTTP 201 (Created)
    res.status(201).json(newUser);
  });
});


// PATCH - Update user by ID
app.patch("/api/users/:id", (req, res) => {
  const { id } = req.params; // Extract user ID from URL params
  const body = req.body;     // Extract update fields from request body

  // Find the index of the user to update
  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  
  if (userIndex === -1) {
    // If user not found, return HTTP 404 (Not Found)
    return res.status(404).json({ error: "User not found" });
  }

  // Merge existing user data with the new fields (partial update)
  users[userIndex] = { ...users[userIndex], ...body };

  // Save updated array back to JSON file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      // If writing fails, return HTTP 500 (Server Error)
      console.error("Error writing file:", err);
      return res.status(500).json({ error: "Failed to update user" });
    }

    // If successful, return the updated user object
    res.json(users[userIndex]);
  });
});


// DELETE - Remove user by ID
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params; // Extract user ID from URL params

  // Find the index of the user in the array
  const userIndex = users.findIndex((u) => u.id === parseInt(id));

  if (userIndex === -1) {
    // If user not found, return HTTP 404 (Not Found)
    return res.status(404).json({ error: "User not found" });
  }

  // Remove the user from the array and store the deleted object
  const deletedUser = users.splice(userIndex, 1)[0];

  // Save the updated array back to the JSON file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      // If writing fails, return HTTP 500 (Server Error)
      return res.status(500).json({ error: "Failed to delete user" });
    }

    // If successful, return a confirmation message and the deleted user
    res.json({ message: "User deleted successfully", deletedUser });
  });
});


// ------------------------- Start Server -------------------------
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
