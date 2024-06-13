var express = require('express');
var router = express.Router();
const candidatureModel= require("../model/candidature")

router.get('/', function (req, res, next) {
  result=candidatureModel.readall(function(result){
    res.render('consulter_candidature', { title: 'Liste des candidatures', candidatures: result });
  });
});

module.exports = router;

