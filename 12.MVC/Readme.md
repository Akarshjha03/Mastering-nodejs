
# MVC Pattern

A simple RESTful API for user management built using the **Model-View-Controller (MVC)** architecture in Node.js and Express. This project demonstrates clean separation of concerns and scalable structure for backend applications.

![MVC Diagram](https://github.com/Akarshjha03/Mastering-nodejs/raw/main/12.MVC/MVC.png)

---

## 📁 Project Structure

```
User-API/
├── index.js                    # Entry point (connects everything)
├── config/
│   └── db.js                   # Database connection
├── models/
│   └── User.js                 # User Schema & Model
├── controllers/
│   └── userController.js       # All user logic (CRUD functions)
├── routes/
│   └── userRoutes.js           # Routes for users
└── middlewares/
    └── errorHandler.js         # (Optional) error-handling middleware
```

---

## ⚙️ How MVC Works in This Project

The **MVC pattern** separates the application into three interconnected components:

### 1️⃣ Model (`models/User.js`)
- Responsible for **data management**.
- Defines the **User schema** and interacts with the database (MongoDB).
- Example: storing, retrieving, updating, and deleting user data.

### 2️⃣ View
- In API-only applications, the **View** is typically the **JSON response** sent to the client.
- All responses to API requests (success/error) act as the "view" in this context.

### 3️⃣ Controller (`controllers/userController.js`)
- Contains **business logic** for handling user operations.
- Processes requests, communicates with the Model, and sends the proper response.
- Example functions:
  - `createUser` – Adds a new user
  - `getUsers` – Retrieves all users
  - `getUserById` – Retrieves a specific user
  - `updateUser` – Updates user data
  - `deleteUser` – Removes a user

---

## 🌐 Routes (`routes/userRoutes.js`)
Routes act as the **entry point** for client requests and delegate tasks to the controllers:

| Method | Endpoint       | Controller Function |
|--------|----------------|------------------|
| POST   | `/users`       | `createUser`     |
| GET    | `/users`       | `getUsers`       |
| GET    | `/users/:id`   | `getUserById`    |
| PUT    | `/users/:id`   | `updateUser`     |
| DELETE | `/users/:id`   | `deleteUser`     |

Routes are imported in `index.js` and mounted on the Express app.

---

## ⚡ Database Connection (`config/db.js`)
- Handles **connection to MongoDB** using Mongoose.
- Centralized configuration makes it easy to switch databases or manage connection errors.

```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
```

## 🧩 Middleware (`middlewares/errorHandler.js`)
- Optional middleware for error handling.
- Catches unhandled errors and sends consistent responses.

```js
const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
};

module.exports = errorHandler;
```

## 🚀 Entry Point (`index.js`)
- Initializes Express app.
- Connects to the database.
- Mounts routes and middleware.
- Starts the server.

```js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## ✅ Key Advantages of MVC in this Project
- **Separation of concerns**: Clear distinction between data, logic, and routes.
- **Scalable structure**: Easy to add new models, controllers, and routes.
- **Maintainable**: Code is organized and easy to debug.
- **Reusability**: Controller logic can be reused across multiple routes or services.