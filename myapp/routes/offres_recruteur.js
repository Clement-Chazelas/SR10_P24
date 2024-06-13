var express = require('express');
var router = express.Router();
const offreModel= require("../model/offres")
// const ficheEmploiModel = require("../model/ficheEmploi")

router.get('/', function (req, res, next) {
    result= offreModel.readall(function(result){
      res.render('offres_recruteur', { offres: result });
    });
  });

module.exports = router;
