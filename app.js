var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Home Page");
});

app.get("/users", function(req, res) {
    res.send("List of Users");
});

app.get("/contact", function(req, res) {
    res.send("Contact information");
});

app.use(function(req, res) {
    res.status(404).send("Page not found");
});

app.listen(3000);
