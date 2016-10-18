// requirement of Express.js framework
var express = require("express");
var app = express();

// assign root directory value of "Home Page" message
app.get("/", function(req, res) {
    res.send("Home Page");
});

// assign "/users" endpoint value of "List of Users" message
app.get("/users", function(req, res) {
    res.send("List of Users");
});

// assign "/contact" endpoint value of "Contact information" message
app.get("/contact", function(req, res) {
    res.send("Contact information");
});

// assign final "404" status and error to all endpoints not recognized
app.use(function(req, res) {
    res.status(404).send("Page not found");
});

// listen for server on port 3000
app.listen(3000);
