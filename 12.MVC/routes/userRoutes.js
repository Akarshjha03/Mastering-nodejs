const express = require("express");
const router = express.Router();
const { createUser, getUsers, getUserById } = require("../controllers/userController");

// POST /api/users → Create user
router.post("/", createUser);

// GET /api/users → Get all users
router.get("/", getUsers);

// GET /api/users/:id → Get single user
router.get("/:id", getUserById);

module.exports = router;
