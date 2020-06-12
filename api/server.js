const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projectsRouter');

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());

// server.use('/api/projects', projectsRouter);


server.get('/', (req, res) => {
    res.status(200).json(`It's working...My Server is WORKING!!!`)
})

function logger(req, res, next){
    const method = req.method;
    const endpoint = req.originalUrl;
    
    console.log(`${method} to ${endpoint} at ${new Date().toISOString()}`);
    next();
}


module.exports = server;