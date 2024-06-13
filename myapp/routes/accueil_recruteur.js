var express = require('express');
var router = express.Router();
const accueilRecruteurModel= require("../model/ficheEmploi")

router.get('/', function (req, res, next) {
  result=accueilRecruteurModel.readall(function(result){
    res.render('accueil_recruteur', { title: 'Liste des fiches d\'emplois', accueil_candidat: result });
  });
});

module.exports = router;
