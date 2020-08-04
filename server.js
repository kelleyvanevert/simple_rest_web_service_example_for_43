/*

T H E    I N T E R N E T


CLIENT             [http request]                SERVER (address: https://reader.codaisseur.com/)
browser       -------------------------->
terminal
              <--------------------------
                   [http response]


HTTP request has:
- method (GET, POST, PUT, DELETE, ...)
- path (/, /courses/backend-bootcamp/02-orm/rest-in-express/restful-api, ...)
- body

HTTP response has:
- status code (200: OK, 301: redirected, .....)
  - 200 range: "it went well"
  - 300 range: "the page is somewhere else"
  - 400 range: "you made a mistake" (404: does not exist, 401: unauthorized, ..)
  - 500 range: "oop, something went wrong on my side"
- body (text/html/json/image/...)



B U I L D I N      A     R E S T      A P I


   frontend code, e.g. https://reader.codaisseur.com/
!! backend, e.g. https://crystal.codaisseur.com/

Express
- handle all those requests

RESTful API "nice predictable api playbook":

GET     /users        --> means: get all users
POST    /users        --> means: create a new user
GET     /users/5      --> means: please give me the user with id=5
PUT     /users/5      --> means: update the user with id=5
DELETE  /users/5      --> means: delete the user with id=5

PUT     /users/5   ---   but that user does not exist?

*/

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// fake database:
const users = [
  { id: 0, name: "Kelley" },
  { id: 1, name: "Elsie" },
  { id: 2, name: "Heleen" },
];

// meat of the server:
// a list of request handlers,
//  for each http method/path combination you want to be able to handle

app.get("/", function onRequest(req, res) {
  // why use a handler callback here?
  // req <- the request info
  // res <- a "placeholder/builder object" to start making/sending the response
  res.send("hello");
});

// user
// ====

// create
app.post("/users", (req, res) => {
  res.send("ok");
});

// update user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (users[id]) {
    // do the change
    res.send("ok then");
  } else {
    res.status(404).send("that user does not exist");
  }
});

// delete user
app.delete("/users/:id", (req, res) => {
  // todo
  res.send("todo");
});

// get a specific user
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (users[id]) {
    res.send(users[id]);
  } else {
    res.status(404).send("that user does not exist");
  }
});

// get all user
app.get("/users", (req, res) => {
  res.send(users);
});

// trees

// GET /trees
// POST /trees
// GET /trees/:id
// DELETE /trees/:id
// PUT /trees/:id

app.listen(4000, () => {
  console.log("woo!");
});
