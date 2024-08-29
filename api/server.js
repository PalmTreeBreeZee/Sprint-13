const express = require('express');
const server = express();
const port = process.env.PORT || 9000
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
const actionsRoute = require('./actions/actions-router')
server.use(express.json());
server.use('/actions', actionsRoute)

server.get('/', (req, res) =>{
    res.send('Hello World')
})

module.exports = {server, port};
