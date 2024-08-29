// Write your "actions" router here!

const express = require('express');
const authentication = require('./actions-middlware')
const server = express();

console.table({id: 1, name: 'Azeem'})
server.use(express.json());

server.get('/', authentication, (req, res) => {
    res.send('hello from actions')
    console.log('here')
})

module.exports = server