//Required Modules
const express = require ("express");
const path = require ("path"); 
const fs = require ("fs");
const {v4:uuidv4} = require("uuid");


//uses random heroku port or 3000
const PORT = process.env.PORT || 3000;

//creates server
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// app.use("/api/notes" , apiRoutes);
// app.use("/", htmlRoutes);

//adds a new note
app.post("/api/notes", function (req, res) {
    const note = req.body;
    note.id = uuidv4();

    fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        res.writeHead(200, {"content-Type": "application/json"});
        
    
    let parseData = JSON.parse(data);
    parseData.push(note);
    let stringData = JSON.stringify(parseData);
    res.end(stringData);

    fs.writeFile("./db/db.json", stringData, (err) => {
        if (err) throw err;
        console.log("Note has been written");
        });
    });
});

//shows all of the notes in DB
app.get("/api/notes", function (req, res){
    fs.readFile("./db/db.json", "utf-8", function (err, data){
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(data);
    });
});

//deletes note
app.delete("/api/notes/:id", function (req, res) {
    const noteId = req.params.id;

    fs.readFile("./db/db.json", "utf-8", function (err, data) {

        if (err) throw err;
        let parseData = JSON.parse(data);
        const newData = parseData.filter((note) => {
            console.log(note.id, noteId)
            return note.id !== noteId;
        });
        console.log(newData);
        for (let i = 0; i < parseData.length; i++) {
          if (noteID === parseData[i].id) {
          };
        };
    
        let stringifiedData = JSON.stringify(newData);
        res.end(stringifiedData);
    
        fs.writeFile("./db/db.json", stringifiedData, (err) => {
          if (err) throw err;
          console.log("Data written to file");
        });
      });
    });

    //notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  
  //home page
  app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "./public/index.html"));
    });
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });