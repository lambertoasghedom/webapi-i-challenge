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
            res.status(500).json({ errorMessage: "The users information could not be retrived" })
        })
})

// GET users with a specific id
server.get("/api/users/:id", (req, res) => {
    const { id } = req.params;
    db.findById(id)
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

const port = 8000;
server.listen(port, () => console.log(`\n*** running on port ${port} ***\n`))