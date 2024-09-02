// Write your "projects" router here!
const express = require('express')
const { get, insert, update, remove, getProjectActions, } = require("./projects-model")
const server = express()

server.use(express.json())

server.get('/', async (req, res) => {
    try {
        const projects = await get()
        if (!projects) {
            res.status(404).send([])
        } else {
            res.status(200).json(projects)
        }
    } catch (err) {
        res.status(500).json({ "status": "Not found" })
    }
})

module.exports = server