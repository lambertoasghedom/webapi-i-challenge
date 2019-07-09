// implement your API here
const express = require("express")

const db = require('./data/db.js');
const server = express();

server.get("/", (req, res) => {
    res.send("NODE CHALLENGE")
})

//  GET all users <<<<<<<<
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
            if (id) {
                res.status(200).json(id)
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exist."})
            }
        })
        .catch(error => {
            res.status(500).json({ error: "The user information could not be retrived" })
        })
})

// DELETE request to /api/users/id
server.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    db.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(204).end()
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exist." })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

const port = 8000;
server.listen(port, () => console.log(`\n*** running on port ${port} ***\n`))