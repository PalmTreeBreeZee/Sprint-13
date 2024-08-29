// Write your "actions" router here!
const express = require('express');
const server = express();

server.use(express.json());
server.get('/actions', (req, res) => {
    res.send('hello from actions')
})

module.exports = server