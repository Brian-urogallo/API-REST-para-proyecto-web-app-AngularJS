'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/portafolio')
        .then(() =>{
            console.log("Conexion a la base de datos establecida con exito...");
            //creacion del servidor
            app.listen(port,() =>{
                console.log('servidor corriendo correctamente en la url:3700');
            })

        })
        .catch(err => console.log(err));  