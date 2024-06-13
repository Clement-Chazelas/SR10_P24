var express = require('express');
var router = express.Router();
const organisationModel= require("../model/organisation")

router.get('/', function (req, res, next) {
  result=organisationModel.readall(function(result){
    res.render('ListeOrganisations', { title: 'Liste des organisations', organisations: result });
  });
});

//initialisation
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// router.post('/organisations', function (req, res, next) {
// /*récupérer les données passées via le body de la requête post :
// Exemple :
//  const organisation_fname = req.body.fname;
//  const organisation_lname = req.body.lname;
// */

// //utiliser le model pour enregistrer les données récupérées dans la BD

// });



module.exports = router;
