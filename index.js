const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const templateRoot = path.join(__dirname, '/templates');
const swaggerDocument = YAML.load('./swagger.yml');

// add some security-related headers to the response
app.use(helmet());

app.use('/', swaggerUi.serve);
app.get('*', (req, res) => {
    swaggerUi.setup(swaggerDocument);
});

/*
app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html');

    res.sendFile(path.join(__dirname+'/index.html'));    
})
*/

module.exports = app
