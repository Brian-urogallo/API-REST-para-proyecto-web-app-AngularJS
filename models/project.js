'use strict'

var mongoose = require('mongoose');
const { stringify } = require('querystring');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Project',ProjectSchema);
// projects ---> guarda los elementos en esa direccion, si no existe la crea