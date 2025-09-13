const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Mastering_NodeJS");
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ Mongo Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
