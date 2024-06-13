var express = require('express');
var router = express.Router();
const candidatureModel= require("../model/candidature")

router.get('/:id', function (req, res, next) {
  id_utilisateur = req.params.id
  result=candidatureModel.read_infos_from_user(id_utilisateur, function(result1){
    console.log(result1[0])
    res.render('mes_candidatures', {candidatures: result1});
  });
});

router.get('/candidature/:id', function (req, res, next) {
  id_candidature = req.params.id
  result=candidatureModel.read_infos_candidature(id_candidature, function(result1){
    console.log(result1[0])
    res.render('consulter_candidature', {candidature: result1[0]});
  });
});

module.exports = router;

