const express = require('express');
const router = express.Router();

router.get('/candidat', (req, res) => {
  res.render('accueil_candidat', { user: req.session.user });
});

router.get('/admin', (req, res) => {
  res.render('accueil_admin', { user: req.session.user });
});

router.get('/recruteur', (req, res) => {
  res.render('accueil_recruteur', { user: req.session.user });
});

module.exports = router;
