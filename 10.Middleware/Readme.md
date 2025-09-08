# Middlewares

### Install Nodemon
This continiously checks code for any changes, and restarts the server with updated code automatically

npm install nodemon

script { start : nodemon index.js }

### 🛑 First, What is Middleware?

Think of middleware as a checkpoint between the client request and the final response.

A request comes in → passes through a series of middlewares → finally reaches the route/handler → then response goes back.

Each middleware can inspect, modify, or stop the request/response.

### 🧩 Types of Middleware in Express (with practical analogies)

1. **Application-level Middleware**

- **Definition**: Bound directly to the app using `app.use()` or `app.get()`, `app.post()`, etc.
- **Purpose**: Used for tasks like logging, authentication checks, or parsing request bodies.
- **Example**: A security guard at the main gate of a mall — checks everyone entering.

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control
});
```

- **Analogy**: Before entering the mall (your server), the guard checks and lets you in.

2. **Router-level Middleware**

- **Definition**: Same as app-level, but bound to a router instance.
- **Purpose**: Used to modularize routes (e.g., `/users`, `/products`).
- **Example**: A separate bouncer for a nightclub inside the mall — only checks people entering that club.

```js
const router = express.Router();

router.use((req, res, next) => {
  console.log("User section accessed");
  next();
});

router.get("/profile", (req, res) => res.send("Profile Page"));
app.use("/users", router);
```

- **Analogy**: Mall security doesn’t bother, but the club bouncer still checks you.

3. **Built-in Middleware**

- **Definition**: Express already provides some pre-made middlewares.
- **Examples**:
  - `express.json()` → parse JSON body
  - `express.urlencoded()` → parse form data
  - `express.static()` → serve static files

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
```

- **Analogy**: A shopping cart system already built into the mall — no need to build your own.

4. **Third-party Middleware**

- **Definition**: External packages installed via npm.
- **Examples**:
  - `morgan` (logger)
  - `cors` (handle cross-origin requests)
  - `helmet` (security headers)

```js
const morgan = require("morgan");
app.use(morgan("tiny"));
```

- **Analogy**: The mall hires an external cleaning company — they aren’t part of the mall but provide essential services.

5. **Error-handling Middleware**

- **Definition**: Special middleware with four parameters `(err, req, res, next)`.
- **Purpose**: Catch and handle errors in routes.

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

- **Analogy**: In a mall, if someone faints, there’s a first-aid desk (handles emergencies).

6. **Custom Middleware**

- **Definition**: Middleware you create for your specific logic.
- **Example**: Checking if a user is logged in before accessing `/dashboard`.

```js
function checkLogin(req, res, next) {
  if (req.query.user === "Akarsh") next();
  else res.send("Access Denied!");
}

app.get("/dashboard", checkLogin, (req, res) => {
  res.send("Welcome to Dashboard");
});
```

- **Analogy**: A VIP lounge in the mall — only members are allowed.

### ✅ Summary in Mall Analogy

- **Application-level**: Main gate security
- **Router-level**: Club bouncer
- **Built-in**: Mall facilities (shopping carts, elevators)
- **Third-party**: External cleaning company
- **Error-handling**: First-aid desk
- **Custom**: VIP lounge checks

### References

- Using middleware — [Express documentation](https://expressjs.com/en/guide/using-middleware.html)
- Writing middleware — [Express documentation](https://expressjs.com/en/guide/writing-middleware.html)
