'use strict'

var express = require('express');

var app = express();

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Cargar archivos de rutas
var equipoRoutes = require('./routes/equipo');
// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
// Rutas
app.use('/equipo', equipoRoutes);

// Exportar
module.exports = app;