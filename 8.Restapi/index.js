// Import the Express framework for building the web server
const express = require("express");

// Import the mock user data from a JSON file
// Node.js automatically parses the JSON into a JavaScript array/object
const users = require("./MOCK_DATA.json");

// Create an Express application instance
const app = express();

// Define the port number where the server will listen for requests
const port = 5000;

// Define a GET route for the "/users" path
app.get("/users", (req, res) => {

    // Create an HTML string containing an unordered list (<ul>)
    // For each user in the `users` array, generate a <li> element with their first name
    // .map(...) returns an array of strings, .join('') concatenates them into a single string without commas
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;

    // Send the generated HTML back to the client as the response
    res.send(html);
});


//-----------------------------REST API----------------------------------------


//TASK 1
app.get("/api/users", (req, res) => {
    return res.json(users);
})


//TASK 2
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

//TASK 3
app.put("/api/users/:id", (req, res) => {
    // TODO: Create a user with id
    return res.json({ status: "pending - to be done in postman folder" })
})

//TASK 4
app.patch("/api/users/:id", (req, res) => {
    // TODO: Edit the user with id
    return res.json({ status: "pending - to be done in postman folder" })
})

//TASK 5
app.delete("/api/users/:id", (req, res) => {
    // TODO: Delete the user with id
    return res.json({ status: "pending - to be done in postman folder" })
})

/*------------------------------  OR  --------------------------------
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .put((req, res) => {})
  .delete((req, res) => {});
*/


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});