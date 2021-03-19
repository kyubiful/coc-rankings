'use strict'

var express = require('express');
var equipoController = require('../controllers/equipo');

var router = express.Router();

router.post('/save', equipoController.saveTeam);
router.get('/teams', equipoController.getAllTeams);
router.get('/sumTeams', equipoController.getSumAllTeams);
router.post('/teamsQualy', equipoController.getTeamsByQualifier);
router.post('/saveTeams', equipoController.saveTeams);

module.exports = router;