//Required Modules
const express = require("express");
const fs = require("fs");
const path = require("path");
const apiRoutes = require("apiRoutes");
const htmlRoutes = require("htmlRoutes");

//creates server
var app = express();

//uses random heroku port or 3000
var PORT = process.env.PORT || 3000;

//routes
var apiRoutes = require("./routes/apiroutes");
var htmlRoutes = require("./routes/htmlroutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// app.use("/api/notes" ,apiRoutes);
// app.use("/", htmlRoutes);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });