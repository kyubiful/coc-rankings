'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipoSchema = Schema({
  nombre: String,
  clasificatorio: Number,
  puntos: Number
});


module.exports = mongoose.model('Equipo', equipoSchema);