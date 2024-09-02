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

server.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const projects = await get(id)
        if (!projects) {
            res.status(404).send()
        } else {
            res.status(200).json(projects)
        }
    } catch (err) {
        res.status(500).json({ "status": "Not found" })
    }
})
server.post('/', async (req, res) => {
    try {
        const { body } = req
        console.log(body)
        const projects = await insert(body)
        if (!projects) {
            res.status(400).send()
        } else {
            res.status(200).json(projects)
        }
    } catch (err) {
        res.status(500).json({ "status": "Not found" })
    }
})

module.exports = server