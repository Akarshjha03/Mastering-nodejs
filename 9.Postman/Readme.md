# User Management API with Express.js

A simple RESTful API built using **Express.js** that demonstrates CRUD (Create, Read, Update, Delete) operations on a set of mock user data stored in a JSON file.

---

## 🚀 Features

- ✅ View Users in HTML – `GET /users` renders a simple HTML list of users.
- ✅ Get All Users (API) – `GET /api/users` returns all users in JSON format.
- ✅ Get User by ID – `GET /api/users/:id` fetches a single user by ID.
- ✅ Create User – `POST /api/users` adds a new user.
- ✅ Update User (Partial Update) – `PATCH /api/users/:id` updates a user’s details.
- ✅ Delete User – `DELETE /api/users/:id` removes a user from the list.
- ✅ Data persistence using `MOCK_DATA.json`.

---

## ⚡ Getting Started

### 1️⃣ Initialize Node.js Project
```bash
npm init -y
```

### 2️⃣ Install Dependencies
```bash
npm install express
```

### ▶️ Running the Server
Add the following script in your `package.json`:

```json
"scripts": {
  "start": "node index.js"
}
```

Start the server:

```bash
npm start
```

The server will run at:

```text
http://localhost:3000
```

---

## 📬 API Endpoints

| Method | Endpoint            | Description                  |
|-------:|---------------------|------------------------------|
|    GET | `/users`            | Returns users in HTML format |
|    GET | `/api/users`        | Returns all users (JSON)     |
|    GET | `/api/users/:id`    | Returns user by ID           |
|   POST | `/api/users`        | Creates a new user           |
|  PATCH | `/api/users/:id`    | Updates a user by ID         |
| DELETE | `/api/users/:id`    | Deletes a user by ID         |

---

## 📌 Testing with Postman

- **Create a collection**: Name it anything.
- **Add requests**: Use methods GET, POST, PATCH, DELETE.
- **Enter URL examples**:
  - `http://localhost:3000/api/users`
  - `http://localhost:3000/api/users/:id`
- **For POST and PATCH**:
  - Go to Body → x-www-form-urlencoded
  - Add key-value pairs for user details (e.g., `first_name`, `last_name`, `email`)
- **Run the server** and hit Send.
- **Verify changes** in `MOCK_DATA.json`.

## 📚 Reference

![Postman Example](https://github.com/Akarshjha03/Mastering-nodejs/blob/main/9.Postman/PostmanImg.png?raw=true)


---

## 📝 Notes

- This project uses file-based persistence (`MOCK_DATA.json`).
- In production, consider using a real database like MongoDB or PostgreSQL.
- The API is designed to be minimal and beginner-friendly for learning Express.js fundamentals.

---

## 🎥 Refer Video Tutorial

Learn from the full tutorial 👉 [`https://youtu.be/7OzNVIxPLH0?si=GQkKGMqvZn8G_81V`](https://youtu.be/7OzNVIxPLH0?si=GQkKGMqvZn8G_81V)
