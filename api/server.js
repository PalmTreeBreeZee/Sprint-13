const express = require('express');
const server = express();

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
const actionsRoute = require('./actions/actions-router')
const projectsRoute = require('./projects/projects-router')

server.use(express.json());
server.use('/api/actions', actionsRoute)
server.use('/api/projects', projectsRoute)

server.get('/api', (req, res) => {
    res.send('Hello World')
})

module.exports = server;
