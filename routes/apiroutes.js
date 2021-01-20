const router = require ("express").Router()
const fs = require("fs");
const path = require ("path");
const {v4:uuidv4} = require("uuid");

router.get("/api/notes", function (req, res){
    fs.readfile("../db/db.json", function (err, data){
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "application/json"});
    });
});

router.post("/api/notes", function (req, res) {
    const newNote = req.body;
    newNote.id = uuidv4();

    fs.readFile("./db/dbjson", function (err, data) {
        if (err) throw err;
        res.writeHead(200, {"content-Type": "application/json"});
        res.end(data);
    
    let parsedData = JSON.parse(data);
    parsedData.push(newNote);
    let stringifiedData = JSON.stringify(parsedData);
    res.end(stringifiedData);

    fs.writeFile("./db/db.json", stringifiedData, (err) => {
        if (err) throw err;
        console.log("Note has been written");
        });
    });
});

router.del

// Crud




module.exports = apiRoutes;