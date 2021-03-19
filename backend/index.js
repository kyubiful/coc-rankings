'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/esl-coc-qualis')
  .then(() => {
      console.log('Conexion a la base de datos establecida con éxito');
      app.listen(port, () => {
          console.log('Servidor corriendo correctamente en la url localhost:'+port);
      });
  })
  .catch((err) => console.log(err));