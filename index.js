// implement your API here
const express = require("express")

const db = require('./data/db.js');
const server = express();

server.get("/", (req, res) => {
    res.send("NODE CHALLENGE")
})

//  R in CRUD <<<<<<<<
server.get("/api/users", (req, res) => {
    db.find()
        .then(db => {
            res.status(200).json(db)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

const port = 8000;
server.listen(port, () => console.log(`\n*** running on port ${port} ***\n`))