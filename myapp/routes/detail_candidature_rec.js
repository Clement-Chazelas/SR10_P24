var express = require('express');
var router = express.Router();
const candidatureModel= require("../model/candidature")

router.get('/', function (req, res, next) {
    // TO DO : access to id_offre
  result=candidatureModel.readall(function(result){
    res.render('detail_candidature_rec', { candidature: result });
  });
});

module.exports = router;

