var express = require('express');
var router = express.Router();
const offreModel= require("../model/offres")
const ficheEmploiModel = require("../model/ficheEmploi")
const userModel= require("../model/utilisateur")

router.get('/', function (req, res, next) {
  console.log('params', req.params) 

  result=ficheEmploiModel.readall(function(result1){
    res.render('offresValides', { fiches: result1});
    // for (i in result1){
    //   // console.log(result1[i].id_fiche_offre);

    //   id_fiche_emploi = result1[i].id_fiche_offre
    //   fiches = ficheEmploiModel.read(id_fiche_emploi,function(result2){
    //     // console.log(result2)
    // id_utilisateur = req.params<
    //   a = userModel.read(id_utilisateur, function(result2) {
    //     console.log(result1[0])
    //     res.render('offresValides', { fiches: result1, user: result2});
    //   })>
        

  });
    

});

router.get('/:id', function (req, res, next) {
  result = ficheEmploiModel.read(req.params.id, function(result1) {
    console.log(result1[0])
    res.render('postuler', {fiche: result1[0]});
  })
});

module.exports = router;
