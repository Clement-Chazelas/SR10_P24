var express = require('express');
var router = express.Router();

router.get('/accueil/offresValides/:id', function (req, res, next) {
  res.render('postuler');
});

module.exports = router;
