const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
const templateRoot = path.join(__dirname, '/templates');

// add some security-related headers to the response
app.use(helmet());
app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html');
    //let password = process.env.DATABASE_PASSWORD; 
    //res.send(200, `<h1>Secret: ${password}</h1>`); 

    res.sendFile(path.join(__dirname+'/index.html')); 
})

module.exports = app
