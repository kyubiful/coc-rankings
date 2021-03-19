'use strict'

var Team = require('../models/equipo');

var controller = {

  saveTeam: (req, res) => {

    var params = req.body;
    var team = new Team();
        
    team.nombre = params.nombre;
    team.clasificatorio = params.clasificatorio;
    team.puntos = params.puntos;

    team.save((err, teamStored) => {
      if(err) return res.status(500).send({message: 'Error al guardar'});
      if (!teamStored) return res.status(404).send({message: 'No se ha podido guardar'})
      return res.status(200).send({equipo: teamStored});
    });

  },

  saveTeams: (req, res) => {
    var params = req.body;

    Team.insertMany(params, (err, teamsStored) =>{
      if(err) return res.status(500).send({message: 'Error al guardar'});
      if (!teamsStored) return res.status(404).send({message: 'No se ha podido guardar'})
      return res.status(200).send({equipo: teamsStored});
    })
  },

  getAllTeams: (req, res) => {

    Team.aggregate([{$sort: { clasificatorio: 1, puntos: -1 }}]).exec((err, teams) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos'});
      if(!teams) return res.status(404).send({message: 'No hay equios'});
      return res.status(200).send({equipos: teams});
    });

  },

  getSumAllTeams: (req, res) => {

    Team.aggregate([{$group: { _id: "$nombre", puntos: {$sum: "$puntos"}}},{$sort: {puntos: -1}}]).exec((err,teams) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos'});
      if(!teams) return res.status(404).send({message: 'No hay equios'});
      return res.status(200).send({equipos: teams});
    });
 },
  
  getTeamsByQualifier: (req, res) => {

    var params = req.body;
    var qualifier = params.clasificatorio;

    Team.aggregate([{$match: {clasificatorio: qualifier}}, { $sort: {puntos: -1}}]).exec((err, teams) => {
      if(err) return res.status(500).send({message: 'Error al devolver los datos'});
      if(!teams) return res.status(404).send({message: 'No hay equios'});
      return res.status(200).send({equipos: teams});
    })

  }

};

module.exports = controller;