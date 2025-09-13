const User = require("../models/User");

// 👉 Create new user
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, gender, jobTitle } = req.body;

    const result = await User.create({
      firstName,
      lastName,
      email,
      gender,
      jobTitle,
    });

    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 👉 Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👉 Get single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
