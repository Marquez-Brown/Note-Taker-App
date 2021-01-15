var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;
var apiRoutes = require("./routes/apiroutes");
var htmlRoutes = require("./routes/htmlroutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use("/api",apiRoutes);
app.use("/", htmlRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });