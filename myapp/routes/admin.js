var express = require('express');
var router = express.Router();
const userModel= require("../model/utilisateur")
const organisationModel = require("../model/organisation")
// const ficheEmploiModel = require("../model/ficheEmploi")

router.get('/nouveaux_recruteurs', function (req, res, next) {
    result = organisationModel.read_non_checked(function(result1){
        console.log(result1)
        res.render('gestion_rejoindre_orga', {organisations: result1});
    });
});

router.get('/admin/:id', (req, res) => {
    result = userModel.read(req.params.id, function(result1){
      res.render('accueil_admin', {user: result1[0]});
    });
  });

module.exports = router;
