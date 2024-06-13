var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('accueil_candidat');
});

module.exports = router;
