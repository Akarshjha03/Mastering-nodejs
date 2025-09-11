# Connect MongoDB with Node.js (Express + Mongoose)

This guide walks you through installing MongoDB, initializing a Node.js project, connecting with Mongoose, creating a schema/model, and implementing CRUD operations. Use Postman to test the endpoints.

---

## Prerequisites
- Node.js 18+ and npm
- Windows 10/11
- MongoDB Community Server and mongosh installed
  - Follow: [Install MongoDB Community Edition on Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

---

## Install MongoDB and Start It
1. Install MongoDB (MSI) using the official guide above.
2. Option A: Run as Windows Service (recommended during install). It will start automatically.
3. Option B: Run manually:
   - Create data folder: `C:\data\db`
   - Start server:

```bash
"C:\\Program Files\\MongoDB\\Server\\8.0\\bin\\mongod.exe" --dbpath "C:\\data\\db"
```

4. Install mongosh separately (if not included) and make sure `mongosh` is on PATH.

### Verify with mongosh

```bash
mongosh
```

You should see a prompt like `test>`.

### Get your local address
- Default local connection: `mongodb://127.0.0.1:27017`
- You can confirm bind IPs:

```javascript
db.adminCommand({ getCmdLineOpts: 1 })
```

Look for `net.bindIp` and `net.port` (default 27017).

---

## Initialize Node.js Project

```bash
npm init -y
npm i express
npm i mongoose
npm i -D nodemon
```

Update `package.json` scripts for auto-reload during development:

```json
{
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  }
}
```

Create folders:
- `src/index.js`
- `src/models/user.model.js`
- `src/routes/user.routes.js` (optional; you can also keep routes in `index.js`)

---

## Connect to MongoDB with Mongoose
Place this at the top of `src/index.js` after imports.

```javascript
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

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
```

---

## Create Schema then Model
In `src/models/user.model.js`:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    age: { type: Number, min: 0 },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
```

---

## CRUD Routes (Express)
Either create `src/routes/user.routes.js` and mount it, or place directly in `src/index.js`.

Example inside `src/index.js` (after connection code):

```javascript
const User = require("./models/user.model");

// Create (POST /users)
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: "Validation error", error: err.message });
  }
});

// Read all (GET /users)
app.get("/users", async (_req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Read one (GET /users/:id)
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID", error: err.message });
  }
});

// Update (PATCH /users/:id)
app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Invalid data or ID", error: err.message });
  }
});

// Delete (DELETE /users/:id)
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: "Invalid ID", error: err.message });
  }
});

// Health check
app.get("/", (_req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
```

---

## Run the API

```bash
npm run dev
# or
npm start
```

---

## Test with Postman
1. Create user (POST `http://localhost:3000/users`)
   - Body → raw → JSON:

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "age": 36
}
```

2. Get all users (GET `http://localhost:3000/users`)
3. Get one user (GET `http://localhost:3000/users/:id`)
4. Update user (PATCH `http://localhost:3000/users/:id`)
   - Body → raw → JSON (send only fields to change)

```json
{ "age": 37 }
```

5. Delete user (DELETE `http://localhost:3000/users/:id`)

---

## Troubleshooting
- Ensure MongoDB service is running. If manual, keep the `mongod` window open.
- Connection errors: verify `mongodb://127.0.0.1:27017/Mastering_NodeJS` and that the DB server is listening on 27017.
- If Windows Firewall prompts on first run, allow private networks for `mongod.exe`.
- Duplicate email error indicates unique index enforcement on `email`.

---

## Reference
- MongoDB install on Windows: [official tutorial](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)