const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const templateRoot = path.join(__dirname, '/templates');

// add some security-related headers to the response
app.use(helmet());

//const swaggerDocument = YAML.load('./swagger.yml');
//app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');

    res.sendFile(path.join(__dirname+'/index.html'));
 
    //res.status(200).send(`
    //    <h1><marquee direction=right>Hello from Express path '/' on Now 2.0!</marquee></h1>
    //    <h2>Go to <a href="/about">/about</a></h2>
    //`)     
})
*/


module.exports = app
