const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
//const YAML = require('yamljs');
//const swaggerUi = require('swagger-ui-express');

const templateRoot = path.join(__dirname, '/templates');
//const swaggerDocument = YAML.load('./swagger.yml');

// add some security-related headers to the response
app.use(helmet());
app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html');
    let password = process.env.DATABASE_PASSWORD; 

    res.sendFile(path.join(__dirname+'/index.html')); 
    //res.send(200, `
    //    <h1>Secret: ${password}</h1>   
    ///`); 
})

module.exports = app
