const router = require ("express").Router();
const path = require ("path");

//notes page
router.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//home page
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  module.exports = htmlRoutes;