var express = require('express');
var router = express.Router();
const userModel= require("../model/utilisateur")
const offreModel= require("../model/offres")
const candidatureModel = require("../model/candidature")
// const ficheEmploiModel = require("../model/ficheEmploi")

router.get('/proposer', function (req, res, next) {
  result = userModel.readall(function(result1){
    res.render('proposer_offre')
  })
})

router.get('/offres_recruteur/:id', function (req, res, next) {
    id_utilisateur = req.params.id
    result = offreModel.read_info_from_user(id_utilisateur, function(result1){
        console.log(result1)
      res.render('offres_recruteur', { offres: result1 });
    });
});

router.get('/offre/:id', function (req, res, next) {
  id_utilisateur = req.params.id
  result = offreModel.read_infos(id_utilisateur, function(result1){
      console.log(result1)
    res.render('voir_offre', { offre: result1[0] });
  });
});

router.get('/candidatures/:id', function (req, res, next) {
    id_offre = req.params.id
    console.log(id_offre)
    result = offreModel.read_infos(id_offre, function(result1){
        console.log(result1)
      res.render('visualiser_candidature_rec', { offres: result1 });
    });
});

router.get('/candidat/:id', function (req, res, next) {
    id_offre = req.params.id
    console.log(id_offre)
    result = candidatureModel.read_user(id_offre, function(result1){
        console.log(result1)
      res.render('detail_candidat_rec', { candidature: result1[0] });
    });
});

router.get('/:id', (req, res) => {
  console.log(req.session)
  result = userModel.read(req.params.id, function(result1){
    res.render('accueil_recruteur', {user: result1[0]});
  });
});

module.exports = router;
