'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos rutas
var project_routes = require('./routes/project');



//middelwares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//rutas
app.use('/api', project_routes);


/*app.get('/', (req, res) =>{
    res.status(200).send(
     "<h1>Pagina de inicio</h1>"
    );
});

app.post('/test/:id', (req, res) =>{
    console.log(req.body.name);
    console.log(req.query.web);
    console.log(req.params.id);
    
    res.status(200).send({
        message: "hola mundo desde mi api de nodeJs "
     });
});*/

//exportar
module.exports = app;