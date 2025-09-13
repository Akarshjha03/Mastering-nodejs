const express = require("express");
const connectDB = require("./config/db"); // ✅ Correct relative path

const userRoutes = require("./routes/userRoutes"); // adjust if filename differs

const app = express();

// Middleware to parse JSON
app.use(express.urlencoded({ extended: true }));


// Connect Database
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
